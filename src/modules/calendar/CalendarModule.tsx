import { FC } from "react";
import { CalendarPickerReminder } from "@modules/calendar/components/CalendarPickerReminder/CalendarPickerReminder.tsx";

export type CalendarModuleProps = {};

export const CalendarModule: FC<
  CalendarModuleProps
> = ({}: CalendarModuleProps) => {
  return <CalendarPickerReminder />;
};
