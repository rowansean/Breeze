import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import TenDayItem from "./ui/TenDayItem";

export default function TenDayForecast() {
  return (
    <Card className="over overflow-scroll">
      <CardHeader>
        <h1>10 Day Forecast</h1>
      </CardHeader>
      <CardContent className="">
          <TenDayItem condition="sunny" temp={70} day="Mon" />
          <TenDayItem condition="sunny" temp={70} day="Tue" />
          <TenDayItem condition="cloudy" temp={70} day="Wed" />
          <TenDayItem condition="rainy" temp={70} day="Thu" />
          <TenDayItem condition="sunny" temp={70} day="Fri" />
          <TenDayItem condition="cloudy" temp={70} day="Sat" />
          <TenDayItem condition="rainy" temp={70} day="Sun" />
          <TenDayItem condition="sunny" temp={70}  day="Mon" />
          <TenDayItem condition="cloudy" temp={70} day="Tue" />
          <TenDayItem condition="rainy" temp={70} day="Wed" />
      </CardContent>
    </Card>
  );
}
