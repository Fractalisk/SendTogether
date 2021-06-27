import LandingPage from "./components/landing-page/landing-page.js";
import LoginPage from "./components/login-page/login-page.js";
import ProfilePage from "./components/profile-page/profile-page.js";
import CreateOrderPage from "./components/create-order-page/create-order-page.js";
// import OrderAckPage from "./components/order-ack-page/order-ack-page.js"
import CollabPage from "./components/collab-page/collab-page.js"

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = "collabpage"
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
      // case "orderack":
      //   return <OrderAckPage/>;
      case "collabpage":
        return <CollabPage/>;
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
