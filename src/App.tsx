import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";
import LandingPageCarousel from "@/features/landingPage/landingPageCarousel";
import DailyDiscount from "@/assets/1.svg?react";
import LiveTracing from "@/assets/2.svg?react";
import QuickDelivery from "@/assets/3.svg?react";
import HL from "@/assets/HR.svg?react";
import { Box } from "./components/ui/box";

function App() {
  return (
    <>
      <Header />
      <HomeTab className="self-start" />
      <HomeDiscountCard />
      <HowDoesItWork />
      <LandingPageCarousel />
      <Box className="bg-[#FEEFD0] m-auto ">
        <div className="flex justify-between rounded-[20px] md:flex-col overflow-hidden items-center justify-self-center w-[600px] md:w-auto p-6  bg-white">
          <DailyDiscount className="w-[150px] " />
          <HL className="md:rotate-90" />
          <LiveTracing className="w-[150px]" />
          <HL className="md:rotate-90" />
          <QuickDelivery className="w-[150px]" />
        </div>

        <div className="flex md:flex-col">
          <div>

          </div>
          <div>

          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
