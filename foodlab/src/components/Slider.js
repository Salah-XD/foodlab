import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Main from "./Main";
import test from "./test";

function Slider() {
  const slides = [
    {
      url: "./slider/Image23.png",
    },
    {
      url: "./slider/6.jpg",
    },
    {
      url: "./slider/img1.jpg",
    },
    {
      url: "./slider/img2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const autoSlideInterval = 5000; // Auto-slide interval in milliseconds

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      nextSlide(); // Call nextSlide to move to the next slide
    }, autoSlideInterval);

    return () => {
      clearInterval(autoSlideTimer); // Clear the interval when component unmounts
    };
  }, [currentIndex]); // Run the effect whenever currentIndex changes

  return (
    <>
      <Main />
      <div className="max-w-[100%] h-[800px] w-full m-auto  relative group">
        {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div> */}
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            height: "100vh", // Set height to 100% viewport height
            width: "100%", // Set width to 100% viewport width
          }}
          className="w-full bg-center bg-cover duration-500 opacity-70"
        ></div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-[75%] left-[50%] justify-center  absolute text-[#fff]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
