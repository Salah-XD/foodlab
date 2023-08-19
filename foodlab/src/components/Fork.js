import React from "react";

function Fork() {
  return (
    <div className="ftf px-[130px] relative mt-[60px]">
      {/* line */}
      <img
        src="./images/path 1382.svg"
        alt="path"
        className="rotate-90 absolute top-[-200px] right-[27%] h-[350px]"
      />
      <img
        src="./images/path 1382.svg"
        alt="path"
        className=" absolute top-[125px] right-[2%] h-[350px]"
      />
      {/* checker */}
      <img
        src="./images/Group 171.svg"
        alt="checker"
        className="absolute w-[115px] left-[90%] mt-[-30px]"
      />
      <img
        src="./images/Group 165.svg"
        alt="checker"
        className="absolute w-[115px] top-[253px] left-12 -z-10"
      />
      <img
        src="./images/Group 165.svg"
        alt="checker"
        className="absolute w-[115px] top-[703px] left-12 -z-10"
      />
      <img
        src="./images/Group 165.svg"
        alt="checker"
        className="absolute w-[115px] left-[86%] top-[310px] -z-10"
      />
      <img
        src="./images/Group 165.svg"
        alt="checker"
        className="absolute w-[115px] left-[86%] top-[790px] -z-10"
      />
      {/* track */}
      <img
        src="./images/Group 167.svg"
        alt="path"
        className="absolute w-[300px] top-[190px] left-[50%]"
      />
      <img
        src="./images/Group 167.svg"
        alt="path"
        className="absolute w-[300px] top-[650px] left-[52%]"
      />
      <img
        src="./images/Group 167.svg"
        alt="path"
        className="absolute scale-x-[-1] w-[300px] top-[395px] left-[25%]"
      />
      {/* corners */}
      <img
        src="./images/border.svg"
        alt="border"
        className="absolute w-[300px] top-[75px] left-[170px]"
      />
      <img
        src="./images/border.svg"
        alt="border"
        className="absolute w-[300px] top-[525px] left-[170px]"
      />
      {/* main */}
      <h3 className="text-center text-3xl font-bold mb-3">
        Ensuring safety of food from
      </h3>
      <h1 className="text-center text-5xl font-bold text-[#519259] mb-[60px]">
        Farm <span className="text-[#F0BB62]">to Fork</span>
      </h1>
      <div className="bb">
        <div className="row1 flex gap-14 items-end mt-8">
          <img src="./images/px/px.png" alt="farm" className="w-[300px]" />
          <div className="text">
            <h3 className="text-2xl mb-2">
              <span className="text-[#519259] font-bold">F</span>arming
            </h3>
            <p className="font-[400] text-lg">
              Segregate crop <br /> Store crops safely. <br /> Wash before
              manufacturing <br /> Take care of work areas
            </p>
          </div>
        </div>
        <div className="row2 flex gap-14 items-end ml-[37%] w-[100%] text-right mt-8">
          <div className="text">
            <h3 className="text-2xl mb-2">
              <span className="text-[#519259] font-bold">M</span>anufacturing
            </h3>
            <p className="font-[400] text-lg">
              Working with Tools <br /> Maintaining Cleanliness <br /> Wear
              Safety Equipment (PPE) <br /> Keep Work Areas and Emergency Exits
              Clear
            </p>
          </div>
          <img
            src="./images/Image 25/Image 25.png"
            alt="farm"
            className="w-[300px]"
          />
        </div>
        <div className="row3 flex gap-14 items-end mt-8">
          <img
            src="./images/Image 27/Image 27.png"
            alt="farm"
            className="w-[300px]"
          />
          <div className="text">
            <h3 className="text-2xl mb-2">
              <span className="text-[#519259] font-bold">D</span>istribution
            </h3>
            <p className="font-[400] text-lg">
              Focus on renewable materials a​nd packaging <br /> Alternative
              methods of supply <br /> Transportation safety
            </p>
          </div>
        </div>
        <div className="row4 flex items-end justify-between mt-8">
          <p className="font-[400] text-lg">
            Achieving Food Safety in Retail Stores <br /> Controlling Package
            Quality <br /> Maintaining Clean and Hygienic <br /> Food Scales{" "}
            <br />
            Improve customer protection
          </p>
          <div className="s1">
            <img
              src="./images/Image 29/Image 29.png"
              alt="farm"
              className="w-[300px]"
            />
          </div>
          <div className="s2">
            <img
              src="./images/Image 28/Image 28.png"
              alt="farm"
              className="w-[300px]"
            />
          </div>
        </div>
        <div className="subb flex gap-[340px] ml-[47%] mt-8">
          <h3 className="text-2xl mb-2">
            <span className="text-[#519259] font-bold">G</span>roceries
          </h3>
          <h3 className="text-2xl mb-2">
            <span className="text-[#519259] font-bold">R</span>estaurant
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Fork;
