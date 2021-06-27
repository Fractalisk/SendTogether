import React from 'react';
import "../order-ack-page/order-ack-page.css"

function App() {
  return <CreateAckPage title="Order created" tickLabelProps={createAckPageData.tickLabelProps} />;
}

export default App;

function CreateAckPage(props) {
  const { title, tickLabelProps } = props;

  return (
    <div class="order-ack-container-center-horizontal">
      <div className="order-ack-create-ack-page order-ack-screen">
        <h1 className="order-ack-title montserrat-normal-black-48px">{title}</h1>
        <TickLabel overlapGroup={tickLabelProps.overlapGroup} />
      </div>
    </div>
  );
}


function TickLabel(props) {
  const { overlapGroup,
          vector
  } = props;

  return (
    <div className="order-ack-tick-label">
      <div className="order-ack-overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <img
          className="order-ack-vector"
          src={vector}
        />
      </div>
    </div>
  );
}

const tickLabelData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-52@2x.svg",
    vector:"https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-53@2x.svg"
};

const createAckPageData = {
    tickLabelProps: tickLabelData,
};