"use client";

import React, { useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  PiArrowSquareOutThin,
  PiXCircleLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
  PiGlobe,
} from "react-icons/pi";

import { FcCheckmark } from "react-icons/fc";
import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbBrandYoutubeFilled, TbCopy } from "react-icons/tb";
// import Links from "./Links";
import { BsTwitterX, BsThreads, BsWhatsapp, BsMessenger } from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";

import Stories from "@/app/components/Stories";
// import stories from "../../data";
import Stars from "@/app/components/Stars";
import Location from "@/app/components/Location";
import Services from "@/app/components/Services";
import Store from "@/app/components/Store";
import Message from "@/app/components/Message";
import Links from "../components/Links";

import { Accordion, AccordionItem } from "@nextui-org/react";

const inviteUrl = `hey@josephhjamess46@gmail.com`;

import { MonitorMobileIcon } from "../components/MonitorMobileIcon";
import { ShieldSecurityIcon } from "../components/ShieldSecurityIcon";
import { InfoIcon } from "../components/InfoIcon";
import { InvalidCardIcon } from "../components/InvalidCardIcon";
import Testimonials from "../components/Testimonials";
import Photos from "../components/Photos";
import Footer from "../components/Footer";
import LinkCompact from "@/app/components/LinkCompact";

import YouTube from "react-youtube";
import Image from "next/image";

function Compact() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);

  const ref = useRef(null);

  const path = usePathname();

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
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
      name: "hey@josephhjamess46@gmail.com",
      stri: "Copy",
      lastIcon: <FaAngleRight />,
    },
  ];

  // let copiedd = "hey@josephhjamess46@gmail.com";

  // console.log(links.at(-1).stri);

  return (
    <>
      {path === "/compact" && ""}

      <div className=" mt-20  w-full flex justify-center z-10 relative -top-9">
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
                Paul wyete
                <RiVerifiedBadgeFill className="text-[#B5924F] text-xl" />
              </h3>
              <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
                <p>Est. 1699</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>United Kingdom, Europe</p>
                <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
                <p>He/Him</p>
              </div>
            </div>
            <div>
              <p className="font-Intermedium text-neutral-500 text-center my-3">
                Paul wyete is a skateboarder, software designer and content
                creator based in England.
              </p>

              <div className="flex justify-center items-center">
                <div className="flex items-center gap-x-2   cursor-pointer hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl w-fit text-center">
                  <PiGlobe className=" text-xl text-neutral-500" />
                  <p className="text-white font-Intermedium"> Paulwyete.com</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              {path === "/compact" && <LinkCompact />}
              {/* <Links /> */}
            </div>
            <div>
              <div className="bg-[#161616] gap-x-6 p-2.5 rounded-xl mt-8 flex justify-between items-center hover:bg-neutral-800 duration-150 ease-out cursor-pointer ">
                <Image
                  width={800}
                  height={800}
                  className="w-10 h-9 rounded-lg object-cover"
                  src="/images/f.jpg"
                  alt=""
                />
                <div className="flex-1">
                  <h4 className="font-Interegular text-white text-sm text-center">
                    Ultra
                  </h4>
                </div>

                <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
                  <PiArrowSquareOutThin />
                </button>
              </div>

              <div className="bg-[#161616] gap-x-6 p-2.5 rounded-xl mt-2 flex justify-between items-center hover:bg-neutral-800 duration-150 ease-out cursor-pointer">
                <Image
                  width={800}
                  height={800}
                  className="w-10 h-9 rounded-lg object-cover"
                  src="/images/cry.jpg"
                  alt=""
                />
                <div className="flex-1">
                  <h4 className="font-Interegular text-white text-sm text-center ">
                    Graino Gradients
                  </h4>
                </div>

                <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
                  <PiArrowSquareOutThin />
                </button>
              </div>
              <div className="bg-[#161616] gap-x-6 p-2.5 rounded-xl mt-2 flex justify-between items-center hover:bg-neutral-800 duration-150 ease-out cursor-pointer">
                <Image
                  width={800}
                  height={800}
                  className="w-10 h-9 rounded-lg object-cover"
                  src="/images/yellow.jpg"
                  alt=""
                />
                <div className="flex-1">
                  <h4 className="font-Interegular text-white text-sm text-center ">
                    AR & Design
                  </h4>
                </div>

                <button className="text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg">
                  <PiArrowSquareOutThin />
                </button>
              </div>
            </div>
            <Accordion
              showDivider={false}
              className=" flex flex-col mt-2  w-full "
              variant="shadow"
              itemClasses={itemClasses}
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 1,
                      },
                    },
                  },
                  exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        easings: "ease",
                        duration: 0.25,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 0.3,
                      },
                    },
                  },
                },
              }}
            >
              <AccordionItem
                key="1"
                aria-label="Connected devices"
                className="text-white  bg-[#161616]  rounded-xl px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<MonitorMobileIcon className="text-white" />}
                title="Latest Post"
              >
                <div className=" p-3 rounded-2xl  px-0">
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
              </AccordionItem>

              <AccordionItem
                key="2"
                aria-label="Apps Permissions"
                startContent={<ShieldSecurityIcon />}
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3  hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                title="Latest Video"
              >
                <YouTube
                  videoId="p69xC3CW7WQ"
                  options={options}
                  onReady={onReady}
                  id="video"
                  iframeClassName={"w-[500px] h-[250px]"}
                />
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Pending tasks"
                className="text-white bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InfoIcon className="text-warning" />}
                title="Latest Photos"
              >
                <Photos />
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Card expired"
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InvalidCardIcon className="text-danger" />}
                subtitle="Store"
              >
                <Store />
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Card expired"
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InvalidCardIcon className="text-danger" />}
                subtitle="Latest played"
              >
                {/* <Store /> */}
                {/* Music */}
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Services"
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InvalidCardIcon className="text-danger" />}
                subtitle="Services"
              >
                <Services />
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Card expired"
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InvalidCardIcon className="text-danger" />}
                subtitle="Testimonials"
              >
                <Testimonials />
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="Card expired"
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InvalidCardIcon className="text-danger" />}
                subtitle="Where I'm based"
              >
                <Location />
              </AccordionItem>
              <AccordionItem
                key="9"
                aria-label="Card expired"
                className="text-white  bg-[#161616]  rounded-xl mt-2 px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
                startContent={<InvalidCardIcon className="text-danger" />}
                subtitle="Leave a message"
              >
                <Message />
              </AccordionItem>
            </Accordion>
            <Footer />;
          </div>
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

export default Compact;
