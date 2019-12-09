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
      sorted: [],
      leftTab: true,
    };
  }

  componentDidMount() {
    this.getTickets().then(res =>
      this.setState({ tickets: res }, () => {
        this.toFilter();
      })
    );
  }

  toSort = (left = true) => {
    const { filtered } = this.state;
    const sorted = filtered.sort((a, b) => {
      if (left === true) return a.price - b.price;
      return a.price - b.price;
    });
    this.setState({ sorted }, () => {
      console.log(sorted);
    });
  };

  toFilter = () => {
    const { tickets, filterState } = this.state;
    const values = Object.values(filterState);
    if (values.every(el => el === false) || filterState.all === true) {
      this.setState({ filtered: tickets }, () => {
        this.toSort(true);
      });
      return;
    }
    let without = [];
    let oneTransplant = [];
    let twoTransplant = [];
    let threeTransplant = [];
    if (filterState.withoutTransplant) {
      without = tickets.filter(el => el.segments[0].stops.length === 0);
    }
    if (filterState.oneTransplant) {
      oneTransplant = tickets.filter(el => el.segments[0].stops.length === 1);
    }
    if (filterState.twoTransplant) {
      twoTransplant = tickets.filter(el => el.segments[0].stops.length === 2);
    }
    if (filterState.threeTransplant) {
      threeTransplant = tickets.filter(el => el.segments[0].stops.length === 3);
    }
    this.setState({
      filtered: [...without, ...oneTransplant, ...twoTransplant, ...threeTransplant],
    });
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
    if (type === 'all') {
      const boolToggle = !filterState.all;
      this.setState({
        filterState: {
          all: boolToggle,
          withoutTransplant: boolToggle,
          oneTransplant: boolToggle,
          twoTransplant: boolToggle,
          threeTransplant: boolToggle,
        },
      });
      return;
    }
    const newFilterState = filterState;
    newFilterState[type] = !newFilterState[type];
    this.setState({ filterState: newFilterState });
    this.toFilter();
  };

  render() {
    const { filterState, leftTab, sorted } = this.state;
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
                {sorted.length > 0
                  ? sorted.slice(0, 5).map(el => {
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
