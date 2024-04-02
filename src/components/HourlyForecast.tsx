import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { SunIcon } from "lucide-react";
import HourlyItem from "./ui/HourlyItem";

// fetch weather api and display hourly forecast



export default function HourlyForecast() {
  return (
    <Card className="">
      <CardHeader>
        <h1>Hourly Forecast</h1>
      </CardHeader>
      <CardContent className="flex gap-6 overflow-scroll">
        <HourlyItem time="12PM" temp={67} condition="sunny" />
        <HourlyItem time="12PM" temp={67} condition="rainy" />
        <HourlyItem time="12PM" temp={67} condition="sunny" />
        <HourlyItem time="12PM" temp={67} condition="sunny" />
        <HourlyItem time="12PM" temp={67} condition="cloudy"/>
        <HourlyItem time="12PM" temp={67} condition="sunny" />
        <HourlyItem time="12PM" temp={67} condition="sunny" />
        <HourlyItem time="12PM" temp={67} condition="sunny" />
      </CardContent>
    </Card>
  );
}
