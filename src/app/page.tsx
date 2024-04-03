import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import TodaySummary from "@/components/TodaySummary";

async function getCurrentWeather(location: string) {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${process.env.API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "Error fetching weather data");
  }
}

async function getForecast(location: string) {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${process.env.API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    const dailyForecast = data.timelines.daily;
    return dailyForecast;
  } catch (error) {
    console.error(error, "Error fetching weather data");
  }
}

export default async function Home() {
  const location = "Charlotte"
  const currentWeather = await getCurrentWeather(location);
  const forecast = await getForecast(location);


  return (
    <div className="flex flex-col gap-5 md:max-w-[600px] w-full">
      <Header>
        <h1 className="text-4xl drop-shadow-md">
          {currentWeather?.location?.name}
        </h1>
      </Header>
      <TodaySummary weather={currentWeather} />
      <HourlyForecast />
      <TenDayForecast forecast={forecast} />
    </div>
  );
}
