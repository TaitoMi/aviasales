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
    const {
      filterState: { [type]: field },
    } = this.state;
    this.setState({ filterState: { [type]: !field } });
  };

  render() {
    const { filterState, gettedTickets } = this.state;
    const ttt = (
      <div>
        {filterState.all.toString()} && {gettedTickets.toString()}
      </div>
    );
    return (
      <>
        <GlobalStyle />
        <ContainerFluid>
          <LogoLink />
          {ttt}
          <Content>
            <Filter checkboxHandler={this.checkboxHandler} />
          </Content>
        </ContainerFluid>
      </>
    );
  }
}

export default App;
