import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import TodaySummary from "@/components/TodaySummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, Tracker } from "@tremor/react";
import { SunIcon, SunriseIcon, SunsetIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b from-[#FFF385] via-[#4182FF] via-50% to-[#4182FF] to-100% p-3 overflow-x-hidden">
      <Header className="mt-20">
        <h1 className="text-4xl drop-shadow-md">Charlotte</h1>
      </Header>
      <TodaySummary />
      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
