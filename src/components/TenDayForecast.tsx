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
          <TenDayItem condition={""} temp={0} />
          <TenDayItem condition="sunny" temp={70} />
          <TenDayItem condition="cloudy" temp={70} />
          <TenDayItem condition="rainy" temp={70} />
          <TenDayItem condition="sunny" temp={70} />
          <TenDayItem condition="cloudy" temp={70} />
          <TenDayItem condition="rainy" temp={70} />
          <TenDayItem condition="sunny" temp={70} />
          <TenDayItem condition="cloudy" temp={70} />
          <TenDayItem condition="rainy" temp={70} />
      </CardContent>
    </Card>
  );
}
