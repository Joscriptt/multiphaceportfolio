import Link from "next/link";
import React from "react";

import {
  PiDribbbleLogoThin,
  PiFigmaLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoLight,
  PiYoutubeLogoThin,
} from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

function Links() {
  return (
    <div className="flex justify-center  flex-wrap gap-x-5  mx-auto mt-8 gap-y-3 md:gap-y-0">
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <BsTwitterX className="text-base" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <PiFigmaLogoThin className="text-xl" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <PiGithubLogoThin className="text-xl" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <PiDribbbleLogoThin className="text-xl" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <PiInstagramLogoThin className="text-xl" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <PiLinkedinLogoLight className="text-xl" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <PiYoutubeLogoThin className="text-xl" />
      </Link>
      <Link
        href={"/"}
        className="h-11 w-11 flex justify-center items-center  rounded-lg  gap-x-3 hover:bg-neutral-800  duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <SiEthereum className="text-xl" />
      </Link>
    </div>
  );
}

export default Links;
