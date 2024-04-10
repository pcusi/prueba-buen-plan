export type VisualCrossingWeather = {
  resolvedAddress: string;
  timezone: string;
  days: VisualCrossingDaysWeather[];
  description: string;
  tzoffset: -5;
};

type VisualCrossingDaysWeather = {
  description: string;
  datetime: string;
  conditions: string;
  temp: number;
  tempmax: number;
  tempmin: number;
};
