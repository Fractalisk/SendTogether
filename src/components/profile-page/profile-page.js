import React from 'react';
import "../profile-page/profile-page.css"
import "../profile-page/profile-page-stylesheet.css"

function App() {
  return <ProfilePage {...profilePageData} />;
}

export default App;

function ProfilePage(props) {
  const {
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    image1,
    overlapGroup4,
    vector7,
    createOrder,
    text22,
    overlapGroup5,
    vector8,
    joinOrder,
    text32,
    overlapGroup3,
    overlapGroup6,
    iconifyid17A4824Ef7F84511E56,
    iconifyid17A4824Ef7F84511E57,
    iconifyid17A4824Ef7F84511E58,
    pendingOrders,
    overlapGroup2,
    octiconHistory16,
    orderHistory,
    text4,
    viewPastOrders,
  } = props;
  return (
    <div class="pfpage-container-center-horizontal">
      <div className="pfpage-profile-pagescreen">
        <div className="pfpage-overlap-group1">
          <div className="pfpage-header">
            <div className="pfpage-overlap-group2">
              <div className="pfpage-icon-outlined-a-notification-on">
                <img
                  className="pfpage-vector"
                  src={vector}
                />
                <img className="pfpage-vector-1" src={vector2} />
              </div>
              <div className="pfpage-icon-outlined-a-n-main-settings">
                <div className="pfpage-overlap-group3">
                  <img className="pfpage-vector-2" src={vector3} />
                  <img className="pfpage-vector-3" src={vector4} />
                </div>
              </div>
              <div className="pfpage-avatar">
                <div className="pfpage-icon-outlined-o-her-person-user">
                  <img className="pfpage-vector-4" src={vector5} />
                  <img className="pfpage-vector-5" src={vector6} />
                </div>
              </div>
            </div>
          </div>
          <img className="pfpage-image-1" src={image1} />
        </div>
        <div className="pfpage-overlap-group">
          <div className="pfpage-body">
            <div className="pfpage-flex-col">
              <div className="pfpage-overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                <img className="pfpage-vector-6" src={vector7} />
              </div>
              <div className="pfpage-create-order">
                <h1 className="pfpage-title montserrat-normal-black-24px">{createOrder}</h1>
              </div>
              <div className="pfpage-text-1 montserrat-normal-black-24px">{text22}</div>
            </div>
            <div className="pfpage-flex-col-1">
              <div className="pfpage-overlap-group5" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                <div className="pfpage-carbonjoin-inner">
                  <img className="pfpage-vector-7" src={vector8} />
                </div>
              </div>
              <div className="pfpage-join-order">
                <div className="pfpage-join-order-1 montserrat-normal-black-24px">{joinOrder}</div>
              </div>
              <div className="pfpage-text-2 montserrat-normal-black-24px">{text32}</div>
            </div>
            <div className="pfpage-flex-col-2">
              <div className="pfpage-overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <div className="pfpage-carbonpending-filled">
                  <div className="pfpage-overlap-group6" style={{ backgroundImage: `url(${overlapGroup6})` }}>
                    <img className="pfpage-iconify-id-17a4-4ef7f-84511e-56" src={iconifyid17A4824Ef7F84511E56} />
                    <img className="pfpage-iconify-id-17a4-4ef7f-84511e-5" src={iconifyid17A4824Ef7F84511E57} />
                    <img className="pfpage-iconify-id-17a4-4ef7f-84511e-5" src={iconifyid17A4824Ef7F84511E58} />
                  </div>
                </div>
              </div>
              <div className="pfpage-pending-orders">
                <div className="pfpage-pending-orders-1 montserrat-normal-black-24px">{pendingOrders}</div>
              </div>
            </div>
            <div className="pfpage-flex-col-3">
              <div className="pfpage-overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="pfpage-octiconhistory-16" style={{ backgroundImage: `url(${octiconHistory16})` }}></div>
              </div>
              <div className="pfpage-order-history">
                <div className="pfpage-order-history-1 montserrat-normal-black-24px">{orderHistory}</div>
              </div>
            </div>
          </div>
          <div className="pfpage-text-3 montserrat-normal-black-24px">{text4}</div>
          <div className="pfpage-view-past-orders montserrat-normal-black-24px">{viewPastOrders}</div>
        </div>
      </div>
    </div>
  );
}

const profilePageData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-28@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-29@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-26@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-27@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-25@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-24@2x.svg",
    image1: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/image-1@2x.png",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-19@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-20@2x.svg",
    createOrder: "Create order",
    text22: "Create a new order which others can join",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-18@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-23@2x.svg",
    joinOrder: "Join order",
    text32: "Join an existing group-buy order",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-17@2x.svg",
    overlapGroup6: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-22@2x.svg",
    iconifyid17A4824Ef7F84511E56: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/iconifyid-17a4824ef7f-84511e-56@2x.png",
    iconifyid17A4824Ef7F84511E57: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/iconifyid-17a4824ef7f-84511e-56@2x.png",
    iconifyid17A4824Ef7F84511E58: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/iconifyid-17a4824ef7f-84511e-56@2x.png",
    pendingOrders: "Pending orders",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-16@2x.svg",
    octiconHistory16: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-35@2x.svg",
    orderHistory: "Order history",
    text4: "View and collaborate with others to manage pending orders",
    viewPastOrders: "View past orders",
};
