import React from 'react';
import '../landing-page/landing-page.css';
import '../landing-page/stylesheets.css';


function App() {
  return <LandingPage {...landingPageData} />;
}

export default App;

function LandingPage(props) {
    const {
        image1,
        about,
        aboutI197193,
        aboutI195193,
        login,
        overlapGroup,
        vector,
        vector2,
        vector3,
        vector4,
        vector5,
        vector6,
        vector7,
      } = props;
  return (
    <div class="landing-container-center-horizontal">
      <div className="landing-pagescreen">
        <div className="landing-header">
          <img className="landing-image-1" src={image1} />
          <h1 className="landing-title montserrat-normal-black-24px">{about}</h1>
          <div className="landing-about-i197193 montserrat-normal-black-24px">{aboutI197193}</div>
          <div className="landing-about-i195193 montserrat-normal-black-24px">{aboutI195193}</div>
          <div className="landing-login-button">
            <button key="landing-button-component">
                <div className="landing-overlap-group">
                    <div className="landing-login">{login}</div>
                </div>
            </button>
          </div>
        </div>
        <div className="landing-body">
          <div className="landing-overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <img
              className="landing-vector"
              src={vector}
            />
            <img className="landing-vector-1" src={vector2} />
          </div>
          <div className="landing-flex-row">
            <img className="landing-vector-2" src={vector3} />
            <img className="landing-vector-3" src={vector4} />
          </div>
          <img className="landing-vector-4" src={vector5} />
          <img className="landing-vector-5" src={vector6} />
          <img className="landing-vector-6" src={vector7} />
        </div>
      </div>
    </div>
  );
}

const landingPageData = {
    image1: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/image-1@2x.png",
    about: "About",
    aboutI197193: "Pricing",
    aboutI195193: "Contact",
    login: "Login",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-5@1x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-6@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-7@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-4@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-3@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-2@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-1@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector@2x.svg",
};