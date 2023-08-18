import React from "react";
import Card from "./Card";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="title__sec flex items-center gap-x-2 font-bold ml-[55px]">
        <div className="path2 w-1 h-8 bg-[#519259]"></div>
        <h1 className="title text-3xl">Testimonial</h1>
      </div>
      <div className="cr ">
        <Card img="./images/anime.jpg" name="Ayanokoji" />
        <Card img="./anime/gojo.jpg" name="Gojo Satoru" />
        <Card img="./anime/luffy.jpg" name="Monkey D.Luffy" />
        <Card img="./anime/eren.jpeg" name="Eren Jaeger" />
        <Card img="./anime/zoro.jpeg" name="Roronoa Zoro" />
        <Card img="./anime/sanji.jpeg" name="Vinsmoke Sanji" />
        <Card img="./anime/thorfinn.jpg" name="Thorfinn" />
      </div>
    </div>
  );
}

export default Testimonial;
