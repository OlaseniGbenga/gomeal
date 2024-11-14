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
//hooks
import { useState } from "react";

function HomeTab() {
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
    <Tabs>
      <TabsList>
        <TabsTrigger
          onClick={() => {
            handleTabTrigger(1);
          }}
          isActive={active === 1}
        >
          <Bike
            className={`${active === 1 ? "fill-[#F17228]" : "fill-[#757575]"}`}
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
            className={`${active === 2 ? "fill-[#F17228]" : "fill-[#757575]"}`}
          />
          <p>Delivery</p>
        </TabsTrigger>
      </TabsList>

      <TabsContent isActive={active === 1}>
        <div className="p-4 flex gap-2 items-center">
          <Search
            icon={<MapMarker className="fill-[#FF7474]" />}
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
            className="m-[2px] bg-gradient-primary text-red-600 "
            left={true}
            variant="secondary"
            icon={<SearchIcon className="fill-white " />}
          >
            Find Food
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default HomeTab;
