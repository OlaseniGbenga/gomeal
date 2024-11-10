import "./App.css";
import { Button } from "./components/ui/button";
import Search from "./components/forms/Search";
import { useState } from "react";
import SomeIcon from "./assets/user.svg?react";
import Logo from "./assets/Logo.svg?react";
import MapMarker from "./assets/map-marker-alt.svg?react";
import SearchIcon from "./assets/Search.svg?react";
import Hamburger from "./assets/burger-menu-svgrepo-com.svg?react";
import { Box } from "./components/ui/box";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlecurrentLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(e.target.value);
  };
  return (
    <>
      <Box className="flex justify-between ">
        <div className="2xl:h-[40px] w-full flex justify-between 2xl:flex-col 2xl:items-start gap-y-2  items-center  overflow-hidden ">
          <div className="h-[38px]">
            <Logo />
          </div>
          <div className="2xl:flex-col 2xl:items-start gap-y-2 flex items-center">
            <p className="font-bold text-[18px] ">Deliver to:</p>

            <Search
              icon={<MapMarker />}
              placeholder="Current Location"
              className="w-[180px] border-white "
              searchTerm={currentLocation}
              handleSearchChange={handlecurrentLocation}
            />
            <p className="font-bold text-[18px]">
              Mohammadpur Bus Stand, Dhaka
            </p>
          </div>
          <div className="2xl:flex-col flex gap-2">
            <Search
              icon={<SearchIcon />}
              placeholder="Search Food"
              className="placeholder:font-bold border-white placeholder:text-black w-[150px]"
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
            <Button
              className="m-[2px]"
              left={true}
              variant="default"
              icon={<SomeIcon />}
            >
              Login
            </Button>
          </div>
        </div>

        <div className="h-[38px] hidden 2xl:inline-block">
       
          <Hamburger  className="cursor-pointer"/>
        </div>
      </Box>
    </>
  );
}

export default App;
