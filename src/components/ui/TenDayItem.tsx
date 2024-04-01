import { SunIcon, CloudSun, CloudRain, CircleHelp } from 'lucide-react';
import React from 'react'

export default function TenDayItem({ condition, temp }: { condition: string, temp: number}) {

    const iconMap: { [key: string]: JSX.Element } = {
        sunny: <SunIcon className="text-yellow-300 drop" />,
        cloudy: <CloudSun className="text-gray-300 drop" />,
        rainy: <CloudRain className="text-blue-300 drop" />,
        default: <CircleHelp className="text-gray-300 drop" />,
        // Add more conditions as needed
      };

    const WeatherIconRender = iconMap[condition] || iconMap.default;

  return (
    <div className='border p-2 flex items-center text-right'>
        <h1>Monday</h1>
        <div className='text-lg m-3'>{WeatherIconRender}</div>
        <p>70°</p>
    </div>
  )
}
