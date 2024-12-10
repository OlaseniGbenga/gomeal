import Logo from "@/assets/Logo.svg?react";

import PageMenu from "./pageMenu";
function LeftAside() {
  return (
    <>
      <div className="bg-white md:bg-yellow-600    w-[200px] h-screen md:h-auto  flex flex-col gap-8  items-center py-8 px-2">
        <Logo className="w-[150px] bg-white rounded-sm p-2" />

        <PageMenu className="flex md:hidden"/>
      </div>
    </>
  );
}

export default LeftAside;