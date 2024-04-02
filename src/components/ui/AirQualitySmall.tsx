import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { CategoryBar } from "@tremor/react";

export default function AirQualitySmall() {
  return (
    <Card>
      <CardHeader>Air Quality</CardHeader>
      <CardContent className="border">
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={["emerald", "yellow", "orange", "rose"]}
          markerValue={62}
          className="mt-3"
        />
      </CardContent>
    </Card>
  );
}
