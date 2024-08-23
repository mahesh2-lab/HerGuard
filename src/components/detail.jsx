import React from "react";
import { Color } from "./color";
import { Button } from "@material-tailwind/react";

export const Detail = () => {
  return (
    <div className="absolute w-[250px] h-[298px] flex-col bottom-0 mb-[31px] mr-[31px] right-0 opacity-100 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  flex border border-[#FAF7F7] backdrop-blur-sm bg-[#E5E4E4]  rounded-[17px] shadow-md p-2 z-[1000]">
      <div className=" ml-4">
        <h2 className="mt-6 text-xl font-semibold opacity-100">
          Safety Levels{" "}
        </h2>
        <ul className=" text-[11px] leading-9 opacity-100">
          <li className="mt-2 flex items-center">
            <Color color="#4CAF50" /> Very Safe : Calm, Secure, Protected
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#8BC34A" /> Safe : Trust, Comfort, Stable
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#FFEB3B" /> Moderate : Caution, Alert, Watchful
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#FF9800" /> Unsafe : Warning, Risk, Uncertain
          </li>
          <li className="mt-2 flex items-center">
            <Color color="#F44336" /> Very Unsafe : Danger, Threat, Fear
          </li>
        </ul>
      </div>
    </div>
  );
};
