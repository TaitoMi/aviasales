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
      filtered: [],
      // sorted: [],
      leftTab: true,
      filtToInt: {
        withoutTransplant: 0,
        oneTransplant: 1,
        twoTransplant: 2,
        threeTransplant: 3,
      },
    };
  }

  componentDidMount() {
    this.getTickets().then(res =>
      this.setState({ tickets: res }, () => {
        this.toFilter();
        // const { tickets } = this.state;
        // const sorted = tickets.sort((a, b) => {
        //   return a.price - b.price;
        // });
        // this.setState({ sorted });
      })
    );
  }

  toFilter = filt => {
    const { tickets, filterState, filtToInt } = this.state;
    const values = Object.values(filterState);
    if (values.every(el => el === false) || filterState.all === true) {
      this.setState({ filtered: tickets });
      return;
    }
    const filteredArr = tickets.filter(el => el.segments[0].stops.length === filtToInt[filt]);
    this.setState({ filtered: [...filteredArr] });
  };

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
    this.toFilter(type);
  };

  render() {
    const { filterState, leftTab, filtered } = this.state;
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
                {filtered.length > 0
                  ? filtered.map(el => {
                      return (
                        <Ticket price={el.price} carrier={el.carrier} segments={el.segments} />
                      );
                    })
                  : null}
              </Tickets>
            </RightSide>
          </Content>
        </ContainerFluid>
      </>
    );
  }
}

export default App;
