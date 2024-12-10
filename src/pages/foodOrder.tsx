import Order from "@/features/foodOrder/components/order";

function FoodOrder() {
  return (
    <>
      <div className="bg-primary  w-full min-h-screen p-8">
        <div className="bg-[#00000030] p-6 rounded-lg w-[400px] sm:w-auto">
          <p className="font-bold text-[22px] mb-6">
            What would you like Gbenga?
          </p>
          <Order />
        </div>
      </div>
    </>
  );
}

export default FoodOrder;
