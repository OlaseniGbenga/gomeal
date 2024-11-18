//ui
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/customTab";
import { Button } from "@/components/ui/button";

import Search from "@/components/forms/Search";
//asset
import MapMarker from "@/assets/map-marker-alt.svg?react";
import SearchIcon from "@/assets/Search.svg?react";
import Bike from "@/assets/Bike.svg?react";
import Food from "@/assets/ImageBase.png";
//hooks
import { useState } from "react";

function HomeTab({ className }: { className?: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const [active, setActive] = useState(1);

  const handleTabTrigger = (num: number) => {
    setActive(num);
    console.log(num);
  };

  return (
    <div
      className="mt-[122px] bg-primary px-[100px] md:px-[50px] sm:px-[20px] vsm:px-[10px]  py-[100px] m-auto max-w-[1366px] bg-no-repeat  bg-[length:340px_300px] bg-[position:calc(100%-100px)_bottom] md:bg-[position:calc(100%-50px)_bottom] sm:bg-[position:calc(100%-20px)_bottom]"
      style={{ backgroundImage: `url(${Food})` }}
    >
      <div className=" flex h-fit overflow-hidden justify-between">
        <div>
          <p className=" font-bold text-[50px] text-white">Are you starving?</p>
          <p className="mb-4 text-white">
            Within a few clicks, find meals that are accessible near you
          </p>
          <Tabs className={className}>
            <TabsList>
              <TabsTrigger
                onClick={() => {
                  handleTabTrigger(1);
                }}
                isActive={active === 1}
              >
                <Bike
                  className={`${
                    active === 1 ? "fill-[#F17228]" : "fill-[#757575]"
                  }`}
                />
                <p>Delivery</p>
              </TabsTrigger>

              <TabsTrigger
                onClick={() => {
                  handleTabTrigger(2);
                }}
                isActive={active === 2}
              >
                <Bike
                  className={`${
                    active === 2 ? "fill-[#F17228]" : "fill-[#757575]"
                  }`}
                />
                <p>Delivery</p>
              </TabsTrigger>
            </TabsList>

            <TabsContent isActive={active === 1}>
              <div className="p-4 sm:px-2 flex gap-2 items-center sm:flex-col sm:items-stretch">
                <Search
                  icon={<MapMarker className="fill-[#FF7474]" />}
                  placeholder="Search Food"
                  className=" border-white fill-white  w-[350px] sm:!w-full md:w-[200px]  bg-[#F5F5F5]"
                  searchTerm={searchTerm}
                  handleSearchChange={handleSearchChange}
                />

                <Button
                  className="m-[2px] bg-gradient-primary text-white "
                  left={true}
                  variant="secondary"
                  icon={<SearchIcon className="fill-white " />}
                >
                  Find Food
                </Button>
              </div>
            </TabsContent>

            <TabsContent isActive={active === 2}>
              <div className="p-4 flex gap-2 items-center">
                <Search
                  icon={<MapMarker className="fill-red-600" />}
                  placeholder="Search Food"
                  className=" border-white fill-white  w-[700px]  bg-[#F5F5F5]"
                  searchTerm={searchTerm}
                  handleSearchChange={handleSearchChange}
                />

                <Button
                  className="m-[2px] bg-gradient-primary text-white "
                  left={true}
                  variant="secondary"
                  icon={<SearchIcon className="fill-white " />}
                >
                  Find Food
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default HomeTab;
