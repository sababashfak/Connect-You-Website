import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Event from "../pages/event/Event";
import UpcomingEvent from "../pages/event/UpcomingEvent";
import PastEvents from "../pages/event/PastEvents";


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
        },
        {
          path: "/upcomingEvent",
          element: <UpcomingEvent/>
        },
        {
          path: "/pastEvent",
          element: <PastEvents/>
        }
    ]
    },
  ]);

  export default router; 