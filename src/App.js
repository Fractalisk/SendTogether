import LandingPage from "./components/landing-page/landing-page";
import LoginPage from "./components/login-page/login-page";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = "login"
  }

  renderSwitch(param) {
    switch(param) {
      case "landing":
        return <LandingPage/>;
      case "login":
        return <LoginPage/>;
      default:
        return <LandingPage/>;
    }
  }

  render() {
    return (
        <div className="App">
            {this.renderSwitch(this.state)}
        </div>
      );
  }
}

export default App;
