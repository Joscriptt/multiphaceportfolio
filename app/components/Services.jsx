import React from "react";
import { PiCheckLight, PiLaptop, PiRecycleLight } from "react-icons/pi";

function Services() {
  return (
    <div>
      <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
        <div className="  flex justify-between ">
          <p className="text-white font-Intermedium">Services</p>
        </div>

        {/* Services */}

        <div className=" overflow-x-auto mt-3  ">
          <div className=" flex  gap-x-3 w-[1000px] p-2  ">
            <div className=" w-[300px] hover:bg-neutral-800/40 cursor-pointer transition-all ease-in duration-150 p-2  rounded-xl">
              <div className="bg-neutral-800 p-2 flex items-center justify-center rounded-lg w-fit">
                <PiRecycleLight className="text-xl text-purple-600" />
              </div>

              <p className="text-white text-base mt-3">Design co-pilot</p>
              <p className="text-neutral-400 uppercase text-xs font-Intermedium mt-2">
                Fixed rate of
              </p>
              <p className="text-2xl text-white font-Intermedium mt-2">
                $5,999
              </p>
              <span className="text-neutral-400 uppercase text-xs font-Intermedium mt-2">
                /Month
              </span>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Unlimited revisions</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">High quality design</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">No calls or meetings</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Simple fixed monthly fee</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Pause or cancel anytime</span>
              </div>

              <button className="bg-neutral-700 p-2 flex justify-center items-center w-full rounded-lg mt-3 text-white font-Intermedium">
                Subscribe
              </button>
            </div>
            <div className=" w-[300px] hover:bg-neutral-800/40 cursor-pointer transition-all ease-in duration-150 p-2  rounded-xl">
              <div className="bg-sky-950  p-2 flex items-center justify-center rounded-lg w-fit">
                <PiLaptop className="text-xl text-sky-600 " />
              </div>

              <p className="text-white text-base mt-3">Landing page</p>
              <p className="text-neutral-400 uppercase text-xs font-Intermedium mt-2">
                Starting at
              </p>
              <p className="text-2xl text-white font-Intermedium mt-2">
                $1,999
              </p>
              <span className="text-neutral-400 uppercase text-xs font-Intermedium mt-2">
                2-4 weeks delivery
              </span>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">One pager</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">SEO-ready</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Highly converting</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Subtle animations</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Optimized page speed</span>
              </div>

              <button className="bg-neutral-700 p-2 flex justify-center items-center w-full rounded-lg mt-3 text-white font-Intermedium">
                Schedule call
              </button>
            </div>
            <div className=" w-[300px] hover:bg-neutral-800/40 cursor-pointer transition-all ease-in duration-150 p-2  rounded-xl">
              <div className="bg-pink-950 p-2 flex items-center justify-center rounded-lg w-fit">
                <PiRecycleLight className="text-xl text-pink-600" />
              </div>

              <p className="text-white text-base mt-3">Multi-page website</p>
              <p className="text-neutral-400 uppercase text-xs font-Intermedium mt-2">
                Starting at
              </p>
              <p className="text-2xl text-white font-Intermedium mt-2">
                $3,999
              </p>
              <span className="text-neutral-400 uppercase text-xs font-Intermedium mt-2">
                3-5 weeks delivery
              </span>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Multiple pages (10 max)</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">SEO-ready</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">CMS-ready</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Subtle animations</span>
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <PiCheckLight className="text-neutral-400 text-lg" />
                <span className="text-white">Optimized page speed</span>
              </div>

              <button className="bg-neutral-700 p-2 flex justify-center items-center w-full rounded-lg mt-3 text-white font-Intermedium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
