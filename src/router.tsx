import { createBrowserRouter } from "react-router";
import App from "./App";
import MainLayout from "./main-layout";
import Lunza from "./pages/Lunza";
import Nikey from "./pages/Nikey";
import Drivich from "./pages/Drivich";
import Eternal from "./pages/Eternal";
import Todos from "./pages/Todos";
import CarMusc from "./pages/CarMussc";

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
