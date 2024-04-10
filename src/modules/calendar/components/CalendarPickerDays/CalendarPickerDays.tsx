import { FC } from "react";
import { CalendarPickerDaysProps } from "@modules/calendar/types/CalendarPickerDaysProps.ts";

export const CalendarPickerDays: FC<CalendarPickerDaysProps> = ({
  day,
}: CalendarPickerDaysProps) => {
  return <div className="calendar-day-header">{day}</div>;
};
