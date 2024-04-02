import { SunIcon, SunriseIcon, SunsetIcon } from "lucide-react";
import React from "react";

export default function TodaySummary() {
  return (
    <div>
      <h1 className="text-8xl text-white drop-shadow-lg my-5 text-center ml-8">
        67°
      </h1>

      <div className="flex flex-col items-center w-screen font-light mb-5">
        <div className="flex gap-1">
          <SunIcon className="drop-shadow-lg text-yellow-300" />
          <p className=" text-white drop-shadow-lg">Sunny</p>
        </div>
        <p className="text-white drop-shadow-lg">High 70° | Low 45°</p>
        <div className="flex text-white drop-shadow-lg">
          <SunriseIcon size={20} />
          <p>6:30 AM</p>
          <p className="mx-4">|</p>
          <SunsetIcon size={20} />
          <p>8:30 PM</p>
        </div>
      </div>
    </div>
  );
}
