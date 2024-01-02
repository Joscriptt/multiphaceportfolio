"use client";

import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  PiBellSimple,
  PiGlobeSimpleThin,
  PiUploadThin,
  PiArrowSquareOutThin,
  PiXCircleLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
  PiInstagramLogoThin,
  PiCalendar,
} from "react-icons/pi";

import { FcCheckmark } from "react-icons/fc";
import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbBrandYoutubeFilled, TbCopy } from "react-icons/tb";
import YutubeLink from "@/app/components/YutubeLink";
import {
  BsTwitterX,
  BsThreads,
  BsWhatsapp,
  BsMessenger,
  BsPeople,
  BsYoutube,
} from "react-icons/bs";
// import { LiaFlagUsaSolid } from "react-icons/lia";
import YouTube from "react-youtube";
import { Spotify } from "react-spotify-embed";

import Stories from "@/app/components/Stories";
import stories from "../../data";
// import Stars from "./Stars";
import Location from "@/app/components/Location";
// import Services from "./Services";
// import Store from "./Store";
// import Message from "./Message";
import Footer from "@/app/components/Footer";
import Message from "../components/Message";
import { cn } from "@nextui-org/react";

import CountUp from "react-countup";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import Image from "next/image";

const inviteUrl = `Sam@dev.com`;

