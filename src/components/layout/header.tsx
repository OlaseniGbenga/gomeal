//componenet
import { Button } from "@/components/ui/button";
import Search from "@/components/forms/Search";
import { Box } from "@/components/ui/box";
//react
import { useEffect, useState } from "react";
//Asset
import SomeIcon from "@/assets/user.svg?react";
import Logo from "@/assets/Logo.svg?react";
import MapMarker from "@/assets/map-marker-alt.svg?react";
import SearchIcon from "@/assets/Search.svg?react";
import Hamburger from "@/assets/burger-menu-svgrepo-com.svg?react";
//framer
//import { motion } from "framer-motion";

function Header() {
  console.log(1)
  const [searchTerm, setSearchTerm] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlecurrentLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(e.target.value);
  };

  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isToggled) {
      htmlElement.style.overflowY = "hidden";
    } else {
      htmlElement.style.overflowY = "";
    }

    return () => {
      htmlElement.style.overflowY = "";
    };
  }, [isToggled]);

  const toggleHeight = () => {
    setIsToggled(!isToggled);
  };
  //m-auto max-w-[1366px] justify-between  px-[100px]  md:px-[50px] sm:px-[20px]  w-full
  return (
    <>
      <Box className="w-full  z-10  top-0 bg-white left-[50%]   translate-x-[-50%]   fixed flex justify-between flex-col overflow-hidden ">
        <div className="justify-between w-full  overflow-hidden flex    ">
          <div className=" py-8 w-full flex justify-between  2xl:flex-col 2xl:items-start gap-y-2 items-center ">
            <div className=" h-[38px] mr-12">
              <Logo />
            </div>

            <div className=" 2xl:hidden  w-full flex justify-between">
              <div className="2xl:flex-col 2xl:items-start gap-y-2 flex items-center">
                <p className="font-bold text-[18px] ">Deliver to:</p>

                <Search
                  icon={<MapMarker className="fill-primary" />}
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
                  icon={<SearchIcon className="fill-primary" />}
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
          </div>

          <div className=" h-[38px] hidden 2xl:inline-block py-8">
            <Hamburger onClick={toggleHeight} className="cursor-pointer" />
          </div>
        </div>
        <div
          className={`w-full h-screen bordert-solid border-primary  border-t-2 pt-8 ${
            isToggled ? "2xl:flex 2xl:flex-col" : "hidden"
          }`}
        >
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
              Mohammadpur  Stand, Dhaka
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
              className="m-[2px] w-[150px]"
              left={true}
              variant="default"
              icon={<SomeIcon />}
            >
              Login
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Header;