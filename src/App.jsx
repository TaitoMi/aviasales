import React from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import ContainerFluid from './components/styled/ContainerFluid';
import LogoLink from './components/styled/LogoLink';
import Filter from './components/styled/Filter';
import Content from './components/styled/Content';

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
      gettedTickets: [],
    };
  }

  checkboxHandler = type => () => {
    const { filterState } = this.state;
    const newFilterState = filterState;
    newFilterState[type] = !newFilterState[type];
    this.setState({ filterState: newFilterState });
  };

  render() {
    const { filterState, gettedTickets } = this.state;
    console.log(gettedTickets);
    return (
      <>
        <GlobalStyle />
        <ContainerFluid>
          <LogoLink />
          {/* {ttt.toString()} */}
          <Content>
            <Filter checkboxHandler={this.checkboxHandler} filter={filterState} />
          </Content>
        </ContainerFluid>
      </>
    );
  }
}

export default App;
