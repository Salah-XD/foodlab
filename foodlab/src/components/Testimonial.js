import React from "react";
import Card from "./Card";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="title__sec flex items-center gap-x-2 font-bold ml-[55px]">
        <div className="path2 w-1 h-8 bg-[#519259]"></div>
        <h1 className="title text-3xl">Testimonial</h1>
      </div>
      <div className="cr flex ">
        <Card img="./images/anime.jpg" name="John Doe" />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Testimonial;
