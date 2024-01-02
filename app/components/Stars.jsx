import React from "react";
import { PiStarFill } from "react-icons/pi";

function Stars({ num }) {
  function getLength() {
    let arr = [];

    for (let i = 0; i < num; i++) {
      arr.push(<PiStarFill key={i} className="text-yellow-300" />);
    }
    return arr;
  }
  return <div className="flex gap-x-2 mt-3">{getLength()}</div>;
}

export default Stars;
