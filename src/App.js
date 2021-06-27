import LandingPage from "./components/landing-page/landing-page";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = "landing"
  }

  renderSwitch(param) {
    switch(param) {
      case "landing":
        return <LandingPage/>;
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
