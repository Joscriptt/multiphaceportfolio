import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";

function Location() {
  const path = usePathname();

  return (
    <div>
      <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
        <div className=" gap-x-6  flex justify-between ">
          <div className="flex justify-between items-center w-full p-2">
            <p className="text-white font-Intermedium">
              {path === "/youtuber" ? "Currently in" : "My Location "}
            </p>
            <Link
              href={"/"}
              className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
            >
              <LiaFlagUsaSolid />
              <span className="font-Intermedium">USA</span>
            </Link>
          </div>
        </div>

        <div className="  mt-3  h-56 w-full">
          <Image
            width={1000}
            height={1000}
            className="h-full w-full object-cover rounded-2xl"
            // src="/images/mapp.webp"
            src={
              path === "/youtuber" ? "/images/mappp.webp" : "/images/mapp.webp"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
