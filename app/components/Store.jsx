import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiInstagramLogoThin } from "react-icons/pi";

function Store() {
  return (
    <div>
      <div className="bg-[#161616] p-2 rounded-xl mt-3  ">
        <div className="  flex justify-between  ">
          <div className="flex justify-between items-center w-full p-2  ">
            <p className="text-white font-Intermedium">Store</p>
            <Link
              href={"/"}
              className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
            >
              <PiInstagramLogoThin />
              <span className="font-Intermedium">@JoStore</span>
            </Link>
          </div>
        </div>

        <div className=" overflow-x-auto mt-3 ">
          <div className="flex  gap-x-3 w-[1000px] p-2 h-72 ">
            <div className="flex flex-col w-[300px] hover:bg-neutral-800/40 cursor-pointer transition-all ease-in duration-150 p-2  rounded-xl">
              <Image
                width={1000}
                height={1000}
                className=" w-full h-full object-cover rounded-2xl "
                src="/images/img5.jpg"
                alt=""
              />

              <p className="text-white">Hoodie</p>
              <span className="text-neutral-400">$80</span>
            </div>
            <div className="flex flex-col w-[300px] hover:bg-neutral-800/40 cursor-pointer transition-all ease-in duration-150 p-2  rounded-xl">
              <Image
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-2xl"
                src="/images/img6.jpg"
                alt=""
              />

              <p className="text-white">Hoodie</p>
              <span className="text-neutral-400">$80</span>
            </div>
            <div className="flex flex-col w-[300px] hover:bg-neutral-800/40 cursor-pointer transition-all ease-in duration-150 p-2  rounded-xl">
              <Image
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-2xl"
                src="/images/img9.jpg"
                alt=""
              />

              <p className="text-white">Hoodie</p>
              <span className="text-neutral-400">$80</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
