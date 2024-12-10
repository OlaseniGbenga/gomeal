import Plate from "@/assets/plate.svg?react";
import Bag from "@/assets/handBag.svg?react";
import Bike from "@/assets/bike2.svg?react";
import { motion } from "framer-motion";

import useIsSmallScreen from "@/features/foodOrder/hooks/useIsSmallScreen";

function Order() {
  const isSmallScreen = useIsSmallScreen();

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
      {!isSmallScreen && (
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
      )}

      {isSmallScreen && (
        <div className="flex flex-col gap-2 mt-2 ">
          {order.map(({ type, action, icon }) => {
            return (
              <div
                className="flex items-center gap-4 bg-primary p-4 rounded-lg "
                key={type}
              >
                {icon}
                <div>
                  <p className="font-bold text-[18px]">{type}</p>
                  <p>{action}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Order;
