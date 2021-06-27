import LandingPage from "./components/landing-page/landing-page";
import LoginPage from "./components/login-page/login-page";
import ProfilePage from "./components/profile-page/profile-page.js"
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = "profile"
  }

  renderSwitch(param) {
    switch(param) {
      case "landing":
        return <LandingPage/>;
      case "login":
        return <LoginPage/>;
      case "profile":
        return <ProfilePage/>
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
