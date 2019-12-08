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
import Ticket from './components/styled/Ticket';

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
    this.getTickets().then(res => this.setState({ tickets: res }));
  }

  getTickets = async () => {
    const id = await axios.get('https://front-test.beta.aviasales.ru/search');
    const gettedTickets = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${id.data.searchId}`
    );
    return gettedTickets.data.tickets;
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
    const check = () => {
      if (tickets.length > 0) console.log(tickets[0]);
    };
    check();
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
                </SortButton>
                <RightSortButton changer={this.toggleTabs('right')} isActive={leftTab} right>
                  самый быстрый
                </RightSortButton>
              </SortButtons>
              <Tickets>
                {tickets.length > 0 ? (
                  <Ticket
                    price={tickets[0].price}
                    carrier={tickets[0].carrier}
                    segments={tickets[0].segments}
                  />
                ) : null}
              </Tickets>
            </RightSide>
          </Content>
        </ContainerFluid>
      </>
    );
  }
}

export default App;
