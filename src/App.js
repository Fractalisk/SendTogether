import LandingPage from "./components/landing-page/landing-page.js";
import LoginPage from "./components/login-page/login-page.js";
import ProfilePage from "./components/profile-page/profile-page.js";
import CreateOrderPage from "./components/create-order-page/create-order-page.js";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = "createorder"
  }

  renderSwitch(param) {
    switch(param) {
      case "landing":
        return <LandingPage/>;
      case "login":
        return <LoginPage/>;
      case "profile":
        return <ProfilePage/>;
      case "createorder":
        return <CreateOrderPage/>;
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
