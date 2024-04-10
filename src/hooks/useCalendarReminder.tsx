import { ChangeEvent, useState } from "react";
import { Reminder } from "@modules/calendar/types/Reminder.ts";
import { VisualCrossingWeather } from "@modules/calendar/types/VisualCrossingWeather.ts";
import axios from "axios";
import { environment } from "@environment/environment.ts";
import { CalendarPickerReminderNote } from "@modules/calendar/components/CalendarPickerReminderNote/CalendarPickerReminderNote.tsx";
import { v4 } from "uuid";
import { UseCalendarReminderProps } from "@hooks/types/UseCalendarReminderProps.ts";

export const useCalendarReminder = (): UseCalendarReminderProps => {
  const globalDays: string[] = [
    "Lun",
    "Mar",
    "Mié",
    "Jue",
    "Vie",
    "Sáb",
    "Dom",
  ];
  const [currentDate, _] = useState<Date>(new Date());
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [newReminder, setNewReminder] = useState<Reminder>({
    date: "",
    city: "",
    content: "",
    id: "",
  });
  const [weatherInformation, setWeatherInformation] = useState<
    VisualCrossingWeather | undefined
  >(undefined);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const getReminder = async (reminder: Reminder) => {
    setNewReminder(reminder);

    const { data } = await axios.get(
      `${environment.apiUrl
        .replace("DATE_ACTUAL", reminder.date)
        .replace("CITY", reminder.city)}`,
    );

    if (data) {
      setWeatherInformation(data);
    }
  };

  const generateMonthDays = (): JSX.Element[] => {
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth();
    const daysInMonth: number = getDaysInMonth(year, month);
    const firstDayOfMonth: number = getFirstDayOfMonth(year, month);

    const days: JSX.Element[] = [];
    for (let i: number = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="flex justify-center items-center w-full h-40 border"
        ></div>,
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dayReminders = reminders.filter((reminder) => {
        const reminderDate = new Date(reminder.date);
        return (
          reminderDate.getFullYear() === year &&
          reminderDate.getMonth() === month &&
          reminderDate.getDate() === i
        );
      });

      const reminderContent = dayReminders
        .map((reminder, index) => (
          <CalendarPickerReminderNote
            reminder={reminder}
            key={`reminder-${index}`}
            getReminder={getReminder}
          />
        ))
        .slice(0, 4);

      days.push(
        <div
          key={`day-${i}`}
          className="flex flex-col justify-center items-center w-full h-40 relative border"
        >
          <span className="text-xs w-full text-center absolute left-0 top-0">
            {i}
          </span>
          {reminderContent.length > 0 && (
            <div className="relative h-full w-full mt-5">
              <div className="absolute w-full top-0 left-0">
                <div className="flex flex-col gap-2 cursor-pointer">
                  {reminderContent}
                </div>
              </div>
            </div>
          )}
          {reminderContent.length > 3 && (
            <p className="cursor-pointer text-xs">Ver más recordatorios</p>
          )}
        </div>,
      );
    }

    return days;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setNewReminder({
      ...newReminder,
      [name]: value,
    });
  };

  const handleAddReminder = async (): Promise<void> => {
    const reminderIndex = reminders.findIndex(
      (reminder) => reminder.id === newReminder.id,
    );

    if (reminderIndex !== -1) {
      const updatedReminders = [...reminders];
      updatedReminders[reminderIndex] = newReminder;

      setReminders(updatedReminders);
      cleanReminder();
    } else {
      setReminders([...reminders, { ...newReminder, id: v4() }]);
      cleanReminder();
    }
  };

  const cleanReminder = () => {
    setNewReminder({
      date: "",
      content: "",
      city: "",
      id: "",
    });
    setWeatherInformation(undefined);
  };

  return {
    cleanReminder,
    currentDate,
    globalDays,
    generateMonthDays,
    handleAddReminder,
    handleInputChange,
    reminder: newReminder,
    weatherInformation,
  };
};
