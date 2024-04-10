import { Reminder } from "@modules/calendar/types/Reminder.ts";
import { ChangeEvent } from "react";

export type CalendarPickerFormProps = {
  reminder: Reminder;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddReminder: () => void;
  cleanReminder: () => void;
};
