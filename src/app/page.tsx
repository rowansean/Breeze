import Image from "next/image";
import { Card } from '@tremor/react';

export default function Home() {
  return (
    <div className="b border-4 border-black min-h-screen p-3">
      <h1>Charlotte</h1>
      <p>67*</p>
      <Card className="bg-white">
        <h1>Hourly Forecast</h1>
        <ul>
          <li>12:00 PM: 67*</li>
          <li>1:00 PM: 67*</li>
          <li>2:00 PM: 67*</li>
        </ul>
      </Card>
    </div>
  );
}
