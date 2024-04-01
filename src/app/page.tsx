import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@tremor/react";
import { SunIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 border-4 bg-blue-300 border-black min-h-screen p-3 overflow-hidden">
      <div className="header text-white text-center"></div>
      <Header>
        <h1 className="text-4xl drop-shadow-md">Charlotte</h1>
      </Header>
      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
