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
function LeftAside() {
  return (
    <>
      <div className="bg-white   w-[200px] h-screen  flex flex-col gap-8  items-center py-8">
        <Logo className="w-[150px]" />

        <div className="flex flex-col gap-4">
          <NavLink to="food-order">
            {({ isActive }) => {
              return (
                <Button
                  className={clsx(
                    "bg-white text-ash shadow-none justify-start w-full ",
                    {
                      "bg-primary text-white shadow-none justify-start":
                        isActive,
                    }
                  )}
                  variant="default"
                  left={true}
                  icon={
                    <FoodOrder
                      className={isActive ? "fill-white" : "fill-ash"}
                    />
                  }
                >
                  Food order
                </Button>
              );
            }}
          </NavLink>

          <NavLink to="favorite">
            {({ isActive }) => {
              return (
                <Button
                  className={clsx(
                    "bg-white text-ash shadow-none justify-start w-full ",
                    {
                      "bg-primary text-white shadow-none justify-start":
                        isActive,
                    }
                  )}
                  variant="default"
                  left={true}
                  icon={
                    <Favorite
                      className={isActive ? "fill-white" : "fill-ash"}
                    />
                  }
                >
                  Favorite
                </Button>
              );
            }}
          </NavLink>

          <NavLink to="message">
            {({ isActive }) => {
              return (
                <Button
                  className={clsx(
                    "bg-white text-ash shadow-none justify-start w-full ",
                    {
                      "bg-primary text-white shadow-none justify-start":
                        isActive,
                    }
                  )}
                  variant="default"
                  left={true}
                  icon={
                    <Message className={isActive ? "fill-white" : "fill-ash"} />
                  }
                >
                  Message
                </Button>
              );
            }}
          </NavLink>

          <NavLink to="order-history">
            {({ isActive }) => {
              return (
                <Button
                  className={clsx(
                    "bg-white text-ash shadow-none justify-start w-full ",
                    {
                      "bg-primary text-white shadow-none justify-start":
                        isActive,
                    }
                  )}
                  variant="default"
                  left={true}
                  icon={
                    <History className={isActive ? "fill-white" : "fill-ash"} />
                  }
                >
                  Order History
                </Button>
              );
            }}
          </NavLink>

          <NavLink to="bills">
            {({ isActive }) => {
              return (
                <Button
                  className={clsx(
                    "bg-white text-ash shadow-none justify-start w-full ",
                    {
                      "bg-primary text-white shadow-none justify-start":
                        isActive,
                    }
                  )}
                  variant="default"
                  left={true}
                  icon={
                    <Bill className={isActive ? "fill-white" : "fill-ash"} />
                  }
                >
                  Bill
                </Button>
              );
            }}
          </NavLink>

          <NavLink to="setting">
            {({ isActive }) => {
              return (
                <Button
                  className={clsx(
                    "bg-white text-ash shadow-none justify-start w-full ",
                    {
                      "bg-primary text-white shadow-none justify-start":
                        isActive,
                    }
                  )}
                  variant="default"
                  left={true}
                  icon={
                    <Setting className={isActive ? "fill-white" : "fill-ash"} />
                  }
                >
                  Setting
                </Button>
              );
            }}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default LeftAside;