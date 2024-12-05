import { Outlet } from "react-router-dom";
import LeftAside from "@/components/custom-ui/leftAside";
import RightAside from "@/components/custom-ui/RightAside";

function Protected() {
  return (
    <>
      <div className="flex max-w-[1366px] m-auto">
        <LeftAside />
        <Outlet />
        <RightAside />
      </div>
    </>
  );
}

export default Protected;
