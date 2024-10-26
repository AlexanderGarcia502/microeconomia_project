import { BrowserRouter, useRoutes } from "react-router-dom";
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
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Page1 />,
        },
        {
          path: "/portafolio/first-partial",
          element: <FirstPartial />,
        },
        {
          path: "/portafolio/second-partial",
          element: <SecondPartial />,
        },
        {
          path: "/portafolio/final-exam",
          element: <FinalExam />,
        },

        {
          path: "/glossaries",
          element: <Page2 />,
        },
        {
          path: "/glossaries/first-partial",
          element: <FirstPartialDictionary />,
        },
        {
          path: "/glossaries/second-partial",
          element: <SecondPartialDictionary />,
        },
        {
          path: "/glossaries/final-exam",
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
      element: <Page1 />,
    },
  ];

  return useRoutes(routes)
  
}

export default Router;
