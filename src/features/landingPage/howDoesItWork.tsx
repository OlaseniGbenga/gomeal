import Marker from "@/assets/Group.svg?react";
import Order from "@/assets/Icons.svg?react";
import Pay from "@/assets/Icons (3).svg?react";
import Meal from "@/assets/Icons (4).svg?react";
import { Box } from "@/components/ui/box";

function HowDoesItWork() {
  return (
    <>
      <Box className=" m-auto gap-8 p-8 flex flex-col  items-center bg-gradient-to-b from-[#ffefe6] to-white">
        
        <p className="font-bold text-pink text-[28px]">How does it work</p>
        <div className="flex  items-center justify-center gap-8 flex-wrap">
          <div className=" flex  flex-col items-center w-[250px] text-center gap-4">
            <div className="">
              <Marker className="fill-primary w-full" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-bold">Choose order</p>
              <p className="text-ash">
                Check over hundreds of menus to pick your favorite food.
              </p>
            </div>
          </div>
          <div className=" flex  flex-col items-center w-[250px] text-center gap-4">
            <div className=" ">
              <Order className="fill-primary w-full " />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold">Select location</p>
              <p className="text-ash">
                Choose the location where your food will be delivered.
              </p>
            </div>
          </div>

          <div className=" flex  flex-col items-center w-[250px] text-center gap-4">
            <div className=" ">
              <Pay className="fill-primary w-full " />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold">Pay advanced</p>
              <p className="text-ash">
                It's quick, safe, and simple. Select several methods of payment.
              </p>
            </div>
          </div>

          <div className=" flex  flex-col items-center w-[250px] text-center gap-4">
            <div className=" ">
              <Meal className="fill-primary w-full " />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold">Enjoy meal</p>
              <p className="text-ash">
                Food is made and delivered directly to your home.{" "}
              </p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default HowDoesItWork;
