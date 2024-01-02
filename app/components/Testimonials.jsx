import React from "react";
import Stars from "./Stars";
import Image from "next/image";

function Testimonials() {
  return (
    <div>
      <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
        <div className="  flex justify-between ">
          <p className="text-white font-Intermedium">Testimonials</p>
        </div>

        <div className=" overflow-x-auto mt-3   ">
          <div className=" flex  gap-x-3 w-[1000px] p-2  ">
            <div className=" w-[300px] hover:bg-neutral-800/40 bg-neutral-800 cursor-pointer transition-all ease-in duration-150 p-5  rounded-xl">
              <p className="text-white font-Interegular">
                Lincoln’s design expertise elevated our product to new heights.
                A perfect blend of aesthetics and usability. Working with him
                was a delight!
              </p>
              <Image
                width={800}
                height={800}
                className="w-9 h-9 rounded-full object-cover my-3"
                src="/images/img9.jpg"
                alt=""
              />
              <p className="text-white font-Interegular">JoScript</p>
              <span className="text-neutral-500 font-Interegular">
                Founder, Beta
              </span>
              <Stars num={4} />
            </div>
            <div className=" w-[300px] hover:bg-neutral-800/40 bg-neutral-800 cursor-pointer transition-all ease-in duration-150 p-5  rounded-xl">
              <p className="text-white font-Interegular">
                Lincoln’s design expertise elevated our product to new heights.
                A perfect blend of aesthetics and usability. Working with him
                was a delight!
              </p>
              <Image
                width={800}
                height={800}
                className="w-9 h-9 rounded-full object-cover my-3"
                src="/images/img9.jpg"
                alt=""
              />
              <p className="text-white font-Interegular">JoScript</p>
              <span className="text-neutral-500 font-Interegular">
                Founder, Beta
              </span>
              <Stars num={4} />
            </div>
            <div className=" w-[300px] hover:bg-neutral-800/40 bg-neutral-800 cursor-pointer transition-all ease-in duration-150 p-5  rounded-xl">
              <p className="text-white font-Interegular">
                Lincoln’s design expertise elevated our product to new heights.
                A perfect blend of aesthetics and usability. Working with him
                was a delight!
              </p>
              <Image
                width={800}
                height={800}
                className="w-9 h-9 rounded-full object-cover my-3"
                src="/images/img9.jpg"
                alt=""
              />
              <p className="text-white font-Interegular">JoScript</p>
              <span className="text-neutral-500 font-Interegular">
                Founder, Beta
              </span>
              <Stars num={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
