import { createBrowserRouter } from "react-router";
import App from "./App";
import MainLayout from "./main-layout";
import CarMusc from "./pages/car-musc";
import Lunza from "./pages/lunza";
import Nikey from "./pages/nikey";
import Drivich from "./pages/drivich";
import Eternal from "./pages/eternal";
import Todos from "./pages/todos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "lunza", element: <Lunza /> },
      { path: "nikey", element: <Nikey /> },
      { path: "drivich", element: <Drivich /> },
      { path: "eternal", element: <Eternal /> },
      { path: "todos", element: <Todos /> },
      { path: "carmusc", element: <CarMusc /> },
    ],
  },
]);
