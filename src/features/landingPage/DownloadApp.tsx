
import DailyDiscount from "@/assets/1.svg?react";
import LiveTracing from "@/assets/2.svg?react";
import QuickDelivery from "@/assets/3.svg?react";
import HL from "@/assets/HR.svg?react";

import PhonePng from "@/assets/phone.png";

import Download from "@/assets/Button.svg?react";
import { Box } from "@/components/ui/box";

function DownloadApp(){
    return(
        <>
        <Box className="bg-[#FEEFD0] mx-auto  pt-16">
        <div className="flex justify-between rounded-[20px] md:flex-col overflow-hidden items-center justify-self-center w-[800px] md:w-auto p-6   bg-white">
          <DailyDiscount className="w-[150px] " />
          <HL className="md:rotate-90" />
          <LiveTracing className="w-[150px]" />
          <HL className="md:rotate-90" />
          <QuickDelivery className="w-[150px]" />
        </div>

        <div className="flex md:flex-col-reverse justify-self-center">
          <div className="w-[400px] vsm:w-[200px]">
            <img className="w-full" src={PhonePng} />
          </div>
          <div className="w-[400px] vsm:w-[200px] sm:justify-items-center vsm:text-center overflow-hidden mt-24 px-4">
            <p className="text-primary font-bold text-[34px]">
              Install the app
            </p>
            <p className="text-ash sm:text-center">
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
            <Download className="w-[300px] vsm:w-[200px] -translate-x-6 -translate-y-4" />
          </div>
        </div>
      </Box>
        </>
    )
}

export default DownloadApp;