function Header({ value }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);

  const ref = useRef(null);

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

  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  // let copiedd = "hey@josephhjamess46@gmail.com";

  // console.log(links.at(-1).stri);

  return (
    <>
      <motion.div
        ref={ref}
        className={cn(
          `fixed top-11 flex z-20 justify-center w-full

          ${dialog && "hidden"}
          `
        )}
        style={{ opacity: scrollYProgress }}
      >
        <div className=" bg-[#161616] border p-2 rounded-lg  border-neutral-800 flex justify-between items-center  w-[640px]">
          <Image
            width={900}
            height={900}
            className="w-9 h-9  rounded-md object-cover"
            src="/images/img7.jpg"
            alt=""
          />
          <h1 className="text-white font-Intermedium">Sammy Brown</h1>
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 rounded-lg bg-neutral-700 text-neutral-300 flex items-center justify-center"
          >
            <PiUploadThin />
          </button>
        </div>
      </motion.div>
      <div className=" h-60 relative  w-full -z-10">
        <video
          // style={{ opacity: scrollYProgress }}
          autoPlay
          controls
          loop="true"
          className=" h-full w-full object-cover  absolute opacity-60"
          src="/videos/yutube.mp4"
        />
      </div>

      <div className="   w-full flex justify-center z-10 relative -top-9">
        <div className="absolute  p-1 rounded-full bg-[#111111]">
          <Image
            width={900}
            height={900}
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
                Sammy Brown
                <RiVerifiedBadgeFill className="text-[#B5924F] text-xl" />
              </h3>
              <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
                <p>Est. 1999</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>New York, NY</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>He/Him</p>
              </div>
            </div>
            <div>
              <p className="font-Intermedium text-neutral-500 text-center my-3">
                Sam Brown is a travel vlogger, content creator and small
                business owner based in New York.
              </p>

              <div className="flex justify-center gap-x-7">
                <Link
                  href={"https://github.com/joscript/"}
                  className="flex items-center gap-x-2 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
                >
                  <PiGlobeSimpleThin className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium">Sam.com</p>
                </Link>
                <div className=" items-center gap-x-2  flex  cursor-pointer hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl">
                  <PiCalendar className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium">
                    {" "}
                    New Videos every week
                  </p>
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
                className="w-80 gap-x-3  h-10 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-neutral-100 duration-400 transition-all ease-in"
              >
                <span className="font-Intermedium ">
                  {copied ? "copied" : "Sammy@gmail.com"}
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
            <div className="mt-5">
              <YutubeLink />
            </div>
            <div className="flex justify-center  gap-x-5">
              <Stories stories={stories} />
            </div>
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Stats</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <TbBrandYoutubeFilled className="text-red-600" />
                    <span>@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className="  mt-3  w-full flex bg-[#1C1C1C] justify-around rounded-lg h-24 items-center">
                <div className="text-white text-lg ">
                  <div className="flex justify-center font-Intermedium text-neutral-300 text-2xl">
                    <CountUp duration={10} end={60} className="" />
                    <p>m</p>
                  </div>
                  <p className="text-neutral-600 text-sm">Subscribers</p>
                </div>
                <div className="text-center font-Intermedium text-neutral-300 text-2xl">
                  <CountUp duration={10} end={17} />
                  <p className="text-neutral-600  text-sm">videos</p>
                </div>
                <div className="text-white ">
                  <div className=" flex justify-center font-Intermedium text-neutral-300 text-2xl">
                    <CountUp duration={10} end={48} />
                    <p>m</p>
                  </div>
                  <p className="text-neutral-600">Views</p>
                </div>
              </div>
            </div>
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Stats</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <TbBrandYoutubeFilled className="text-red-600" />
                    <span>@Joscript</span>
                  </Link>
                </div>
              </div>

              <YouTube
                videoId="p69xC3CW7WQ"
                options={options}
                onReady={onReady}
                id="video"
                iframeClassName={"lg:w-[500px] h-[250px]"}
              />
            </div>
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">
                    Join my community
                  </p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
                  >
                    <BsPeople />
                    <span>Joscript</span>
                  </Link>
                </div>
              </div>

              <InfiniteMovingCards />
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
                    width={900}
                    height={900}
                    className="w-11 h-11 rounded-full"
                    src="/images/img1.jpg"
                    alt=""
                  />

                  <div>
                    <div className="flex items-center gap-x-2 ">
                      <p className="font-Intermedium text-base text-white">
                        JoScript Joe
                      </p>
                      <RiVerifiedBadgeFill className="text-[#1D9BF0] text-xl" />
                    </div>

                    <div className="flex gap-x-2 items-center font-Interegular">
                      <span className="text-neutral-500">@joe</span>
                      <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                      <button className="text-blue-600 font-Intermedium text-sm">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base text-white my-3">
                    Stepping into the new season with a mix of earth colors and
                    bold steps
                  </h3>
                  <div className="flex items-center gap-x-2 font-Intermedium text-neutral-400 text-sm">
                    <p className="">10:39 PM </p>
                    <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                    <p>Jul 23, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            {/* featured video */}
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Featured videos</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex  gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in  text-neutral-300 items-center"
                  >
                    <BsYoutube className="text-[#FF0000]" />
                    <span className="">@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className=" p-3 rounded-2xl mt-3  flex i gap-x-5 hover:bg-[#1C1C1C] cursor-pointer">
                <div className="relative">
                  <Image
                    width={900}
                    height={900}
                    className="w-28 h-20 object-cover rounded-lg"
                    src="/images/img7.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 rounded-md flex justify-center items-center w-9 h-4 px-0.5">
                    <p className="text-[10px] font-semibold text-white">
                      12:06
                    </p>
                  </div>
                </div>
                <div className="leading-8">
                  <p className="text-base text-white leading-6">
                    Immersing in the Vibrant Flavors of Mexico
                  </p>
                  <div className="flex items-center gap-x-2 text-neutral-600 font-semibold ">
                    <p className="text-sm">1.3m views</p>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <p className="text-sm">5 weeks ago</p>
                  </div>
                </div>
              </div>
              <div className=" p-3 rounded-2xl mt-3  flex  gap-x-5 hover:bg-[#1C1C1C] cursor-pointer">
                <div className="relative">
                  <Image
                    width={900}
                    height={900}
                    className="w-28 h-20 object-cover rounded-lg"
                    src="/images/img6.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 rounded-md flex justify-center items-center w-9 h-4 px-0.5">
                    <p className="text-[10px] font-semibold text-white">
                      18:00
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base text-white leading-6 ">
                    Discovering the Pacific Coastline of California
                  </p>
                  <div className="flex items-center gap-x-2 text-neutral-600 font-semibold ">
                    <p className="text-sm">922k views</p>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <p className="text-sm">1 year ago</p>
                  </div>
                </div>
              </div>
              <div className=" p-3 rounded-2xl mt-3  flex items-center gap-x-5 hover:bg-[#1C1C1C] cursor-pointer">
                <div className="relative shrink-0">
                  <Image
                    width={900}
                    height={900}
                    className="w-28 h-20 object-cover rounded-lg"
                    src="/images/img9.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 rounded-md flex justify-center items-center w-9 h-4 px-0.5">
                    <p className="text-[10px] font-semibold text-white">
                      12:06
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base text-white leading-6 ">
                    12 things you need to know before visiting Iceland and New
                    York
                  </p>
                  <div className="flex items-center gap-x-2 text-neutral-600 font-semibold ">
                    <p className="text-sm">1.9m views</p>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <p className="text-sm">5 months ago</p>
                  </div>
                </div>
              </div>
            </div>
            <Spotify
              className="w-full h-20 my-3"
              link="https://open.spotify.com/playlist/37i9dQZF1DX0A8zVl7p82B?si=c2c06a3f57c24b48"
            />

            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">My channels</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex  gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in  text-neutral-300 items-center"
                  >
                    <BsYoutube className="text-[#FF0000]" />
                    <span className="">@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className=" p-2 rounded-2xl mt-3  flex  gap-x-5 hover:bg-[#1C1C1C] cursor-pointer">
                <div className="relative">
                  <Image
                    width={900}
                    height={900}
                    className="w-14 h-14 object-cover rounded-full"
                    src="/images/img5.jpg"
                    alt=""
                  />
                </div>
                <div className="leading-8">
                  <p className="text-base text-white leading-6">JoScript</p>
                  <div className="flex items-center gap-x-2 text-neutral-500 font-semibold ">
                    <p className="text-sm">2m subscribers </p>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <p className="text-sm">18 videos</p>
                  </div>
                </div>
              </div>
              <div className=" p-2 rounded-2xl  flex i gap-x-5 hover:bg-[#1C1C1C] cursor-pointer">
                <div className="relative">
                  <Image
                    width={900}
                    height={900}
                    className="w-14 h-14 object-cover rounded-full"
                    src="/images/img9.jpg"
                    alt=""
                  />
                </div>
                <div className="leading-8">
                  <p className="text-base text-white leading-6">Real Estate</p>
                  <div className="flex items-center gap-x-2 text-neutral-500 font-semibold ">
                    <p className="text-sm">219m subscribers </p>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <p className="text-sm">1 videos</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Latest photos */}
            {/* Store */}
            {/* Services */}
            {/* <Services /> */}
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
        className="backdrop-blur-xl flex justify-center items-center w-full bg-black/60 fixed bottom-0 z-10 overscroll-y-none right-0 left-0 h-full"
      >
        <div className="max-w-md  bg-[#161616] py-3 px-3 rounded-xl">
          <div className="flex justify-between items-center text-white">
            <p className="text-xl font-Intermedium">Share this profile</p>

            <div className="cursor-pointer" onClick={() => setOpen(false)}>
              <PiXCircleLight className="text-2xl text-neutral-300" />
            </div>
          </div>

          <div className="mt-3">
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
      {/* divide */}
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
        <div className="max-w-xl w-4/6 lg:w-4/12  bg-[#161616] py-3 px-3 rounded-xl ">
          <div className="flex justify-center relative ">
            <div
              className="cursor-pointer absolute right-2 top-2  "
              onClick={() => setDialog(false)}
            >
              <PiXCircleLight className="text-2xl text-neutral-300" />
            </div>
            <Image
              width={900}
              height={900}
              className="w-14 h-14 rounded-full object-cover "
              src="/images/img9.jpg"
              alt=""
            />
          </div>
          <p className="text-neutral-300 text-center font-Interegular mt-3">
            Subscribe to Sammy
          </p>
          <p className="text-center font-Intermedium text-neutral-600 my-1">
            Stay up to date with everything important
          </p>

          <div className="mt-5">
            <form action="">
              <input
                className="bg-neutral-800 rounded-lg p-2 w-full placeholder:text-neutral-600 mt-2 focus:ring-2 ring-neutral-500 outline-none text-neutral-400 font-Intermedium "
                type="text"
                placeholder="Your email"
                name=""
                id=""
              />
              <button className="bg-neutral-800 p-2 rounded-lg mt-2.5 w-full text-neutral-200 font-Intermedium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
