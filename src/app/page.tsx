import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import TodaySummary from "@/components/TodaySummary";
import AirQualitySmall from "@/components/ui/AirQualitySmall";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 overflow-x-hidden">
      <Header className="">
        <h1 className="text-4xl drop-shadow-md">Charlotte</h1>
      </Header>
      <TodaySummary />
      <HourlyForecast />
      <AirQualitySmall />
      <TenDayForecast />
    </div>
  );
}
