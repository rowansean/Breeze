import { SunIcon, CloudSun, CloudRain, CircleHelp } from "lucide-react";
import React from "react";

export default function HourlyItem({
  time,
  temp,
  condition,
}: {
  time: string;
  temp: number;
  condition: string;
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
    <div className="flex flex-col items-center text-sm font-light drop-shadow-lg">
      <h1>{time}</h1>
      <div className="text-lg m-3">{WeatherIconRender}</div>
      <p>{temp}°</p>
    </div>
  );
}
