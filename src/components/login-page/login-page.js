import React from 'react';

import "../login-page/login-page.css"
import "../login-page/stylesheets.css"

function App() {
  return <LoginPage {...loginPageData} />;
}

export default App;

function LoginPage(props) {
  const {
    logo,
    emailAddress,
    inputType,
    inputPlaceholder,
    password,
    inputType2,
    inputPlaceholder2,
    text1,
    login,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="login-pagescreen">
        <div className="overlap-group">
          <img className="logo" src={logo} />
          <div className="email-address montserrat-normal-black-24px">{emailAddress}</div>
          <input
            className="exampleemailcom montserrat-normal-chicago-24px"
            name="exampleemailcom"
            placeholder={inputPlaceholder}
            type={inputType}
            required
          />
          <div className="password montserrat-normal-black-24px">{password}</div>
          <input
            className="x123456 montserrat-normal-chicago-24px"
            name="123456"
            placeholder={inputPlaceholder2}
            type={inputType2}
            required
          />
          <div className="flex-row2">
            <div className="text-1">{text1}</div>
            <button className="login-page-login-button">
                <div className="login-button2">
                    <h1 className="title2 montserrat-bold-white-36px">{login}</h1>
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const loginPageData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/logo@2x.svg",
    emailAddress: "Email Address:",
    inputType: "email",
    inputPlaceholder: "example@email.com",
    password: "Password:",
    inputType2: "text",
    inputPlaceholder2: "123456",
    text1: "Forgot your password?",
    login: "Login",
};