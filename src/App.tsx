import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";
import { Button } from "@/components/ui/button";
import MapMarker from "@/assets/map-marker-alt.svg?react";
import ArrowRight from "@/assets/ArrowRight.svg?react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image from "@/assets/Frame 40.jpg";

//w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
function App() {
  return (
    <>
      <Header />
      <HomeTab className="self-start" />
      <HomeDiscountCard />
      <HowDoesItWork />

      <div className="m-auto flex justify-center  ">
        <Carousel className="w-full max-w-6xl 2xl:max-w-[40rem] lg:max-w-[20rem] md:!w-[300px] sm:!w-[150px] ">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 2xl:basis-1/3 lg:!basis-full  "
              >
                {/* was editing here */}
                <div className="w-[200px] md:w-[70%] md:mx-[-18px] sm:w-[50%] gap-2 flex flex-col">
                  <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="bg-cover  overflow-hidden w-full h-[200px]  rounded-md"
                  ></div>
                  <p className="font-bold">Cheese Burger</p>
                  <div className="text-primary flex items-center gap-2">
                    <MapMarker className="fill-primary" />
                    <p>Burger Arena</p>
                  </div>
                  <p className="font-bold">$3.88</p>

                  <Button
                    className="m-[2px] p-4 w-full bg-secondary font-bold text-white shadow-secondary"
                    variant="default"
                  >
                    Order Now
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none"> </CarouselPrevious>
          <CarouselNext className="border-none"> </CarouselNext>
        </Carousel>
      </div>
    </>
  );
}

export default App;
