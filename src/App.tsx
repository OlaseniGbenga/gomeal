import Food from "@/assets/ImageBase.png";
import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/hometab";

import { Box } from "./components/ui/box";
function App() {
  return (
    <>
      <Header />

      <div
        className="mt-[122px] bg-primary px-[100px] md:px-[50px] sm:px-[20px]  py-[100px] m-auto max-w-[1366px] bg-no-repeat  bg-[length:340px_300px] bg-[position:calc(100%-100px)_bottom] md:bg-[position:calc(100%-50px)_bottom] sm:bg-[position:calc(100%-20px)_bottom]"
        style={{ backgroundImage: `url(${Food})` }} // Dynamically set the background image
      >
      
        <div className=" flex h-fit overflow-hidden justify-between">
          <div>
            <p className=" font-bold text-[50px] text-white">
              Are you starving?
            </p>
            <p className="mb-4">
              Within a few clicks, find meals that are accessible near you
            </p>
            <HomeTab className="self-start" />
          </div>
          {/* <img src={Food} className="w-[340px] h-[300px] " alt="Bowl of noodles and egg" /> */}
        </div>
      </div>
    </>
  );
}

export default App;
