import React from 'react';
import 'normalize.css';
import logo from './images/Logo.png';
import ContainerFluid from './components/styled/ContainerFluid';
import LogoLink from './components/styled/LogoLink';
import Content from './components/styled/Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimer: true,
    };
  }

  render() {
    const { isTimer } = this.state;
    return (
      <ContainerFluid>
        <LogoLink>
          <img src={logo} alt="logo" />
        </LogoLink>
        <Content> {isTimer.toString()} </Content>
      </ContainerFluid>
    );
  }
}

export default App;
