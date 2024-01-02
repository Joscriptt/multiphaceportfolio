"use client";

import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  PiGlobeSimpleThin,
  PiUploadThin,
  PiXCircleLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
  PiInstagramLogoThin,
} from "react-icons/pi";

import { FcCheckmark } from "react-icons/fc";
import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import YutubeLink from "@/app/components/YutubeLink";
import {
  BsTwitterX,
  BsThreads,
  BsWhatsapp,
  BsMessenger,
  BsPeople,
} from "react-icons/bs";

import { cn } from "@nextui-org/react";
import { SiBeatport } from "react-icons/si";

import Location from "@/app/components/Location";
import Footer from "@/app/components/Footer";
import Message from "../components/Message";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import Store from "../components/Store";
import Image from "next/image";

const inviteUrl = `Sam@dev.com`;
const inviteUrl2 = `SGREEN30`;

function Header({ value }) {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
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
  const onCopy2 = () => {
    navigator.clipboard.writeText(inviteUrl2);
    setCopied2(true);

    setTimeout(() => {
      setCopied2(false);
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
            width={800}
            height={800}
            className="w-9 h-9  rounded-md object-cover"
            src="/images/img3.jpg"
            alt="hello"
          />
          <h1 className="text-white font-Intermedium">Jane Doe</h1>
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
          width={800}
          height={800}
          className=" h-full w-full object-cover  absolute opacity-60"
          src="/images/img4.jpg"
          alt="hi"
        />
      </div>

      <div className="   w-full flex justify-center z-10 relative -top-9">
        <div className="absolute  p-1 rounded-full bg-[#111111]">
          <Image
            width={800}
            height={800}
            className="w-16 h-16 rounded-full object-cover "
            src="/images/img9.jpg"
            alt="example"
          />
        </div>
      </div>

      <div className="bg-[#111111] h-screen p-3">
        <div className="h-screen max-w-lg mx-auto bg-[#111111] pt-14">
          <div>
            <div className="text-center">
              <h3 className="font-Intermedium text-white text-2xl flex justify-center items-center gap-x-2">
                Jane Doe
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

              <div className="flex justify-center ">
                <Link
                  href={"https://github.com/joscript/"}
                  className="flex items-center gap-x-2 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
                >
                  <PiGlobeSimpleThin className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium">Janedoe.com</p>
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <YutubeLink />
            </div>

            {/* Latest Post */}
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
                    alt="hey"
                  />

                  <div>
                    <div className="flex items-center gap-x-2 ">
                      <p className="font-Intermedium text-base text-white">
                        Sammy Brown
                      </p>
                      <RiVerifiedBadgeFill className="text-[#1D9BF0] text-xl" />
                    </div>

                    <div className="flex gap-x-2 items-center font-Interegular">
                      <span className="text-neutral-500">@Sahmy</span>
                      <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                      <button className="text-[#1D9BF0] font-Intermedium text-sm">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base text-white my-3">
                    We Live again, do subscribe
                  </h3>
                  <Image
                    width={800}
                    height={800}
                    className="h-52 w-full object-cover rounded-md"
                    src="/images/img9.jpg"
                    alt=""
                  />
                  <div className="flex items-center gap-x-2 font-Intermedium text-neutral-400 text-sm">
                    <p className="">10:39 PM </p>
                    <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                    <p>Jul 23, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Store */}
            <Store />

            {/* Community */}
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

            {/* Shop dicount */}
            <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
              <div className=" gap-x-6  flex justify-between ">
                <div className="flex justify-between items-center w-full p-2">
                  <p className="text-white font-Intermedium">Get 20% off</p>
                  <Link
                    href={"/"}
                    className="p-1 px-2 w-fit rounded-full flex  gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in  text-neutral-300 items-center"
                  >
                    <SiBeatport className="text-[#FF0000]" />
                    <span className="">@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className=" p-3 rounded-2xl mt-3  bg-[#1C1C1C] cursor-pointer">
                <div className="">
                  <p className="text-2xl text-center text-white leading-6">
                    SGREEN30
                  </p>
                  <p className="text-center text-neutral-600 my-3">
                    Use this code in my store{" "}
                  </p>

                  {/* code to copy */}

                  <button
                    onClick={onCopy2}
                    className="w-full gap-x-3  h-10 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 duration-400 transition-all ease-in"
                  >
                    <span className="font-Intermedium  text-neutral-200 ">
                      {copied2 ? "copied" : "Copy"}
                    </span>
                    <AnimatePresence>
                      {copied2 ? (
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
                          <FcCheckmark className="w-4 h-4 " />
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
                          <TbCopy className="w-4 h-4 text-neutral-200 " />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>

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
              width={800}
              height={800}
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
