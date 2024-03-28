import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { SunIcon } from 'lucide-react'

export default function HourlyForecast() {
  return (
    <Card className="">
    <CardHeader>
      <h1>Hourly Forecast</h1>
    </CardHeader>
    <CardContent className="">
      <div className="hourly-scrollable flex gap-8 w-screen">
        <div className="hourly-item">
          <p>Time</p>
          <SunIcon />
          <p>Temp</p>
        </div>
        <div className="hourly-item">
          <p>Time</p>
          <SunIcon />
          <p>Temp</p>
        </div>
        <div className="hourly-item">
          <p>Time</p>
          <SunIcon />
          <p>Temp</p>
        </div>
        <div className="hourly-item">
          <p>Time</p>
          <SunIcon />
          <p>Temp</p>
        </div>
      </div>
    </CardContent>
  </Card>

  )
}
