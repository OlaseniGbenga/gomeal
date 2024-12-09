import Plate from "@/assets/plate.svg?react";
import Bag from "@/assets/handBag.svg?react";
import Bike from "@/assets/bike2.svg?react";
import { motion } from "framer-motion";

function FoodOrder() {
  // const childVariants = {
  //   initail: { scale: 1 },
  //   animate: { scale: 1.2 },
  // };

  // variants={{
  //   hidden: {},
  //   visible: { scale: 1.2 },
  // }}
  return (
    <>
      <div className="bg-primary  w-full h-screen p-8">
        <div className="bg-[#00000030] p-6 rounded-lg w-[400px]">
          <p className="font-bold text-[22px] mb-6">
            What would you like Gbenga?
          </p>
          <div className="flex flex-col gap-2  ">
            <motion.div className="flex items-center gap-4 bg-primary p-4 rounded-lg">
              <Plate className="w-12" />
              <div>
                <p className="font-bold text-[18px]">Dine-in Pickup</p>
                <p>Order is served in restaurant</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-4  bg-primary p-4 rounded-lg">
              <Bag className="w-12" />
              <div>
                <p className="font-bold text-[18px]">Takeout</p>
                <p>Order is packed for outside</p>
              </div>
            </div>

            <motion.div
              variants={{
                initial: { scale: 1 },
                animate: { scale: 1.1 },
              }}
              initial="initial"
              whileHover="animate"
              exit="initial"
              className="flex items-center gap-4 bg-primary p-4 rounded-lg"
            >
              <Bike className="w-12" />
              <div>
                <p className="font-bold text-[18px]">Delivery</p>

                <motion.p
                
                  variants={{
                    initial: { opacity: 0, x: -20 , display:"none"},
                    animate: { opacity: 1, x: 0,display:"block" },
                  }}
                >
                  Order is delivery
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodOrder;
