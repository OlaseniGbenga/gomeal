import Logo from "@/assets/Logo.svg?react";
import FoodOrder from "@/assets/foodOrder.svg?react";
import Message from "@/assets/message.svg?react";
import Favorite from "@/assets/favorite.svg?react";
import History from "@/assets/history.svg?react";
import Bill from "@/assets/Bill.svg?react";
import Setting from "@/assets/setting.svg?react";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

function Protected(){
    return(<>

<div className="flex max-w-[1366px] m-auto">
      <div className="bg-white   w-[200px] h-screen  flex flex-col gap-8  items-center py-8">
          <Logo className="w-[150px]" />

          <div className="flex flex-col gap-4">
            <Button
              className="bg-primary text-white shadow-none justify-start"
              variant="default"
              left={true}
              icon={<FoodOrder className="fill-white" />}
            >
              Food order
            </Button>

            <Button
              className="bg-primary text-white shadow-none justify-start"
              variant="default"
              left={true}
              icon={<Favorite className="fill-white" />}
            >
              <p>Favorite</p>
            </Button>

            <Button
              className="bg-primary text-white shadow-none justify-start"
              variant="default"
              left={true}
              icon={<Message className="fill-white" />}
            >
              <p>Message</p>
            </Button>

            <Button
              className="bg-primary text-white shadow-none justify-start"
              variant="default"
              left={true}
              icon={<History className="fill-white" />}
            >
              <p>Order History</p>
            </Button>

            <Button
              className="bg-primary text-white shadow-none justify-start"
              variant="default"
              left={true}
              icon={<Bill className="fill-white" />}
            >
              <p>Bill</p>
            </Button>

            <Button
              className="bg-primary text-white shadow-none justify-start"
              variant="default"
              left={true}
              icon={<Setting className="fill-white" />}
            >
              <p>Sitting</p>
            </Button>
          </div>
        </div>
        <Outlet/>

        <div className="bg-white  w-[300px] h-screen  flex flex-col gap-8  items-center py-8">
         <div>
          <div>
            <Setting className="fill-black"/>
          </div>
         </div>

       
        </div>
      </div>
    </>)
}

export default Protected;