import clsx from "clsx";
import FoodOrder from "@/assets/foodOrder.svg?react";
import Message from "@/assets/message.svg?react";
import Favorite from "@/assets/favorite.svg?react";
import History from "@/assets/history.svg?react";
import Bill from "@/assets/Bill.svg?react";
import Setting from "@/assets/setting.svg?react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";


function PageMenu({className}:{className?:string;}) {
  return (
    <>
      <div className={clsx("flex flex-col gap-4 1xl:gap-[0px]",className)}>
        <NavLink to="food-order">
          {({ isActive }:{isActive:Boolean}) => {
            return (
              <Button
                className={clsx(
                  "bg-white text-ash shadow-none justify-start w-full ",
                  {
                    "bg-primary text-white shadow-none justify-start": isActive,
                  }
                )}
                variant="default"
                left={true}
                icon={
                  <FoodOrder className={isActive ? "fill-white" : "fill-ash"} />
                }
              >
                Food order
              </Button>
            );
          }}
        </NavLink>

        <NavLink to="favorite">
          {({ isActive }:{isActive:Boolean}) => {
            return (
              <Button
                className={clsx(
                  "bg-white text-ash shadow-none justify-start w-full ",
                  {
                    "bg-primary text-white shadow-none justify-start": isActive,
                  }
                )}
                variant="default"
                left={true}
                icon={
                  <Favorite className={isActive ? "fill-white" : "fill-ash"} />
                }
              >
                Menu
              </Button>
            );
          }}
        </NavLink>

        <NavLink to="message">
          {({ isActive }:{isActive:Boolean}) => {
            return (
              <Button
                className={clsx(
                  "bg-white text-ash shadow-none justify-start w-full ",
                  {
                    "bg-primary text-white shadow-none justify-start": isActive,
                  }
                )}
                variant="default"
                left={true}
                icon={
                  <Message className={isActive ? "fill-white" : "fill-ash"} />
                }
              >
                Offers
              </Button>
            );
          }}
        </NavLink>

        <NavLink to="order-history">
          {({ isActive }:{isActive:Boolean}) => {
            return (
              <Button
                className={clsx(
                  "bg-white text-ash shadow-none justify-start w-full ",
                  {
                    "bg-primary text-white shadow-none justify-start": isActive,
                  }
                )}
                variant="default"
                left={true}
                icon={
                  <History className={isActive ? "fill-white" : "fill-ash"} />
                }
              >
              OrderHistory
              </Button>
            );
          }}
        </NavLink>

        <NavLink to="bills">
          {({ isActive }:{isActive:Boolean}) => {
            return (
              <Button
                className={clsx(
                  "bg-white text-ash shadow-none justify-start w-full ",
                  {
                    "bg-primary text-white shadow-none justify-start": isActive,
                  }
                )}
                variant="default"
                left={true}
                icon={
                  <Setting className={isActive ? "fill-white" : "fill-ash"} />
                }
              >
                Career
              </Button>
            );
          }}
        </NavLink>

        <NavLink to="setting">
          {({ isActive }:{isActive:Boolean}) => {
            return (
              <Button
                className={clsx(
                  "bg-white text-ash shadow-none justify-start w-full ",
                  {
                    "bg-primary text-white shadow-none justify-start": isActive,
                  }
                )}
                variant="default"
                left={true}
                icon={<Bill className={isActive ? "fill-white" : "fill-ash"} />}
              >
                News
              </Button>
            );
          }}
        </NavLink>
      </div>
    </>
  );
}


export default PageMenu;