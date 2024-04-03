"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Switch } from "@/components/ui/switch";
import { SunIcon, CloudSun, CloudRain, CircleHelp, Wind } from "lucide-react";
import { WeatherForecastResponse } from "@/types";
import { WeatherCodes } from "@/types";
import  weatherCodes  from "@/static/weatherCodes.json";

const iconMap: { [key: string]: JSX.Element } = {
  sunny: <SunIcon className="text-yellow-300 drop" />,
  cloudy: <CloudSun className="text-gray-300 drop" />,
  rainy: <CloudRain className="text-blue-300 drop" />,
  default: <CircleHelp className="text-gray-300 drop" />,
};

export default function FiveDayForecast({ forecast }: { forecast?: WeatherForecastResponse }) {
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => {
    setUnit(unit === "F" ? "C" : "F");
  };

  const convertTemperature = (temp: number) => {
    return unit === "F" ? `${Math.round((temp * 9) / 5 + 32)}°F` : `${temp}°C`;
  };

  return (
    <Card className="over overflow-scroll">
      <CardHeader className="flex flex-row justify-between">
        <h1>10 Day Forecast</h1>
        <div className="flex flex-row space-x-2">
          C° <Switch className="mx-2" onCheckedChange={toggleUnit} /> F°
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          {forecast?.map((day, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  {new Date(day?.time).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <div className="flex items-center">
                  <p className="text-sm text-slate-300 mr-1">
                    {day?.values.windSpeedAvg} mph
                  </p>
                  <Wind />
                </div>
              </div>
              <div className="mx-4">{iconMap[day.icon] || iconMap.default}</div>
              <div className="text-right">
                <p className="text-blue-400">
                  {convertTemperature(day?.values?.temperatureMin)}
                  {day.temperatureMax}
                </p>
                <p className="text-red-400">
                  {convertTemperature(day?.values?.temperatureMax)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
