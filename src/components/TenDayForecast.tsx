"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Switch } from "@/components/ui/switch";
import { SunIcon, CloudRainIcon, CloudIcon, CloudSunIcon } from "lucide-react";

export default function TenDayForecast() {
  const [unit, setUnit] = useState("F");
  // Sample data for 10 days
  const forecastData = [
    {
      day: "Monday",
      icon: CloudIcon,
      highTemp: 80,
      lowTemp: 65,
      windSpeed: "10 mph",
      description: "Cloudy",
    },
    {
      day: "Tuesday",
      icon: CloudRainIcon,
      highTemp: 70,
      lowTemp: 60,
      windSpeed: "15 mph",
      description: "Rain",
    },
    {
      day: "Wednesday",
      icon: SunIcon,
      highTemp: 75,
      lowTemp: 62,
      windSpeed: "8 mph",
      description: "Sunny",
    },
    {
      day: "Thursday",
      icon: CloudSunIcon,
      highTemp: 78,
      lowTemp: 63,
      windSpeed: "12 mph",
      description: "Partly Cloudy",
    },
    {
      day: "Friday",
      icon: CloudRainIcon,
      highTemp: 68,
      lowTemp: 58,
      windSpeed: "18 mph",
      description: "Rain",
    },
    {
      day: "Saturday",
      icon: SunIcon,
      highTemp: 82,
      lowTemp: 67,
      windSpeed: "6 mph",
      description: "Sunny",
    },
    {
      day: "Sunday",
      icon: SunIcon,
      highTemp: 85,
      lowTemp: 70,
      windSpeed: "5 mph",
      description: "Sunny",
    },
    {
      day: "Monday",
      icon: CloudIcon,
      highTemp: 79,
      lowTemp: 64,
      windSpeed: "10 mph",
      description: "Partly Cloudy",
    },
    {
      day: "Tuesday",
      icon: CloudRainIcon,
      highTemp: 72,
      lowTemp: 61,
      windSpeed: "14 mph",
      description: "Rain",
    },
    {
      day: "Wednesday",
      icon: CloudSunIcon,
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
    return unit === "F"
      ? `${temp}°F`
      : `${Math.round(((temp - 32) * 5) / 9)}°C`;
  };

  return (
    <Card className="over overflow-scroll">
      <CardHeader className="flex flex-row justify-between">
        <h1>10 Day Forecast</h1>
        <div className="flex flex-row space-x-2">
          F°
          <Switch className="mx-2" onCheckedChange={toggleUnit} />
          C°
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          {forecastData.map((day, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{day.day}</p>
                <p className="text-sm text-slate-300">{day.windSpeed}</p>
              </div>
              <day.icon className="mx-4" />
              <div className="text-right">
                <p className="text-blue-400">
                  {convertTemperature(day.lowTemp)}
                </p>
                <p className="text-red-400">
                  {convertTemperature(day.highTemp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
