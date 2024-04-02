import { SunIcon, CloudSun, CloudRain, CircleHelp } from "lucide-react";
import React from "react";
import { Tracker } from "@tremor/react";

export default function TenDayItem({
  condition,
  temp,
  day,
}: {
  condition: string;
  temp: number;
  day: string;
}) {
  const iconMap: { [key: string]: JSX.Element } = {
    sunny: <SunIcon className="text-yellow-300 drop" />,
    cloudy: <CloudSun className="text-gray-300 drop" />,
    rainy: <CloudRain className="text-blue-300 drop" />,
    default: <CircleHelp className="text-gray-300 drop" />,
    // Add more conditions as needed
  };

  const WeatherIconRender = iconMap[condition] || iconMap.default;

  return (
    <div className=" border-b border-gray-400 border-opacity-20 p-2 flex items-center">
      <h1 className="text-left min-w-12">{day}</h1>
      <div className="text-lg m-3">{WeatherIconRender}</div>
      <p>70°</p>
      <div className="ml-5">highs and lows go here</div>
    </div>
  );
}
