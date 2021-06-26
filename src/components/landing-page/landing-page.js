import React from 'react';
import '../landing-page/landing-page.css';

function LandingPage(props) {
  const { about, aboutI197193, aboutI195193, login, group4 } = props;

  return (
    <div class="container-center-horizontal">
      <div className="landing-pagescreen">
        <div className="flex-row">
          <div className="mdivector-combine">
            <img
              className="vector"
              src="https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d6f778a933b674c02308a9/img/vector@2x.svg"
            />
          </div>
          <h1 className="title montserrat-normal-black-24px">{about}</h1>
          <div className="about-i197193 montserrat-normal-black-24px">{aboutI197193}</div>
          <div className="about-i195193 montserrat-normal-black-24px">{aboutI195193}</div>
          <div className="group-2">
            <button className= "login-button">
                <div className="overlap-group">
                    <div className="login">{<h1>{login}</h1>}</div>
                </div>
            </button>
          </div>
        </div>
        <img className="group-4" src={group4} />
      </div>
    </div>
  );
}

export default LandingPage;