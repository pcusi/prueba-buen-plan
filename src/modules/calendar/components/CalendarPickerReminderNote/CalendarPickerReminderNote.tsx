import { FC } from "react";
import { CalendarPickerReminderNoteProps } from "@modules/calendar/types/CalendarPickerReminderNoteProps.ts";
export const CalendarPickerReminderNote: FC<
  CalendarPickerReminderNoteProps
> = ({ getReminder, reminder }: CalendarPickerReminderNoteProps) => {
  return (
    <div
      className="text-xs px-3 rounded-sm bg-blue-200 font-bold text-wrap text-ellipsis cursor-pointer"
      onClick={() => getReminder(reminder)}
    >
      {reminder.content}
    </div>
  );
};
