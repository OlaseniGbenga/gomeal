import { useState } from "react";

import "./App.css";
import Header from "./components/layout/header";
import HomeTab from "./features/landingPage/components/hometab";
function App() {
 
  return (
    <>
      <Header />
      <div className="mt-[122px] bg-primary p-16">
        <div className="w-[856px]">
       <HomeTab/>
        </div>
      </div>
    </>
  );
}

export default App;
