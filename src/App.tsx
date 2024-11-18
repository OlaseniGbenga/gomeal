import "./App.css";
import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import Food from "@/assets/ImageBase.png";
import Image1 from "@/assets/Image2.jpg";
import { Box } from "./components/ui/box";
import DiscountCard from "@/features/landingPage/components/ui/discountCard";
function App() {
  const cardData = [
    {
      image: Image1,
      discount: 15,
      productName: "Greys Vage",
      daysRemaining: 7,
    },
    {
      image: Image1,
      discount: 20,
      productName: "Luxe Collection",
      daysRemaining: 5,
    },
    {
      image: Image1,
      discount: 30,
      productName: "Summer Sale",
      daysRemaining: 3,
    },
  ];
  return (
    <>
      <Header />

      <HomeTab className="self-start" />
      <div className="flex flex-wrap justify-center gap-4 py-12">
      {cardData.map((card) => {
        return <DiscountCard {...card} />;
      })}

      </div>

      
    </>
  );
}

export default App;
