export interface RealtimeWeatherResponse {
  data: {
    time: string;
    values: {
      temperature: number;
      weatherCode: string;
    };
  };
  location: {
    lat: number;
    lon: number;
    name: string;
    type: string;
  };
}

export interface WeatherForecastResponse {
  location?: {
    lat: number;
    lon: number;
    name: string;
    type: string;
  };
  timelines?: {
    hourly: [];
    minutely: [];
    daily: [];
  };
}

export interface WeatherCodes {
  [key: string]: {
    phrase: string;
    icon: string;
  } | string;
}
