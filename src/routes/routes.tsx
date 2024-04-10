import { createBrowserRouter } from "react-router-dom";
import { CalendarModule } from "@modules/calendar/CalendarModule.tsx";
import { RootModule } from "@modules/root/RootModule.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootModule />,
    children: [
      {
        path: "calendar",
        element: <CalendarModule />,
      },
    ],
  },
]);

export default router;
