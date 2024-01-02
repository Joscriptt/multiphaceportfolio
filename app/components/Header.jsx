"use client";

import React, { useRef, useState } from "react";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, inView } from "framer-motion";
import {
  PiBellSimple,
  PiPhoneLight,
  PiGlobeSimpleThin,
  PiUploadThin,
  PiArrowSquareOutThin,
  PiYoutubeLogoLight,
  PiXCircleLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
  PiInstagramLogoThin,
  PiRecycleLight,
  PiCheckLight,
  PiLaptop,
} from "react-icons/pi";

import { FcCheckmark } from "react-icons/fc";
import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbBrandYoutubeFilled, TbCopy } from "react-icons/tb";
import Links from "./Links";
import { BsTwitterX, BsThreads, BsWhatsapp, BsMessenger } from "react-icons/bs";
// import { LiaFlagUsaSolid } from "react-icons/lia";

import Stories from "@/app/components/Stories";
import stories from "../../data";
import Stars from "./Stars";
import Location from "./Location";
import Services from "./Services";
import Store from "./Store";
import Message from "./Message";
import Footer from "./Footer";

import { usePathname } from "next/navigation";
import { Spotify } from "react-spotify-embed";
import Image from "next/image";

const inviteUrl = `josephhjamess46@gmail.com`;

