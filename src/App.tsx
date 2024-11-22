import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";
import { Button } from "@/components/ui/button";
import MapMarker from "@/assets/map-marker-alt.svg?react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image from "@/assets/Frame 40.jpg";
function App() {
  return (
    <>
      <Header />
      <HomeTab className="self-start" />
      <HomeDiscountCard />
      <HowDoesItWork />
      <div className=" p-8">
        <div className="w-[283px] gap-2 flex flex-col">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-cover  overflow-hidden w-full h-[283px]  rounded-md"
          ></div>
          <p className="font-bold">Cheese Burger</p>
          <div className="text-primary flex items-center gap-2">
            <MapMarker className="fill-primary" />
            <p>Burger Arena</p>
          </div>
          <p className="font-bold">$3.88</p>

          <Button
            className="m-[2px] p-6 w-full bg-secondary font-bold text-white shadow-secondary"
            variant="default"
          >
            Order Now
          </Button>
        </div>
      </div>

      <Carousel className="  bg-red-600">
      <CarouselPrevious />
        <CarouselContent className="">
          <CarouselItem >...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
       
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
