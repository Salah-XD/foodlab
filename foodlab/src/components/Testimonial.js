import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Testimonial() {
  return (
    <div className="testimonial my-20">
      <div className="title__sec flex items-center gap-x-2 font-bold ml-[55px]">
        <div className="path2 w-1 h-8 bg-[#519259]"></div>
        <h1 className="title text-3xl">Testimonial</h1>
      </div>
      <Carousel responsive={responsive} className="ml-10 my-10">
        <Card img="./images/anime.jpg" name="Ayanokoji" />
        <Card img="./anime/gojo.jpg" name="Gojo Satoru" />
        <Card img="./anime/luffy.jpg" name="Monkey D.Luffy" />
        <Card img="./anime/eren.jpeg" name="Eren Jaeger" />
        <Card img="./anime/zoro.jpeg" name="Roronoa Zoro" />
        <Card img="./anime/sanji.jpeg" name="Vinsmoke Sanji" />
        <Card img="./anime/thorfinn.jpg" name="Thorfinn" />
      </Carousel>
    </div>
  );
}

export default Testimonial;
