import { Outlet } from "react-router-dom";
import Setting from "@/assets/setting.svg?react";
import LeftAside from "@/components/custom-ui/leftAside";
import Notification from "@/assets/notification.svg?react";
import Chat from "@/assets/chat.svg?react";
import Background from "@/assets/background.svg";
function Protected() {
  return (
    <>
      <div className="flex max-w-[1366px] m-auto">
        <LeftAside />
        <Outlet />

        <div className="bg-white  w-[350px] h-screen  flex flex-col gap-8 px-4  py-8">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <Chat className="fill-black w-6" />
              <Notification className="fill-black w-6" />
              <Setting className="fill-black w-6" />
            </div>
            <div className="bg-black h-8 w-8 rounded-[8px]"></div>
          </div>
          <div>
            <p className="font-bold">Your Balance</p>
            <div
              style={{ backgroundImage: `url(${Background})` }}
              className="h-[100px] w-full bg-black rounded-[10px] overflow-hidden bg-cover flex items-center p-4"
            >
              <div className="bg-white p-2 rounded-[10px]">
                <p>Balance</p>
                <p className="font-bold text-[1.5rem]">$12.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Protected;
