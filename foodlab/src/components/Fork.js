import React from "react";

function Fork() {
  return (
    <div className="ftf">
      <h3>Ensuring safety of food from</h3>
      <h1>
        Farm <span>to Fork</span>
      </h1>
      <div className="bb">
        <div className="row1 flex gap-6">
          <img src="./images/px/px.png" alt="farm" />
          <div className="text">
            <h3>
              <span>F</span>arming
            </h3>
            <p>
              Segregate crop <br /> Store crops safely. <br /> Wash before
              manufacturing <br /> Take care of work areas
            </p>
          </div>
        </div>
        <div className="row2 flex gap-6 flex-start">
          <div className="text">
            <h3>
              <span>M</span>anufacturing
            </h3>
            <p>
              Working with Tools <br /> Maintaining Cleanliness <br /> Wear
              Safety Equipment (PPE) <br /> Keep Work Areas and Emergency Exits
              Clear
            </p>
          </div>
          <img src="./images/Image 25/Image 25.png" alt="farm" />
        </div>
        <div className="row3 flex gap-6 flex-end">
          <img src="./images/Image 27/Image 27.png" alt="farm" />
          <div className="text">
            <h3>
              <span>D</span>istribution
            </h3>
            <p>
              Focus on renewable materials a​nd packaging <br /> Alternative
              methods of supply <br /> Transportation safety
            </p>
          </div>
        </div>
        <div className="row4"></div>
      </div>
    </div>
  );
}

export default Fork;
