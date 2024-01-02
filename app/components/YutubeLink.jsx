import Link from "next/link";
import React from "react";

import {
  PiDribbbleLogoThin,
  PiFigmaLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoLight,
  PiTiktokLogoThin,
  PiYoutubeLogoThin,
} from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

function Links() {
  return (
    <div className="flex flex-wrap gap-3 lg:gap-1 justify-center   mx-auto my-6 ">
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <BsTwitterX />
        <span className="text-sm">@Joscript</span>
      </Link>

      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-1 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiGithubLogoThin />
        <span className="text-sm">Joscript</span>
      </Link>

      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-1 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiTiktokLogoThin />
        <span className="text-sm">@Joscript</span>
      </Link>

      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-1 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiYoutubeLogoThin />
        <span className="text-sm">@Joscript</span>
      </Link>
    </div>
  );
}

export default Links;
