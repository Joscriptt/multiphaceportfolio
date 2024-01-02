"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

export const InfiniteMovingCardsPreview = () => {
  return (
    <div className="h-screen  flex flex-col antialiased  bg-slate-900 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards direction="left" speed="normal" />
    </div>
  );
};

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}) => {
  // const testimonials = [
  //   {
  //     quote:
  //       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
  //     name: "Charles Dickens",
  //     title: "A Tale of Two Cities",
  //   },
  //   {
  //     quote:
  //       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //     name: "William Shakespeare",
  //     title: "Hamlet",
  //   },
  //   {
  //     quote: "All that we see or seem is but a dream within a dream.",
  //     name: "Edgar Allan Poe",
  //     title: "A Dream Within a Dream",
  //   },
  //   {
  //     quote:
  //       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //     name: "Jane Austen",
  //     title: "Pride and Prejudice",
  //   },
  //   {
  //     quote:
  //       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //     name: "Herman Melville",
  //     title: "Moby-Dick",
  //   },
  // ];
  const testimonials = [
    "/images/img1.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
  ];

  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if ((speed = "normal")) {
        containerRef.current.style.setProperty("--animation-duration", "45s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={twMerge(
        "scroller relative z-10 group max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          " flex min-w-full shrink-0 gap-4 py-4 w-max items-center flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((testimonial, idx) => (
          <li
            className="  relative rounded-2xl  flex-shrink-0 border-slate-700   "
            key={testimonial}
          >
            <Image
              width={800}
              height={800}
              className="w-12 h-12 rounded-full object-cover"
              src={testimonial}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
