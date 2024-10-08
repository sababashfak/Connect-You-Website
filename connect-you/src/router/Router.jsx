import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Event from "../pages/event/Event";
import UpcomingEvent from "../pages/event/UpcomingEvent";
import PastEvents from "../pages/event/PastEvents";
import Reunion from "../pages/event/Reunion";
import Music from "../pages/event/Music";
import Fest from "../pages/event/Fest";
import Expo from "../pages/event/Expo";
import Seminar from "../pages/event/Seminar";
import Skill from "../pages/event/Skill";


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
        ,
        {
          path: "/reunion",
          element: <Reunion/>
        },
        {
          path: "/music",
          element: <Music/>
        },
        {
          path: "/fest",
          element: <Fest/>
        },
        
        {
          path: "/expo",
          element: <Expo/>
        },
        {
          path: "/seminar",
          element: <Seminar/>
        },
        {
          path: "/skill",
          element: <Skill/>
        }
    ]
    },
  ]);

  export default router; 