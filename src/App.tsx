import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";
import LandingPageCarousel from "@/features/landingPage/landingPageCarousel";
import DownloadApp from "@/features/landingPage/DownloadApp";
import { Box } from "@/components/ui/box";
import Search from "./components/forms/Search";
import { Button } from "./components/ui/button";
import { useState } from "react";
import Envelop from '@/assets/envelope.svg?react'
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Header />
      <HomeTab className="self-start" />
      <HomeDiscountCard />
      <HowDoesItWork />
      {/* <LandingPageCarousel /> */}
      <DownloadApp />
      <Box className=" grid grid-cols-[60%,40%] gap-20 md:flex md:flex-col bg-[#212121] text-dark-white py-28">
        <div className="flex justify-between  md:flex-col gap-8">
          <div>
            <p className="font-bold text-white mb-4">Company</p>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div>
            <p className="font-bold text-white mb-4">Contact</p>
            <p>Help & Support</p>
            <p>Partner with us </p>
            <p>Ride with us</p>
          </div>
          <div>
            <p className="font-bold text-white mb-4">Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
        <div className=" h-8 ">
          <p className="mb-4 font-bold">FOLLOW US</p>
          <p>Receive exclusive offers in your mailbox</p>
          <div className=" flex gap-2 items-center sm:flex-col sm:items-stretch ">
            <Search
              icon={<Envelop className="fill-secondary" />}
              placeholder="Enter Your email"
              className=" border-[#ADADAD] fill-white   sm:!w-full  bg-[#ADADAD]"
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />

            <Button
              className="m-[2px] bg-primary text-white "
              variant="secondary"
            >
              Find Food
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
