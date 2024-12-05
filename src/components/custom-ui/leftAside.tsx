import Logo from "@/assets/Logo.svg?react";
import FoodOrder from "@/assets/foodOrder.svg?react";
import Message from "@/assets/message.svg?react";
import Favorite from "@/assets/favorite.svg?react";
import History from "@/assets/history.svg?react";
import Bill from "@/assets/Bill.svg?react";
import Setting from "@/assets/setting.svg?react";
import { Button } from "@/components/ui/button";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import PageMenu from "./pageMenu";
function LeftAside() {
  return (
    <>
      <div className="bg-white md:bg-yellow-600    w-[200px] h-screen md:h-auto  flex flex-col gap-8  items-center py-8 px-2">
        <Logo className="w-[150px] bg-white rounded-sm p-2" />

        <PageMenu className="flex md:hidden"/>
      </div>
    </>
  );
}

export default LeftAside;