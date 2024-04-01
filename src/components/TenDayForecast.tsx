import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import TenDayItem from "./ui/TenDayItem";

export default function TenDayForecast() {
  return (
    <Card className="">
      <CardHeader>
        <h1>10 Day Forecast</h1>
      </CardHeader>
      <CardContent className="">
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
          <TenDayItem />
      </CardContent>
    </Card>
  );
}
