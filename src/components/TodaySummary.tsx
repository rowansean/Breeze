import { RealtimeWeatherResponse, WeatherForecastResponse } from "@/types";
import { SunIcon, SunriseIcon, SunsetIcon } from "lucide-react";
import weatherCodes from "@/static/weatherCodes.json";


export default function TodaySummary({
  weather,
  forecast
}: {
  weather: RealtimeWeatherResponse;
  forecast: WeatherForecastResponse;
}) {

  const weatherCode = weather.data.values.weatherCode;
  const weatherSummaryPhrase = weatherCodes[weatherCode].phrase;


  return (
    <div className="">
      <h1 className="text-8xl text-white drop-shadow-lg my-5 text-center ml-8">
        {weather.data.values.temperature.toFixed(0)}°
      </h1>

      <div className="flex flex-col items-center font-light mb-5">
        <div className="flex gap-1">
          <SunIcon className="drop-shadow-lg text-yellow-300" />
          <p className=" text-white drop-shadow-lg">
            {weatherSummaryPhrase}
          </p>
        </div>
        <p className="text-white drop-shadow-lg">High {}° | Low 45°</p>
        <div className="flex text-white drop-shadow-lg">
          <SunriseIcon size={20} />
          <p>6:30 AM</p>
          <p className="mx-4">|</p>
          <SunsetIcon size={20} />
          <p>8:30 PM</p>
        </div>
      </div>

    </div>
  );
}
