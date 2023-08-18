import React from "react";

function Card({ img, name }) {
  return (
    <div className="cardd h-[200px] w-[400px] p-[20px] rounded-[7px] border-[#707070] border">
      <div className="handle flex items-center gap-2 mb-2">
        <img src={img} alt="img" className="rounded-[50%] w-[40px]" />
        <div className="text font-semibold">{name}</div>
      </div>
      <p className="leading-[1.25]">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa
        qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt
        mollit anim id est laborum."
      </p>
    </div>
  );
}

export default Card;
