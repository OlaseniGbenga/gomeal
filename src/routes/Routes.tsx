import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";

import Error from "@/pages/errorPage";
import Protected from "@/components/layout/protected";
import FoodOrder from "@/pages/foodOrder";
import Favorite from "@/pages/favorite";
import Message from "@/pages/message";
import Bills from "@/pages/bills";
import Settings from "@/pages/setting";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    
    element: <Protected />,

    children: [
      {
        path: "food-order",
        element: <FoodOrder />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "Bills",
        element: <Bills />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
    ],
  },

  
]);

export default router;
