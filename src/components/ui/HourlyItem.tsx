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
    sunny: <SunIcon />,
    cloudy: <CloudSun />,
    rainy: <CloudRain />,
    default: <CircleHelp />,
    // Add more conditions as needed
  };

  const WeatherIconRender = iconMap[condition] || null;

  return (
    <div className=" flex flex-col items-center">
      <h1>{time}</h1>
      <div>{WeatherIconRender}</div>
      <p>{condition}</p>
      <p>{temp}</p>
    </div>
  );
}
