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
    <div className="flex flex-wrap gap-3  mx-auto mt-8">
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300 "
      >
        <BsTwitterX />
        <span>@Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiFigmaLogoThin />
        <span>@Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiGithubLogoThin />
        <span>/Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiDribbbleLogoThin />
        <span>/Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiInstagramLogoThin />
        <span>@Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiLinkedinLogoLight />
        <span>/Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <PiYoutubeLogoThin />
        <span>@Joscript</span>
      </Link>
      <Link
        href={"/"}
        className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
      >
        <SiEthereum />
        <span>@Joscript</span>
      </Link>
    </div>
  );
}

export default Links;
