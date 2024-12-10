import Plate from "@/assets/plate.svg?react";
import Bag from "@/assets/handBag.svg?react";
import Bike from "@/assets/bike2.svg?react";
import { motion } from "framer-motion";

function FoodOrder() {
  const order = [
    {
      type: "Dine-in Pickup",
      action: "Order is served in restaurant",
      icon: <Plate className="w-12" />,
    },
    {
      type: "Takeout",
      action: "Order is packed for outside",
      icon: <Bag className="w-12" />,
    },
    {
      type: "Delivery",
      action: "Order is delivery",
      icon: <Bike className="w-12" />,
    },
  ];

  return (
    <>
      <div className="bg-primary  w-full h-screen p-8">
        <div className="bg-[#00000030] p-6 rounded-lg w-[400px]">
          <p className="font-bold text-[22px] mb-6">
            What would you like Gbenga?
          </p>
          <div className="flex flex-col gap-2  ">
            {order.map(({ type, action, icon }) => {
              return (
                <motion.div
                  initial="initial"
                  whileHover="animate"
                  exit="initial"
                  className="flex items-center gap-4 bg-primary p-4 rounded-lg md:motion-reduce:animate-none"
                  key={type}
                >
                  {icon}
                  <div>
                    <p className="font-bold text-[18px]">{type}</p>
                    <motion.p
                      variants={{
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                      }}
                      transition={{ duration: 0.1, ease: "easeIn" }}
                      className="motion-reduce:animate-none"
                    >
                      {action}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodOrder;
