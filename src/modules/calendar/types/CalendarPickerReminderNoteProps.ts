import { Reminder } from "@modules/calendar/types/Reminder.ts";

export type CalendarPickerReminderNoteProps = {
  getReminder: (reminder: Reminder) => void;
  reminder: Reminder;
};
