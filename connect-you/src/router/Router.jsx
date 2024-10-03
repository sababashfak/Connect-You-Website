import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Event from "../pages/event/Event";


const router = createBrowserRouter ([
    {
      path: "/",
      element: <Main/> ,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/event",
          element: <Event/>
        }
    ]
    },
  ]);

  export default router; 