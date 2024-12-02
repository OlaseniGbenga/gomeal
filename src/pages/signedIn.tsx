import Logo from "@/assets/Logo.svg?react";
import FoodOrder from "@/assets/foodOrder.svg?react";
import Message from "@/assets/message.svg?react";
import Favorite from "@/assets/favorite.svg?react";
import History from "@/assets/history.svg?react";
import Bill from "@/assets/Bill.svg?react";
import Setting from "@/assets/setting.svg?react";
import { Button } from "@/components/ui/button";

function SignedIn() {
  return (
    <>
      <div className="bg-red-600 w-[345px] flex flex-col gap-8 ">
        <Logo />

        <Button
          className="h"
          variant="default"
          left={true}
          icon={<FoodOrder />}
        >
          Food order
        </Button>

        <div className="flex gap-2">
          {" "}
          <Favorite />
          <p>Favorite</p>
        </div>

        <div className="flex gap-2">
          {" "}
          <Message />
          <p>Message</p>
        </div>

        <div className="flex gap-2">
          {" "}
          <History />
          <p>Order History</p>
        </div>

        <div className="flex gap-2">
          {" "}
          <Bill />
          <p>Bill</p>
        </div>

        <div className="flex gap-2">
          {" "}
          <Setting />
          <p>Sitting</p>
        </div>
      </div>
    </>
  );
}
 
export default SignedIn;