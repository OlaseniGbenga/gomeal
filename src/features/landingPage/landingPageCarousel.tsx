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

function LandingPageCarousel() {
  return (
    <>
      <div className="m-auto flex justify-center py-16 ">
        <Carousel className="w-full max-w-6xl 2xl:max-w-[40rem] lg:max-w-[20rem] md:!w-[300px] ">
          <CarouselContent  className="w-full max-w-6xl 2xl:max-w-[40rem] lg:max-w-[20rem] md:!w-[300px] ">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 2xl:basis-1/3 lg:!basis-full   "
              >
                {/* was editing here */}
                <div className="  w-[200px] md:w-[70%] md:mx-[-18px] sm:w-[50%] vsm:w-[200px] gap-2 flex flex-col">
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

export default LandingPageCarousel;
