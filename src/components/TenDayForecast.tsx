"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Switch } from "@/components/ui/switch";
import { SunIcon, CloudSun, CloudRain, CircleHelp } from "lucide-react";

const iconMap: { [key: string]: JSX.Element } = {
  sunny: <SunIcon className="text-yellow-300 drop" />,
  cloudy: <CloudSun className="text-gray-300 drop" />,
  rainy: <CloudRain className="text-blue-300 drop" />,
  default: <CircleHelp className="text-gray-300 drop" />,
};

export default function TenDayForecast({forecast} : { forecast?: any }) {

  const [unit, setUnit] = useState("C");


  // Sample data for 10 days
  const forecastData = [
    {
      day: "Monday",
      icon: "cloudy",
      highTemp: 80,
      lowTemp: 65,
      windSpeed: "10 mph",
      description: "Cloudy",
    },
    {
      day: "Tuesday",
      icon: "rainy",
      highTemp: 70,
      lowTemp: 60,
      windSpeed: "15 mph",
      description: "Rain",
    },
    {
      day: "Wednesday",
      icon: "sunny",
      highTemp: 75,
      lowTemp: 62,
      windSpeed: "8 mph",
      description: "Sunny",
    },
    {
      day: "Thursday",
      icon: "cloudy",
      highTemp: 78,
      lowTemp: 63,
      windSpeed: "12 mph",
      description: "Partly Cloudy",
    },
    {
      day: "Friday",
      icon: "rainy",
      highTemp: 68,
      lowTemp: 58,
      windSpeed: "18 mph",
      description: "Rain",
    },
    {
      day: "Saturday",
      icon: "sunny",
      highTemp: 82,
      lowTemp: 67,
      windSpeed: "6 mph",
      description: "Sunny",
    },
    {
      day: "Sunday",
      icon: "sunny",
      highTemp: 85,
      lowTemp: 70,
      windSpeed: "5 mph",
      description: "Sunny",
    },
    {
      day: "Monday",
      icon: "cloudy",
      highTemp: 79,
      lowTemp: 64,
      windSpeed: "10 mph",
      description: "Partly Cloudy",
    },
    {
      day: "Tuesday",
      icon: "rainy",
      highTemp: 72,
      lowTemp: 61,
      windSpeed: "14 mph",
      description: "Rain",
    },
    {
      day: "Wednesday",
      icon: "cloudy",
      highTemp: 77,
      lowTemp: 63,
      windSpeed: "9 mph",
      description: "Partly Cloudy",
    },
  ];

  const toggleUnit = () => {
    setUnit(unit === "F" ? "C" : "F");
  };

  const convertTemperature = (temp: number) => {
    return unit === "F" ? `${Math.round(((temp * 9) / 5) + 32)}°F`: `${temp}°C`;
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
          {forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{day?.time}</p>
                <div className="flex items-center">
                  <p className="text-sm text-slate-300 mr-1">
                    {day?.values.windSpeedAvg} mph
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wind"
                  >
                    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                  </svg>
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