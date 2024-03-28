import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@tremor/react";
import { SunIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 border-4 bg-blue-300 border-black min-h-screen p-3">
      <div className="header text-white text-center">
        <h1 className="text-4xl drop-shadow-md">Charlotte</h1>
        <p className="text-8xl drop-shadow-md">67*</p>
      </div>

      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
