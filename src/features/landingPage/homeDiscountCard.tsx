import { cardData } from "@/features/landingPage/lib/constant";

import DiscountCard from "@/features/landingPage/components/ui/discountCard";
function HomeDiscountCard() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 py-12">
        {cardData.map((card) => {
          return <DiscountCard {...card} />;
        })}
      </div>
    </>
  );
}

export default HomeDiscountCard;
