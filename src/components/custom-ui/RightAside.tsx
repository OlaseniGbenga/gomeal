import Setting from "@/assets/setting.svg?react";

import Notification from "@/assets/notification.svg?react";
import Chat from "@/assets/chat.svg?react";
import Background from "@/assets/background.svg";
import TopUp from "@/assets/Income.svg?react";
import Transfer from "@/assets/Profit.svg?react";
import MenuIcon from "@/assets/burger-menu-svgrepo-com.svg?react";
import { Button } from "../ui/button";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import PageMenu from "./pageMenu";

function RightAside() {
  return (
    <>
      <div className="px-2 pt-8">
        <Menubar className="hidden 1xl:flex ">
          <MenubarMenu>
            <MenubarTrigger className=" p-0">
              <MenuIcon className="" />
              {/* Display 'File' when open, hamburger when closed */}
            </MenubarTrigger>
            <MenubarContent className="hidden 1xl:flex 1xl:flex-col mr-2 ">
              <MenubarItem>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Chat className="fill-black w-6" />
                    <Notification className="fill-black w-6" />
                    <Setting className="fill-black w-6" />
                  </div>
                  <div className="bg-black h-8 w-8 rounded-[8px]"></div>
                </div>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <div className=" ">
                  <p className="font-bold">Coming soon</p>
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
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <div>
                  <p className="font-bold">Actions</p>
                  <div className="flex flex-col justify-between gap-2">
                    <Button className="border-solid border-primary border-[1px] shadow-none">
                      Payment method
                    </Button>
                    <Button className="border-solid border-primary border-[1px] shadow-none">
                      Send Feedback
                    </Button>
                    <Button className="border-solid border-primary border-[1px] shadow-none">
                      Sign out
                    </Button>
                  </div>
                </div>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className=" hidden md:inline-block">
                <PageMenu />
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="1xl:hidden bg-white  w-[400px] h-screen  flex flex-col gap-8 px-4  py-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Chat className="fill-black w-6" />
            <Notification className="fill-black w-6" />
            <Setting className="fill-black w-6" />
          </div>
          <div className="bg-black h-8 w-8 rounded-[8px]"></div>
        </div>
        <div>
          <p className="font-bold">Coming soon</p>
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
          <p className="font-bold">Actions</p>
          <div className="flex flex-col justify-between gap-2">
            <Button className="border-solid border-primary border-[1px] shadow-none">
              Payment method
            </Button>
            <Button className="border-solid border-primary border-[1px] shadow-none">
              Send Feedback
            </Button>
            <Button className="border-solid border-primary border-[1px] shadow-none">
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightAside;
