import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import TodaySummary from "@/components/TodaySummary";
import { RealtimeWeatherResponse, WeatherForecastResponse } from "@/types";

async function getRealtimeWeather(location: string) {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${process.env.API_KEY}`
    );

    const data: RealtimeWeatherResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error, "Error fetching Realtime weather data");
  }
}

async function getWeatherForecast(location: string) {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${process.env.API_KEY}`
    );

    const data: WeatherForecastResponse = await response.json();
    const dailyForecast = data.timelines?.daily;
    return dailyForecast;
  } catch (error) {
    console.error(error, "Error fetching Forecast data");
  }
}

export default async function Home() {
  const location = "Charlotte";
  const realtimeWeather = await getRealtimeWeather(location);
  const weatherForecast = await getWeatherForecast(location);

  return (
    <div className="flex flex-col gap-5 md:max-w-[600px] w-full">
      <Header>
        <h1 className="text-4xl drop-shadow-md">
          {realtimeWeather?.location.name}
        </h1>
      </Header>
      <TodaySummary weather={realtimeWeather!} forecast={weatherForecast!} />
      <HourlyForecast />
      <TenDayForecast forecast={weatherForecast} />
    </div>
  );
}
