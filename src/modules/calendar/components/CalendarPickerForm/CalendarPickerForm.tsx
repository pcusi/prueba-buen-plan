import { FC } from "react";
import { CalendarPickerFormProps } from "@modules/calendar/types/CalendarPickerFormProps.ts";

export const CalendarPickerForm: FC<CalendarPickerFormProps> = ({
  reminder,
  handleInputChange,
  handleAddReminder,
  cleanReminder,
}: CalendarPickerFormProps) => {
  return (
    <div className="flex flex-col justify-between gap-4 p-5">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">
          {reminder.id !== "" ? "Editar Recordatorio" : "Agregar Recordatorio"}
        </h1>
        {reminder.id && (
          <button
            className="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={cleanReminder}
          >
            Limpiar
          </button>
        )}
      </div>
      <input
        type="date"
        name="date"
        lang="es"
        className="border p-2 rounded-lg w-full h-14"
        value={reminder.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Escribe una descripción"
        className="border p-2 rounded-lg w-full h-14"
        value={reminder.content}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Escribe una ciudad"
        className="border p-2 rounded-lg w-full h-14"
        value={reminder.city}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddReminder}
        className="p-4 bg-blue-500 text-white rounded-lg disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={
          reminder.date === "" ||
          reminder.content === "" ||
          reminder.city === ""
        }
      >
        {reminder.id !== "" ? "Editar" : "Agregar"}
      </button>
    </div>
  );
};
