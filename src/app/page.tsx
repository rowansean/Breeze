import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@tremor/react";
import { SunIcon, SunriseIcon, SunsetIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b from-[#FFF385] to-[#4182FF] to-70% h-screen w-screen p-3 overflow-x-hidden">
      <Header className="mt-20">
        <h1 className="text-4xl drop-shadow-lg">Charlotte</h1>
      </Header>

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

      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
