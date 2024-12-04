import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";


import Error from "@/pages/errorPage";
import Protected from "@/components/layout/protected";
import FoodOrder from "@/pages/foodOrder";
import Favorite from "@/pages/favorite";
import Message from "@/pages/message";
import Bills from "@/pages/bills";
import Settings from "@/pages/setting";
import OrderHistory from "@/pages/orderHistory";
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
        path: "bills",
        element: <Bills />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
    ],
  },
]);

export default router;
