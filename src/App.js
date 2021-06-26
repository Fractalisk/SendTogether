import LandingPage from "./components/landing-page/landing-page";
import React from 'react';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <LandingPage
              about="About"
              aboutI197193="Pricing"
              aboutI195193="Contact"
              login="Login"
              group4="https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d71697b50fef21432b3452/img/group-4@1x.svg"
            />
          );
        </div>
      );
  }
}

export default App;
