import { Outlet } from "react-router-dom";
import LeftAside from "@/components/custom-ui/leftAside";
import RightAside from "@/components/custom-ui/RightAside";

function Protected() {
  return (
    <>
      <div className="h-0 overflow-hidden md:h-auto md:flex flex-col max-w-[1366px] m-auto bg-yellow-600  bg-white">
        <div className="md:flex justify-between">
          <LeftAside />
          <RightAside />
        </div>

        <Outlet />
      </div>

      <div className=" md:hidden flex  max-w-[1366px] m-auto  bg-white">
        <LeftAside />
        <Outlet />
        <RightAside />
      </div>
    </>
  );
}

export default Protected;
