import { Reminder } from "@modules/calendar/types/Reminder.ts";
import { VisualCrossingWeather } from "@modules/calendar/types/VisualCrossingWeather.ts";
import { ChangeEvent } from "react";

export type UseCalendarReminderProps = {
  reminder: Reminder;
  weatherInformation: VisualCrossingWeather | undefined;
  generateMonthDays: () => JSX.Element[];
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddReminder: () => void;
  currentDate: Date;
  globalDays: string[];
  cleanReminder: () => void;
};
