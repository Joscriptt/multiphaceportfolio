import React, { useState, useEffect } from "react";
import cn from "classnames";

import { IoMdClose } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";

const Story = ({ story, goToPrevStory, goToNextStory, handleCloseClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { slides, timer = 4000, thumbnail, username } = story;
  const currentSlide = slides[currentSlideIndex];
  const slideCount = slides.length;

  // Set the CSS animation timing equal to the value in the story props
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--animation-timing",
      `${timer}ms`
    );
  }, [timer]);

  useEffect(() => {
    let interval;

    // Change slides on an interval
    interval = setInterval(() => {
      if (currentSlideIndex < slideCount - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
      } else if (currentSlideIndex === slideCount - 1) {
        setCurrentSlideIndex(0);
        goToNextStory();
      }
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [goToNextStory, currentSlideIndex, slideCount, timer]);

  const handlePrevClick = () => {
    const newIndex = currentSlideIndex - 1;

    if (newIndex < 0) {
      setCurrentSlideIndex(0);
      goToPrevStory();
    } else {
      setCurrentSlideIndex(newIndex);
    }
  };

  const handleNextClick = () => {
    const newIndex = currentSlideIndex + 1;

    if (newIndex === slideCount) {
      setCurrentSlideIndex(0);
      goToNextStory();
    } else {
      setCurrentSlideIndex(newIndex);
    }
  };

  return (
    <>
      <div className="backdrop-blur-lg z-40 flex h-full absolute" />

      <div className="flex justify-center  ">
        <button
          className="absolute bottom-16 z-50 w-10 h-10 bg-neutral-800/25  rounded-full flex justify-center items-center"
          onClick={handleCloseClick}
        >
          <IoMdClose className="w-7 h-7 text-white" />
        </button>
        <span className="uppercase text-xs font-Intermedium absolute bottom-12 text-white z-50">
          Close
        </span>
      </div>
      <div className="flex h-full p-1">
        <div className="relative z-40  h-full w-full ">
          <Image
            width={1000}
            height={1000}
            className="h-full object-cover relative opacity-75 rounded-lg"
            src={currentSlide.image}
            alt=""
          />

          <div className="flex relative gap-x-3 -top-[710px] z-50 ">
            {slides.map((slide, index) => (
              <span
                key={`${slide.text}-${index}`}
                className={cn("indicator", {
                  complete: currentSlideIndex > index,
                  active: currentSlideIndex === index,
                })}
              />
            ))}
          </div>
          <div className="">
            <div className="absolute top-7 left-0 flex gap-x-2 items-center">
              <Image
                width={800}
                height={800}
                className="rounded-full w-11 h-11 ml-3"
                src={thumbnail.src}
                alt={thumbnail.alt}
              />
              <span className="text-neutral-100 font-Intermedium">
                {username}
              </span>
            </div>
            <h3 className="absolute bottom-3 flex justify-center text-white ">
              {currentSlide.text}
            </h3>
          </div>
          <div className="prev-next">
            <button onClick={handlePrevClick}>
              <GrPrevious />
            </button>
            <button onClick={handleNextClick}>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
