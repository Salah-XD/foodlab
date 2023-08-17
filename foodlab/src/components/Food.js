import React from "react";

function Food() {
  return (
    <div className="food mt-0 p-4">
      <div className="title__sec flex items-center gap-x-2 font-bold ml-[55px]">
        <div className="path2 w-1 h-8 bg-[#519259]"></div>
        <h1 className="title text-3xl">Food Lab Food Safety Services</h1>
      </div>
      <div className="food__main flex items-center flex-nowrap">
        <div className="food__main__left">
          <img
            src="images/path 1385.svg"
            alt="path"
            className=" w-[350px] absolute left-[34px] top-[140%] -z-10"
          />

          <img
            src="images/path 1377.svg"
            alt="path"
            className="absolute w-[350px] left-[53px] top-[137%] -z-10"
          />
          <img src="images/food.png" alt="image" className="w-[1670px]" />
        </div>
        <div className="food__main__right self-align">
          <p className="text-2xl font-normal">
            Aperiam quia sapiente vel consequatur consequatur omnis sed autem
            quae. Ipsa et minus consequatur vero et doloribus. Ex error illum
            consequatur amet ea occaecati odit. Quia similique dolorum officiis
            distinctio magnam ut facilis. Et dolore est inventore ea et
            molestiae earum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Food;
