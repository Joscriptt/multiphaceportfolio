"use client";

import Link from "next/link";
import React, { useState } from "react";

import { motion } from "framer-motion";

import { PiCaretDoubleUp } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import cn from "classnames";
import { usePathname } from "next/navigation";

function StandardLink() {
  const [dialog, setDialog] = useState(false);
  const [dialog2, setDialog2] = useState(false);
  const path = usePathname();
  return (
    <div>
      <div className="">
        <div className="fixed bottom-6 left-8 z-10 hidden md:block">
          <div
            onClick={() => setDialog(true)}
            className="flex items-center bg-neutral-900 w-40 rounded-xl h-14 px-2 justify-between cursor-pointer"
          >
            <div className="">
              <p className="text-neutral-600 font-Interegular uppercase text-xs">
                Style
              </p>
              <p className="text-neutral-200 capitalize">
                {path === "/detailed"
                  ? "Detailed"
                  : path === "/compact"
                  ? "compact"
                  : path === "/rounded"
                  ? "rounded"
                  : "detailed"}
              </p>
            </div>
            <PiCaretDoubleUp className="text-white" />
          </div>
        </div>

        <motion.div
          initial={{
            display: !dialog ? "none" : "block",
          }}
          animate={{
            display: dialog ? "flex" : "none",
            transition: { duration: !dialog ? 1 : 0 },
          }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg flex justify-center items-center w-full bg-black/50 fixed top-0 z-30  h-full"
        >
          <div className="py-3 px-3 rounded-xl">
            <div>
              <p className="text-neutral-600 text-center mb-5 uppercase font-Interegular text-xs">
                Style
              </p>
            </div>
            <ul className="text-center w-full">
              <Link onClick={() => setDialog(false)} href={"/"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Detailed
                </li>
              </Link>

              <Link onClick={() => setDialog(false)} href={"/compact"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/compact"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Compact
                </li>
              </Link>
              <Link onClick={() => setDialog(false)} href={"/rounded"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/rounded"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Rounded
                </li>
              </Link>
            </ul>

            <div className="flex justify-center  ">
              <button
                className="absolute bottom-16 z-50 w-10 h-10 bg-neutral-800/25  rounded-full flex justify-center items-center"
                onClick={() => setDialog(false)}
              >
                <IoMdClose className="w-7 h-7 text-white" />
              </button>
              <span className="uppercase text-xs font-Intermedium absolute bottom-12 text-white z-50">
                Close
              </span>
            </div>
          </div>
        </motion.div>

        {/* Dilog 2 */}
        <div className="fixed bottom-6 left-8 md:left-auto right-8 z-10">
          <div
            onClick={() => setDialog2(true)}
            className="flex items-center bg-neutral-900  md:w-40 rounded-xl h-14 px-2 justify-between cursor-pointer"
          >
            <div className="">
              <p className="text-neutral-600 font-Interegular uppercase text-xs">
                Profile
              </p>
              <p className="text-neutral-200 capitalize">
                {path === "/"
                  ? "General"
                  : path === "/youtuber"
                  ? "Youtuber"
                  : path === "/indie-maker"
                  ? "Indie Maker"
                  : path === "/influencer"
                  ? "Influencer"
                  : path === "/podcast"
                  ? "Podcast"
                  : path === "/writer"
                  ? "Writer"
                  : "General"}
              </p>
            </div>
            <PiCaretDoubleUp className="text-white" />
          </div>
        </div>

        {/* Dialog 2 */}
        <motion.div
          initial={{
            display: !dialog2 ? "none" : "block",
          }}
          animate={{
            display: dialog2 ? "flex" : "none",
            transition: { duration: !dialog2 ? 1 : 0 },
          }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg flex justify-center items-center w-full bg-black/50 fixed top-0 z-30  h-full"
        >
          <div className="py-3 px-3 rounded-xl">
            <div>
              <p className="text-neutral-600 text-center mb-5 uppercase font-Interegular text-xs">
                Profile
              </p>
            </div>
            <ul className="text-center w-full">
              <Link onClick={() => setDialog2(false)} href={"/"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  General
                </li>
              </Link>

              <Link onClick={() => setDialog2(false)} href={"/youtuber"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/youTubeber"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  YouTubeber
                </li>
              </Link>
              <Link onClick={() => setDialog2(false)} href={"/indie-maker"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/indie-Maker"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Indie Maker
                </li>
              </Link>
              <Link onClick={() => setDialog2(false)} href={"/influencer"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/influencer"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Influencer
                </li>
              </Link>
              <Link onClick={() => setDialog2(false)} href={"/podcast"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/podcast"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Podcast
                </li>
              </Link>
              <Link onClick={() => setDialog2(false)} href={"/writer"}>
                <li
                  className={cn(
                    `font-Interegular text-neutral-500  hover:bg-neutral-700/80 w-screen p-2,
              ${
                path === "/writer"
                  ? "bg-neutral-800 p-2"
                  : "hover:bg-neutral-900/40 p-2"
              }
              `
                  )}
                >
                  Writer
                </li>
              </Link>
            </ul>

            <div className="flex justify-center  ">
              <button
                className="absolute bottom-16 z-50 w-10 h-10 bg-neutral-800/25  rounded-full flex justify-center items-center"
                onClick={() => setDialog2(false)}
              >
                <IoMdClose className="w-7 h-7 text-white" />
              </button>
              <span className="uppercase text-xs font-Intermedium absolute bottom-12 text-white z-50">
                Close
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StandardLink;
