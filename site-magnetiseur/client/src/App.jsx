import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";

import SingleError from "./components/SingleError";
import {
  ErrorPage,
  Home,
  SeanceADistance,
  Temoignages,
  Tarifs,
  Contact
} from "./pages";
import Magnetisme from "./pages/Magnetisme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <SingleError />
      },
      {
        path: "magnetisme",
        element: <Magnetisme />
      },
      {
        path: "seanceADistance",
        element: <SeanceADistance />
      },
      {
        path: "temoignages",
        element: <Temoignages />
      },
      {
        path: "tarifs",
        element: <Tarifs />
      },
      {
        path: "contact",
        element: <Contact />
      },

      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
