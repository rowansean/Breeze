import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@tremor/react";
import { SunIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b from-[#FFF385] to-[#4182FF] to-70% h-screen w-screen p-3 overflow-x-hidden">
      <Header className="mt-20">
        <h1 className="text-4xl drop-shadow-lg">Charlotte</h1>
      </Header>
      <div className="flex flex-col items-center w-screen">
        <h1 className="text-8xl text-white drop-shadow-lg my-5">67°</h1>
        <p className="text-3xl text-white drop-shadow-lg">Sunny</p>
        <div className="flex gap-3">
          <p className="text-white drop-shadow-lg">High 70°</p>
          <p className="text-white drop-shadow-lg">Low 45°</p>
        </div>
      </div>

      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
