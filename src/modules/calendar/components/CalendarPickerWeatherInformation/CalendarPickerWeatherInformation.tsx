import { FC } from "react";
import { CalendarPickerWeatherInformationProps } from "@modules/calendar/types/CalendarPickerWeatherInformationProps.ts";

export const CalendarPickerWeatherInformation: FC<
  CalendarPickerWeatherInformationProps
> = ({ weather }: CalendarPickerWeatherInformationProps) => {
  return (
    weather && (
      <div className="p-5 flex flex-col justify-center gap-10 bg-gray-100 rounded-lg mx-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-center font-bold">
            {weather.resolvedAddress.split(", ")[0]}
          </h1>
          <p className="text-4xl text-center font-bold">
            {weather.days[0].temp}°
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold">Pronóstico de hoy</p>
          <p className="text-xs">{weather.days[0].description}</p>
        </div>
      </div>
    )
  );
};
