import { CalendarPickerDays } from "@modules/calendar/components/CalendarPickerDays/CalendarPickerDays.tsx";
import { CalendarPickerForm } from "@modules/calendar/components/CalendarPickerForm/CalendarPickerForm.tsx";
import { CalendarPickerWeatherInformation } from "@modules/calendar/components/CalendarPickerWeatherInformation/CalendarPickerWeatherInformation.tsx";
import { useCalendarReminder } from "@hooks/useCalendarReminder.tsx";
import { UseCalendarReminderProps } from "@hooks/types/UseCalendarReminderProps.ts";

export const CalendarPickerReminder = () => {
  const {
    cleanReminder,
    currentDate,
    handleAddReminder,
    handleInputChange,
    generateMonthDays,
    globalDays,
    reminder,
    weatherInformation,
  }: UseCalendarReminderProps = useCalendarReminder();

  return (
    <div className="grid h-screen lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-3">
        <CalendarPickerForm
          handleAddReminder={handleAddReminder}
          handleInputChange={handleInputChange}
          reminder={reminder}
          cleanReminder={cleanReminder}
        />
        <CalendarPickerWeatherInformation weather={weatherInformation} />
      </div>
      <div className="col-span-12 lg:col-span-9 px-5 pt-4">
        <div className="calendar mx-auto w-full">
          <div className="calendar-header flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-center w-full">
              {currentDate.toLocaleString("es", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </h2>
          </div>
          <div className="flex flex-col  w-full">
            <div className="flex flex-row w-full justify-between">
              {globalDays.map((day: string) => (
                <CalendarPickerDays day={day} key={day} />
              ))}
            </div>
            <div className="grid grid-cols-7">{generateMonthDays()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
