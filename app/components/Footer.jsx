import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center  w-full p-3 mt-6 ">
        <div className="text-neutral-500">
          <span>© {new Date().getFullYear()}</span>
          <span>Portfolio by @Joscript</span>
        </div>
        <div className="flex items-center gap-x-4 mt-3 text-white">
          <p className="hover:text-neutral-700 duration-200 ease-in transition-all cursor-pointer">
            Purchase Courses
          </p>
          <span className="w-1 h-1 rounded-full bg-white" />
          <p className="hover:text-neutral-700 duration-200 ease-in transition-all cursor-pointer">
            Become a Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
