import React from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import ContainerFluid from './components/styled/ContainerFluid';
import LogoLink from './components/styled/LogoLink';
import Filter from './components/styled/Filter';
import Content from './components/styled/Content';
import RightSide from './components/styled/RightSide';
import SortButtons from './components/styled/SortButtons';
import RightSortButton, { SortButton } from './components/styled/SortButton';
import Tickets from './components/styled/Tickets';
import Ticket from './components/styled/Ticket';
import FilterButton from './components/styled/FilterButton';

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
      mostInexpensive: true,
      isMobile: false,
    };
  }

  componentDidMount() {
    this.getTickets();
  }

  getTickets = async () => {
    const id = await axios.get('https://front-test.beta.aviasales.ru/search');
    const recursion = async (stop = false) => {
      if (stop) {
        this.getFiltered();
        return;
      }
      const { tickets } = this.state;
      let newTickets;
      try {
        newTickets = await axios.get(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${id.data.searchId}`
        );
      } catch (err) {
        recursion(false);
        return;
      }
      this.setState({ tickets: [...tickets, ...newTickets.data.tickets] }, () => {
        this.getFiltered();
        recursion(newTickets.data.stop);
      });
    };
    return recursion(false);
  };

  getFiltered = () => {
    const { tickets, filterState, mostInexpensive } = this.state;
    const values = Object.values(filterState);
    if (values.every(el => el === false) || filterState.all === true) {
      this.setState({ filtered: tickets }, () => {
        this.getSorted(mostInexpensive);
      });
      return;
    }
    let filtered = [];
    values.slice(1).forEach((el, i) => {
      if (el) {
        const newArr = tickets.filter(ticket => ticket.segments[0].stops.length === i);
        filtered = [...filtered, ...newArr];
      }
    });
    this.setState(
      {
        filtered: [...filtered],
      },
      () => this.getSorted(mostInexpensive)
    );
  };

  getSorted = (inexpensive = true) => {
    const { filtered } = this.state;
    let sorted = [];
    if (inexpensive) {
      sorted = filtered.slice().sort((first, second) => {
        return first.price - second.price;
      });
    } else {
      sorted = filtered.slice().sort((first, second) => {
        return first.segments[0].duration - second.segments[0].duration;
      });
    }
    this.setState({ filtered: sorted });
  };

  toggleTabs = side => event => {
    event.preventDefault();
    if (side === 'left') {
      this.setState({ mostInexpensive: true });
      this.getSorted(true);
    }
    if (side === 'right') {
      this.setState({ mostInexpensive: false });
      this.getSorted(false);
    }
  };

  showFilter = event => {
    event.preventDefault();
    const { isMobile } = this.state;
    this.setState({ isMobile: !isMobile });
  };

  checkboxHandler = type => () => {
    const { filterState } = this.state;
    if (type === 'all') {
      const boolToggle = !filterState.all;
      this.setState(
        {
          filterState: {
            all: boolToggle,
            withoutTransplant: boolToggle,
            oneTransplant: boolToggle,
            twoTransplant: boolToggle,
            threeTransplant: boolToggle,
          },
        },
        () => this.getFiltered()
      );
      return;
    }
    const newFilterState = filterState;
    newFilterState[type] = !newFilterState[type];
    const values = Object.values(newFilterState);
    const all = values.slice(1).some(el => el === true) ? false : newFilterState.all;
    newFilterState.all = all;
    this.setState({ filterState: newFilterState }, () => this.getFiltered());
  };

  render() {
    const { filterState, mostInexpensive, filtered, isMobile } = this.state;
    return (
      <>
        <GlobalStyle />
        <ContainerFluid>
          <LogoLink />
          <Content>
            <Filter
              checkboxHandler={this.checkboxHandler}
              filter={filterState}
              isMobile={isMobile}
            />
            <RightSide>
              <SortButtons>
                <SortButton changer={this.toggleTabs('left')} isActive={mostInexpensive} left>
                  самый дешевый
                </SortButton>
                <RightSortButton
                  changer={this.toggleTabs('right')}
                  isActive={mostInexpensive}
                  right
                >
                  самый быстрый
                </RightSortButton>
              </SortButtons>
              <Tickets>
                {filtered.length > 0 ? (
                  filtered.slice(0, 5).map(el => {
                    return (
                      <Ticket
                        key={`ticket-${Math.random()}`}
                        price={el.price}
                        carrier={el.carrier}
                        segments={el.segments}
                      />
                    );
                  })
                ) : (
                  <Spin tip="Билеты загружаются ..." size="large" />
                )}
              </Tickets>
            </RightSide>
            <FilterButton filterShow={this.showFilter}>Фильтры</FilterButton>
          </Content>
        </ContainerFluid>
      </>
    );
  }
}

export default App;
