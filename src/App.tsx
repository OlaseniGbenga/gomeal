import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";
import LandingPageCarousel from "@/features/landingPage/landingPageCarousel";
import DownloadApp from "@/features/landingPage/DownloadApp";
import { Box } from "@/components/ui/box";

function App() {
  return (
    <>
      <Header />
      <HomeTab className="self-start" />
      <HomeDiscountCard />
      <HowDoesItWork />
      {/* <LandingPageCarousel /> */}
      <DownloadApp />
      <Box className=" grid grid-cols-[60%,40%] gap-20 md:flex md:flex-col bg-[#212121] text-dark-white">
        <div className="flex justify-between  md:flex-col gap-8">
          <div>
            <p className="font-bold text-white mb-4">Company</p>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div>
            <p  className="font-bold text-white mb-4">Contact</p>
            <p>Help & Support</p>
            <p>Partner with us </p>
            <p>Ride with us</p>
          </div>
          <div>
            <p  className="font-bold text-white mb-4">Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
         
        </div>
        <div className=" h-8"> </div>
      </Box>
    </>
  );
}

export default App;
