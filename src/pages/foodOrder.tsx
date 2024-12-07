import Plate from "@/assets/plate.svg?react";
import Bag from "@/assets/handBag.svg?react";
import Bike from "@/assets/bike2.svg?react";

function FoodOrder() {
  return (
    <>
      <div className="bg-yellow-600  w-full h-screen">
        <div className="bg-red-600 p-6">
          <p className="font-bold">What would you like Gbenga?</p>
          <div className="flex flex-col  ">
            <div className="flex ">
              <Plate className="" />
              <div>
                <p>Dine-in Pickup</p>
                <p>Order is served in restaurant</p>
              </div>
            </div>

            <div className="flex">
              <Bag />
              <div>
                <p>Takeout</p>
                <p>Order is packed for outside</p>
              </div>
            </div>

            <div className="flex">
              <Bike />
              <div>
                <p>Delivery</p>
                <p>Order is delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodOrder;
