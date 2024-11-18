import React from 'react';
import { motion } from 'framer-motion';


interface DiscountCardProps {
    image:string;
     discount:number;
      productName:string;
       daysRemaining :number;
  }

// Reusable DiscountCard component
const DiscountCard: React.FC<DiscountCardProps>  = ({ image, discount, productName, daysRemaining }) => {
  return (
    <motion.div
      className="w-[356.91px] sm:w-[300px] vsm:w-[250px] flex flex-col gap-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        delay: 0.1,
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: 'spring', stiffness: 500, damping: 25 },
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-[301px] rounded-md bg-cover flex items-end overflow-hidden"
      >
        <div className="bg-primary flex items-center p-2 pr-4 rounded-tr-[20px] text-white">
          <p className="font-bold text-[45px]">{discount}</p>
          <div className="flex flex-col justify-around gap-0">
            <p className="text-[25px] font-bold leading-none">%</p>
            <p className="leading-none">off</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold">{productName}</p>
        <p className="text-[#F17228] self-start px-2 py-1 rounded-sm bg-[#ffe4d4]">
          {daysRemaining} Days Remaining
        </p>
      </div>
    </motion.div>
  );
};

export default DiscountCard;
