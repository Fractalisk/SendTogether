import React from 'react';
import "../create-order-page/create-order-page.css"
import "../create-order-page/create-order-page-stylesheets.css"

function App() {
  return <CreateOrderPage {...createOrderPageData} />;
}

export default App;

function CreateOrderPage(props) {
  const {
    vector,
    orderDetails,
    inputType,
    inputPlaceholder,
    vector22,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    vector3,
    overlapGroup,
    create,
    selectCourierButtonProps,
  } = props;

  return (
    <div class="create-order-container-center-horizontal">
      <div className="create-order-create-order-pagescreen">
        <div className="create-order-title">
          <h1 className="create-order-title-1 montserrat-normal-black-36px">{orderDetails}</h1>
        </div>
        <div className="create-order-body">
          <div className="create-order-flex-row">
            <div className="create-order-package-type-field">
              <div className="create-order-overlap-group">
                <input
                  className="create-order-select-package-type montserrat-normal-chicago-36px"
                  name="create-order-selectpackagetype"
                  placeholder={inputPlaceholder}
                  type={inputType}
                  required
                />
                <img className="create-order-vector" src={vector22} />
              </div>
            </div>
            <div className="create-order-destination-field">
              <div className="create-order-overlap-group">
                <input
                  className="create-order-select-destination montserrat-normal-chicago-36px"
                  name="selectdestination"
                  placeholder={inputPlaceholder2}
                  type={inputType2}
                  required
                />
                <img
                  className="create-order-vector"
                  src={vector}
                />
              </div>
            </div>
          </div>
          <SelectCourierButton>{selectCourierButtonProps.children}</SelectCourierButton>
          <div className="create-order-details-field">
            <div className="create-order-overlap-group-1">
              <textarea
                className="create-order-enter-details montserrat-normal-chicago-36px"
                name="enterdetails"
                placeholder={inputPlaceholder3}
                type={inputType3}
              ></textarea>
              <img className="create-order-vector-1" src={vector3} />
            </div>
          </div>
        </div>
        <div className="create-order-create-button">
          <div className="create-order-overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="create-order-create montserrat-bold-white-36px">{create}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


function SelectCourierButton(props) {
  const { children } = props;

  return (
    <div className="create-order-select-courier-button">
      <div className="create-order-select-courier montserrat-normal-black-36px">{children}</div>
    </div>
  );
}

const selectCourierButtonData = {
    children: "Select courier",
};

const createOrderPageData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-86@1x.svg",
    orderDetails: "Order details",
    inputType: "text",
    inputPlaceholder: "Select package type",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-87@1x.svg",
    inputType2: "text",
    inputPlaceholder2: "Select destination",
    inputType3: "text",
    inputPlaceholder3: "Enter details...",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-85@1x.svg",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60d6f68c41e2212c658d3e26/releases/60d82cc82d19fda027af01e9/img/vector-44@2x.svg",
    create: "Create",
    selectCourierButtonProps: selectCourierButtonData,
};