import React from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import ContainerFluid from './components/styled/ContainerFluid';
import LogoLink from './components/styled/LogoLink';
import Filter from './components/styled/Filter';
import Content from './components/styled/Content';
import RightSide from './components/styled/RightSide';
import SortButtons from './components/styled/SortButtons';
import RightSortButton, { SortButton } from './components/styled/SortButton';
import Tickets from './components/styled/Tickets';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
	body {
		font-family: 'Open Sans';
	}
	* {
		box-sizing: border-box;
	}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: {
        all: false,
        withoutTransplant: false,
        oneTransplant: false,
        twoTransplant: false,
        threeTransplant: false,
      },
      tickets: [],
      leftTab: true,
    };
  }

  componentDidMount() {
    this.setState({ tickets: this.getTickets() });
  }

  getTickets = async () => {
    const id = await axios.get('https://front-test.beta.aviasales.ru/search');
    const tickets = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${id.data.searchId}`
    );
    return tickets.data.tickets;
  };

  toggleTabs = side => event => {
    event.preventDefault();
    if (side === 'left') {
      this.setState({ leftTab: true });
    }
    if (side === 'right') {
      this.setState({ leftTab: false });
    }
  };

  checkboxHandler = type => () => {
    const { filterState } = this.state;
    const newFilterState = filterState;
    newFilterState[type] = !newFilterState[type];
    this.setState({ filterState: newFilterState });
  };

  render() {
    const { filterState, leftTab, tickets } = this.state;
    return (
      <>
        <GlobalStyle />
        <ContainerFluid>
          <LogoLink />
          <Content>
            <Filter checkboxHandler={this.checkboxHandler} filter={filterState} />
            <RightSide>
              <SortButtons>
                <SortButton changer={this.toggleTabs('left')} isActive={leftTab} left>
                  самый дешевый
                  {tickets.map(el => (
                    <div>{el}</div>
                  ))}
                </SortButton>
                <RightSortButton changer={this.toggleTabs('right')} isActive={leftTab} right>
                  самый быстрый
                </RightSortButton>
              </SortButtons>
              <Tickets />
            </RightSide>
          </Content>
        </ContainerFluid>
      </>
    );
  }
}

export default App;
