import { Outlet } from "react-router-dom";
import Setting from "@/assets/setting.svg?react";
import LeftAside from "@/components/custom-ui/leftAside";
import Notification from "@/assets/notification.svg?react";
import Chat from "@/assets/chat.svg?react";
import Background from "@/assets/background.svg";
import TopUp from "@/assets/Income.svg?react";
import Transfer from "@/assets/Profit.svg?react";
import Search from "../forms/Search";
import { useState } from "react";
import Location from "@/assets/Location.svg?react";
import { Button } from "../ui/button";
function Protected() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="flex max-w-[1366px] m-auto">
        <LeftAside />
        <Outlet />

        <div className="bg-white  w-[400px] h-screen  flex flex-col gap-8 px-4  py-8">
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
              className="h-[100px] w-full bg-black rounded-[10px] overflow-hidden bg-cover flex items-center justify-between p-4"
            >
              <div className="bg-white p-2 rounded-[10px]">
                <p>Balance</p>
                <p className="font-bold text-[1.5rem]">$12.00</p>
              </div>
              <div className="flex flex-col items-center  ">
                <span className="py-1 px-2  rounded-lg bg-white flex justify-center items-center">
                  <TopUp className="w-6" />
                </span>
                <p className="text-white">Top up</p>
              </div>
              <div className="flex flex-col items-center ">
                <span className="py-1 px-2 rounded-lg bg-white flex justify-center items-center">
                  <Transfer className="w-6" />
                </span>
                <p className="text-white">Transfer</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-ash">Your Address</p>
            <div className="flex justify-between">
              <Search
                icon={<Location />}
                placeholder="Current Location"
                className="w-[180px] border-white placeholder:font-bold placeholder:text-black placeholder:text-[14px]"
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
              />
              <Button className="border-solid border-primary border-[1px] shadow-none">
                Change
              </Button>
            </div>
          </div>

          <div>
            <p className="font-bold">Order Menu</p>
            <div className="flex justify-between">
              <div>
                <img src="" alt="" />
                <div>
                  <p>Pepperoni Pizza </p>
                  <p>x1</p>
                </div>
              </div>

              <p>+$5.59</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Protected;