function Header() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/images/img5.jpg", "/images/img6.jpg", "/images/img3.jpg"];

  const ref = useRef(null);

  const path = usePathname();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const links = [
    {
      iconFirst: <PiFacebookLogoLight className="text-2xl" />,
      name: "Share on Facebook",

      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <PiLinkedinLogoLight className="text-2xl" />,
      name: "Share on LinkedIn",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <FaTwitter className="text-2xl" />,
      name: "Share on X",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <BsThreads className="text-2xl" />,
      name: "Share on Threads",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <BsWhatsapp className="text-2xl" />,
      name: "Share on Whatsapp",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <BsMessenger className="text-2xl" />,
      name: "Share on Messanger",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <PiLinkLight className="text-2xl" />,
      name: "josephhjamess46@gmail.com",
      stri: "Copy",
      lastIcon: <FaAngleRight />,
    },
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="  fixed top-11 flex z-20 justify-center w-full "
        style={{ opacity: scrollYProgress }}
      >
        <div className=" bg-[#161616] border p-2 rounded-lg  border-neutral-800 flex justify-between items-center  w-[640px]">
          <Image
            width={800}
            height={800}
            className="w-9 h-9  rounded-md object-cover"
            src="/images/img7.jpg"
            alt=""
          />
          <h1 className="text-white font-Intermedium">JoScript Joe</h1>
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 rounded-lg bg-neutral-700 text-neutral-300 flex items-center justify-center"
          >
            <PiUploadThin />
          </button>
        </div>
      </motion.div>
      <div className=" h-60 relative  w-full -z-10">
        <Image
          width={1000}
          height={1000}
          className=" h-full w-full object-cover blur-xl absolute opacity-40"
          src="/images/img9.jpg"
          alt=""
        />
      </div>

      <div className="   w-full flex justify-center z-10 relative -top-9">
        <div className="absolute  p-1 rounded-full bg-[#111111]">
          <Image
            width={800}
            height={800}
            className="w-16 h-16 rounded-full object-cover "
            src="/images/img4.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-[#111111] h-screen p-3">
        <div className="h-screen max-w-lg mx-auto bg-[#111111] pt-14">
          <div>
            <div className="text-center">
              <h3 className="font-Intermedium text-white text-2xl flex justify-center items-center gap-x-2">
                JoScript Joe
                <RiVerifiedBadgeFill className="text-[#B5924F] text-xl" />
              </h3>
              <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
                <p>Est. 1999</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>Auckland, NZ</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>He/Him</p>
              </div>
            </div>

            <div>
              <p className="font-Intermedium text-neutral-500 text-center my-3">
                JoScript Joe is a software designer and content creator based in
                New York.
              </p>

              <div className="flex justify-center gap-x-7">
                <Link
                  href={"https://github.com/joscript/"}
                  className="flex items-center gap-x-2 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
                >
                  <PiGlobeSimpleThin className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium">Joscript.com</p>
                </Link>

                <div className=" items-center gap-x-2  flex  cursor-pointer hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl">
                  <PiPhoneLight className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium"> 555-123-4567</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-x-2 my-6">
              <button
                onClick={() => setOpen(true)}
                className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center"
              >
                <PiUploadThin />
              </button>

              <button
                onClick={onCopy}
                className="w-80 gap-x-3  h-10 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-neutral-100 duration-300 transition-all ease-in"
              >
                <span className="font-Intermedium ">
                  {copied ? "copied" : "hey@josephhjamess46@gmail.com"}
                </span>

                <AnimatePresence>
                  {copied ? (
                    <motion.span
                      initial={{ scale: 1 }}
                      animate={{ scale: 0.8 }}
                      exit={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 100,
                      }}
                    >
                      <FcCheckmark className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <TbCopy className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={() => setDialog(true)}
                className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center"
              >
                <PiBellSimple />
              </button>
            </div>

            <div className="flex justify-center  gap-x-5">
              <Stories stories={stories} />
            </div>

            <div className="mt-5 ">
              <Links />
            </div>

            <div>
              <div className=" bg-[#161616] gap-x-6 p-3 rounded-xl mt-8 flex justify-between ">
                <Image
                  width={800}
                  height={800}
                  className="w-10 h-9 rounded-lg object-cover"
                  src="/images/f.jpg"
                  alt=""
                />
                <div className="flex-1  ">
                  <h4 className="font-Interegular text-white text-lg text-center md:text-left">
                    Ultra
                  </h4>
                  <p className="font-Interegular text-sm text-neutral-500 hidden md:block">
                    A high quality Framer portfolio template <br /> designed for
                    creatives.
                  </p>

                  <div className="uppercase border border-neutral-800 h-7 w-fit px-2 justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex">
                    Store
                  </div>
                </div>

                <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
                  <span className="font-Intermedium text-xs hidden md:block ">
                    View
                  </span>
                  <PiArrowSquareOutThin />
                </button>
              </div>

              <div className=" bg-[#161616] gap-x-6 p-3 rounded-xl mt-3 flex justify-between ">
                <Image
                  width={800}
                  height={800}
                  className="w-10 h-9 rounded-lg object-cover"
                  src="/images/cry.jpg"
                  alt=""
                />

                <div className="flex-1  ">
                  <h4 className="font-Interegular text-white text-lg text-center md:text-left">
                    Grainy Gradients
                  </h4>
                  <p className="font-Interegular text-sm text-neutral-500 hidden md:block">
                    16 free 8k wallpapers for desktop and <br /> mobile.
                  </p>

                  <div className="uppercase border border-neutral-800 h-7 w-fit px-2  justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex">
                    Downloadable
                  </div>
                </div>

                <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
                  <span className="font-Intermedium text-xs hidden md:block">
                    Get
                  </span>
                  <PiArrowSquareOutThin />
                </button>
              </div>

              <div className="bg-[#161616] gap-x-6 p-3 rounded-xl mt-3 flex justify-between ">
                <Image
                  width={800}
                  height={800}
                  className="w-10 h-9 rounded-lg object-cover"
                  src="/images/yellow.jpg"
                  alt=""
                />
                <div className="flex-1">
                  <h4 className="font-Interegular text-white text-lg text-center md:text-left">
                    AR & Design
                  </h4>
                  <p className="font-Interegular text-sm text-neutral-500 hidden md:block">
                    Opportunities and challenges for designers <br /> working
                    with AR.
                  </p>

                  <div className="uppercase border border-neutral-800 h-7 w-fit px-2  justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex">
                    Blog post
                  </div>
                </div>

                <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
                  <span className="font-Intermedium text-xs hidden md:block">
                    Read
                  </span>
                  <PiArrowSquareOutThin />
                </button>
              </div>
            </div>

            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Latest Post</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <BsTwitterX />
                    <span>@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className="bg-[#1C1C1C] p-3 rounded-2xl mt-3 ">
                <div className="flex gap-x-4">
                  <Image
                    width={800}
                    height={800}
                    className="w-11 h-11 rounded-full"
                    src="/images/img1.jpg"
                    alt=""
                  />

                  <div>
                    <div className="flex items-center gap-x-2 ">
                      <p className="font-Intermedium text-base text-white">
                        JoScript Joe
                      </p>
                      <RiVerifiedBadgeFill className="text-[#26a8ff] text-xl" />
                    </div>

                    <div className="flex gap-x-2 items-center font-Interegular">
                      <span className="text-neutral-400">@joe</span>
                      <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                      <button className="text-blue-600 font-Intermedium text-sm">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base text-white my-3">
                    Propting in AI = The new writing
                  </h3>
                  <div className="flex items-center gap-x-2 font-Intermedium text-neutral-400 text-sm">
                    <p className="">10:39 PM </p>
                    <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                    <p>Jul 23, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Video */}
            <div className="bg-[#161616] p-2 rounded-xl mt-3  ">
              <div className=" gap-x-6  flex justify-between  ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Latest Video</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <TbBrandYoutubeFilled className="text-red-600" />
                    <span>@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className="  mt-3  h-56 w-full">
                <Image
                  width={800}
                  height={800}
                  className="h-full w-full object-cover rounded-2xl"
                  src="/images/f.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* Latest photos */}
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between  ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Latest Photos</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <PiInstagramLogoThin />
                    <span className="font-Intermedium">@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className=" relative  ">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt={`Slide ${currentImage}`}
                    className=" w-full h-72 object-cover rounded-md opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute  top-1/2 transform  flex items-center justify-between w-full">
                  <button
                    className="mx-2 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
                    onClick={handlePrev}
                  >
                    {"<"}
                  </button>
                  <button
                    className=" absolute right-3 p-2 bg-gray-800 text-white rounded-full focus:outline-none mr-auto"
                    onClick={handleNext}
                  >
                    {">"}
                  </button>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ backgroundColor: "#999" }}
                      animate={{
                        backgroundColor:
                          index === currentImage ? "#4CAF50" : "#999",
                      }}
                      style={{ width: 10, height: 10, borderRadius: "50%" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Store */}
            <Store />

            {/* Music */}
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Latest Played</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <PiInstagramLogoThin />
                    <span className="font-Intermedium">@Joscript</span>
                  </Link>
                </div>
              </div>
              <Spotify
                className="w-full h-20 my-3"
                link="https://open.spotify.com/playlist/37i9dQZF1DX0A8zVl7p82B?si=c2c06a3f57c24b48"
              />
            </div>

            {/* Services */}
            <Services />

            {/* Testimonial */}
            <div className="bg-[#161616] p-2 rounded-xl mt-3  ">
              <div className="  flex justify-between  ">
                <p className="text-white font-Intermedium">Testimonials</p>
              </div>

              <div className=" overflow-x-auto mt-3   ">
                <div className=" flex  gap-x-3 w-[1000px] p-2   ">
                  <div className=" w-[300px] hover:bg-neutral-800/40 bg-neutral-800 cursor-pointer transition-all ease-in duration-150 p-5  rounded-xl ">
                    <p className="text-white font-Interegular">
                      Joscript design expertise elevated our product to new
                      heights. A perfect blend of aesthetics and usability.
                      Working with him was a delight!
                    </p>
                    <Image
                      width={800}
                      height={800}
                      className="w-9 h-9 rounded-full object-cover my-3"
                      src="/images/img9.jpg"
                      alt=""
                    />
                    <p className="text-white font-Interegular">JoScript</p>
                    <span className="text-neutral-500 font-Interegular">
                      Founder, Beta
                    </span>
                    <Stars num={4} />
                  </div>

                  <div className=" w-[300px] hover:bg-neutral-800/40 bg-neutral-800 cursor-pointer transition-all ease-in duration-150 p-5  rounded-xl">
                    <p className="text-white font-Interegular">
                      Joscript design expertise elevated our product to new
                      heights. A perfect blend of aesthetics and usability.
                      Working with him was a delight!
                    </p>
                    <Image
                      width={800}
                      height={800}
                      className="w-9 h-9 rounded-full object-cover my-3"
                      src="/images/img9.jpg"
                      alt=""
                    />
                    <p className="text-white font-Interegular">JoScript</p>
                    <span className="text-neutral-500 font-Interegular">
                      Founder, Beta
                    </span>
                    <Stars num={4} />
                  </div>
                  <div className=" w-[300px] hover:bg-neutral-800/40 bg-neutral-800 cursor-pointer transition-all ease-in duration-150 p-5  rounded-xl">
                    <p className="text-white font-Interegular">
                      Joscript design expertise elevated our product to new
                      heights. A perfect blend of aesthetics and usability.
                      Working with him was a delight!
                    </p>
                    <Image
                      width={800}
                      height={800}
                      className="w-9 h-9 rounded-full object-cover my-3"
                      src="/images/img9.jpg"
                      alt=""
                    />
                    <p className="text-white font-Interegular">JoScript</p>
                    <span className="text-neutral-500 font-Interegular">
                      Founder, Beta
                    </span>
                    <Stars num={4} />
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}

            <Location />

            {/* Message */}
            <Message />
          </div>
          <Footer />
        </div>
      </div>

      <motion.div
        initial={{
          display: !open ? "none" : "block",
        }}
        animate={{
          display: open ? "flex" : "none",
          transition: { duration: !open ? 1 : 0 },
        }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl flex justify-center items-center w-full bg-black/60 fixed bottom-0 z-50 overscroll-y-none right-0 left-0 h-full"
      >
        <div className="max-w-md  bg-[#161616] py-3 px-3 rounded-xl">
          <div className="flex justify-between items-center text-white">
            <p className="text-xl font-Intermedium">Share this profile</p>

            <div className="cursor-pointer" onClick={() => setOpen(false)}>
              <PiXCircleLight className="text-2xl text-neutral-300" />
            </div>
          </div>

          <div className="mt-3 ">
            {links.map((link, indx) => (
              <div
                key={indx}
                className={`flex items-center justify-between  text-neutral-300 hover:bg-neutral-800 duration-300 ease-in-out transition-all p-2 mt-1 rounded-xl cursor-pointer ${
                  indx === links.length - 1 &&
                  "bg-neutral-950 hover:bg-neutral-950"
                }`}
              >
                <div className="flex items-center gap-x-2 ">
                  {link.iconFirst}
                  <p
                    key={indx}
                    className={` font-Intermedium ${
                      indx === links.length - 1 ? "text-base " : "text-lg"
                    }  `}
                  >
                    {link.name}
                  </p>
                </div>
                {indx === links.length - 1 ? (
                  <span
                    onClick={onCopy}
                    className="flex items-center bg-neutral-300  p-1 rounded-lg px-1 gap-x-1 font-Intermedium text-neutral-600 cursor-pointer "
                  >
                    {copied ? "Copied" : link.stri}

                    <AnimatePresence>
                      {copied ? (
                        <motion.span
                          initial={{ scale: 1 }}
                          animate={{ scale: 0.8 }}
                          exit={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 100,
                          }}
                        >
                          <FcCheckmark className="w-4 h-4" />
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.8 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          }}
                        >
                          <TbCopy className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                ) : (
                  link.lastIcon
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          display: !dialog ? "none" : "block",
        }}
        animate={{
          display: dialog ? "flex" : "none",
          transition: { duration: !dialog ? 1 : 0 },
        }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl flex justify-center items-center w-full bg-black/60 fixed bottom-0 z-10 overscroll-y-none right-0 left-0 h-full"
      >
        <div className="max-w-md  bg-[#161616] py-3 px-3 rounded-xl">
          <div className="flex justify-center relative ">
            <div
              className="cursor-pointer absolute right-2 top-2 "
              onClick={() => setDialog(false)}
            >
              <PiXCircleLight className="text-2xl text-neutral-300" />
            </div>
            <Image
              width={800}
              height={800}
              className="w-14 h-14 rounded-full object-cover "
              src="/images/f.jpg"
              alt=""
            />
          </div>
          <p className="text-neutral-300 text-center font-Interegular mt-3">
            Subscribe to JoScript
          </p>
          <p className="text-center font-Intermedium text-neutral-600 my-1">
            Stay up to date with everything important
          </p>

          <form action="">
            <input
              className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
              type="text"
              placeholder="Your email"
              name=""
              id=""
            />
            <button className="bg-neutral-800 p-2 rounded-lg mt-2 w-full text-neutral-200 font-Intermedium">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
