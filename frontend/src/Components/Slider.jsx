import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { sliderItems } from "../data";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (s) => {
    if (s === "left") {
      setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 2));
    } else {
      setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
    }
  };
  return (
    <>
      <div className="hidden md:h-screen w-full md:flex  relative mt-1 overflow-hidden">
        <div
          onClick={() => {
            handleSlide("left");
          }}
          className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-[50%] absolute top-0 bottom-0 m-auto left-3 opacity-50 z-[4]"
        >
          <BiLeftArrow />
        </div>
        {/* wrapper  */}

        <div
          className={`flex h-full transition-all ease-in duration-500 
          translate-x-[${slideIndex * -100}vw]`}
        >
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center w-screen h-screen `}
              style={{ backgroundColor: `${item.bg}` }}
            >
              {/* image container */}
              <div className="flex-1 h-100%">
                <img className="h-80%" src={item.img} alt="CoverImage" />
              </div>
              {/* info container  */}
              <div className="flex-1 p-[50px] mr-5 ">
                <h1 className="text-7xl font-bold">{item.title}</h1>
                <h1 className="text-3xl my-4 font-regular text tracking-light">
                  {item.desc}
                </h1>
                <button className="p-3 border-2 border-slate-800 font-medium bg-transparent rounded text-lg cursor-pointer">
                  SHOW NOW
                </button>
              </div>
            </div>
          ))}
          {/* slider  */}
        </div>
        <div
          onClick={() => {
            handleSlide("right");
          }}
          className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-[50%] absolute top-0 bottom-0 m-auto right-3 opacity-50 z-[2]"
        >
          <BiRightArrow />
        </div>
      </div>
    </>
  );
};

export default Slider;
