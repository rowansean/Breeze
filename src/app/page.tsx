import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import TodaySummary from "@/components/TodaySummary";

async function getWeather() {
  const location = "charlotte";

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

export default async function Home() {
  const weather = await getWeather();

  console.log(weather);

  return (
    <div className="flex flex-col gap-5 md:max-w-[600px] w-full">
      <Header>
        <h1 className="text-4xl drop-shadow-md">{weather?.location.name}</h1>
      </Header>
      <TodaySummary weather={weather} />
      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
