import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import TenDayForecast from "@/components/TenDayForecast";
import TodaySummary from "@/components/TodaySummary";

async function getData() {

  const location = "toronto"

  fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${process.env.API_KEY}`)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

}

export default async function Home() {

  const data = await  getData();

  console.log(data);

  return (
    <div className="flex flex-col gap-5 md:max-w-[600px] w-full">
      <Header>
        <h1 className="text-4xl drop-shadow-md">Charlotte</h1>
      </Header>
      <TodaySummary />
      <HourlyForecast />
      <TenDayForecast />
    </div>
  );
}
