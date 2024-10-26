import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import Page1 from "../views/page-1/Main";
import Page2 from "../views/page-2/Main";
import Login from "../views/Login";
import Register from "../views/Register";
import Error404 from "../views/page-1/error-404/Error404";

import FirstPartial from "../components-app/templates/classes-content/FirstPartial";
import SecondPartial from "../components-app/templates/classes-content/SecondPartial";
import FinalExam from "../components-app/templates/classes-content/FinalExam";

import FirstPartialDictionary from "../components-app/templates/dictionaries/FirstPartialDictionary";
import SecondPartialDictionary from "../components-app/templates/dictionaries/SecondPartialDictionary";
import FinalExamDictionary from "../components-app/templates/dictionaries/FinalExamDictionary";

function Router() {
  const routes = [
    {
      path: "microeconomia_project/",
      element: <SideMenu />,
      children: [
        {
          path: "microeconomia_project/",
          element: <Page1 />,
        },
        {
          path: "microeconomia_project/portafolio/first-partial",
          element: <FirstPartial />,
        },
        {
          path: "microeconomia_project/portafolio/second-partial",
          element: <SecondPartial />,
        },
        {
          path: "microeconomia_project/portafolio/final-exam",
          element: <FinalExam />,
        },

        {
          path: "microeconomia_project/glossaries",
          element: <Page2 />,
        },
        {
          path: "microeconomia_project/glossaries/first-partial",
          element: <FirstPartialDictionary />,
        },
        {
          path: "microeconomia_project/glossaries/second-partial",
          element: <SecondPartialDictionary />,
        },
        {
          path: "microeconomia_project/glossaries/final-exam",
          element: <FinalExamDictionary />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
