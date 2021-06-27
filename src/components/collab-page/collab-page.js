import React from 'react';
import "../collab-page/collab-page.css"
import "../collab-page/collab-page-stylesheets.css"

function App() {
  return <CollabPage {...collabPageData} />;
}

export default App;

function CollabPage(props) {
  const {
    overlapGroup1,
    chat,
    chatBody,
    vector,
    vector2,
    vector3,
    vector4,
    line1,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    collection,
    inTransit,
    arrival,
    text4,
    text3,
    text2,
    courierUps,
    totalPrice5635,
    text1,
    overlapGroup3,
    edit,
    overlapGroup12,
    place,
  } = props;

  return (
    <div class="collab-page-container-center-horizontal">
      <div className="collab-page-collab-page collab-page-screen">
        <div className="collab-page-overlap-group">
          <div className="collab-page-chat-panel">
            <div className="collab-page-overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <h1 className="collab-page-title montserrat-normal-black-36px">{chat}</h1>
              <img className="collab-page-chat-body" src={chatBody} />
              <img
                className="collab-page-vector-1"
                src={vector}
              />
              <img className="collab-page-vector-2" src={vector2} />
              <img className="collab-page-vector-3" src={vector3} />
              <img className="collab-page-vector-4" src={vector4} />
            </div>
          </div>
          <img className="collab-page-line-1" src={line1} />
        </div>
        <div className="collab-page-details-panel">
          <div className="collab-page-overlap-group2">
            <img className="collab-page-vector" src={vector5} />
            <img className="collab-page-vector" src={vector6} />
            <img className="collab-page-vector-5" src={vector7} />
            <img className="collab-page-vector-6" src={vector8} />
            <img className="collab-page-vector-7" src={vector9} />
          </div>
          <div className="collab-page-flex-row">
            <div className="collab-page-collection montserrat-normal-black-24px">{collection}</div>
            <div className="collab-page-in-transit montserrat-normal-black-24px">{inTransit}</div>
            <div className="collab-page-arrival montserrat-normal-black-24px">{arrival}</div>
          </div>
          <div className="collab-page-text-4 montserrat-normal-black-36px">{text4}</div>
          <div className="collab-page-text-3 montserrat-normal-black-36px">{text3}</div>
          <div className="collab-page-text-2 montserrat-normal-black-36px">{text2}</div>
          <div className="collab-page-flex-row-1">
            <div className="collab-page-courier-ups montserrat-normal-black-36px">{courierUps}</div>
            <div className="collab-page-total-price-5635 montserrat-normal-black-36px">{totalPrice5635}</div>
          </div>
          <div className="collab-page-text-1 montserrat-normal-black-36px">{text1}</div>
          <div className="collab-page-edit-button">
            <div className="collab-page-overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="collab-page-edit montserrat-bold-white-36px">{edit}</div>
            </div>
          </div>
          <div className="collab-page-back-button">
            <div className="collab-page-overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup12})` }}>
              <div className="collab-page-place montserrat-bold-white-36px">{place}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const collabPageData = {
    overlapGroup1:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d867ce3c68c78350255d1d/img/vector-92@1x.svg",
    chat:"Chat",
    chatBody:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/chat-body@1x.svg",
    vector:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-162@1x.svg",
    vector2:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-161@2x.svg",
    vector3:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-160@2x.svg",
    vector4:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-159@2x.svg",
    line1:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d867ce3c68c78350255d1d/img/line-1@1x.svg",
    vector5:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-163@1x.svg",
    vector6:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-164@1x.svg",
    vector7:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-165@2x.svg",
    vector8:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-166@2x.svg",
    vector9:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-167@2x.svg",
    collection:"Collection",
    inTransit:"In-Transit",
    arrival:"Arrival",
    text4:"Group order no. 182939",
    text3:"Package type: Care package 1",
    text2:"Destination: Singapore",
    courierUps:"Courier: UPS",
    totalPrice5635:"Total price: $56.35",
    text1:"Main receiver: James",
    overlapGroup3:"vector-169.svg",
    edit:"Edit",
    overlapGroup12:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-168@2x.svg",
    place:"Back"
};