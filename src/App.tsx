import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";

function App() {
  return (
    <>
      <Header />

      <HomeTab className="self-start" />
      <HomeDiscountCard />
      <HowDoesItWork />
    </>
  );
}

export default App;
