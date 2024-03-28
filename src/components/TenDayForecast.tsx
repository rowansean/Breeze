import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function TenDayForecast() {
  return (
    <Card className="">
      <CardHeader>
        <h1>10 Day Forecast</h1>
      </CardHeader>
      <CardContent className="">
        <ul>
          <li>Day 1</li>
          <li>Day 2</li>
          <li>Day 3</li>
          <li>Day 4</li>
        </ul>
      </CardContent>
    </Card>
  );
}
