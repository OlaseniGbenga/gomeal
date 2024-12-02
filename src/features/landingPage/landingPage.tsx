import Header from "@/components/layout/header";
import HomeTab from "@/features/landingPage/components/ui/hometab";
import HomeDiscountCard from "@/features/landingPage/homeDiscountCard";
import HowDoesItWork from "@/features/landingPage/howDoesItWork";
import LandingPageCarousel from "@/features/landingPage/landingPageCarousel";
import DownloadApp from "@/features/landingPage/DownloadApp";
import Footer from "@/components/layout/footer";

function LandingPage(){
return(
    <><Header />
    <HomeTab className="self-start" />
    <HomeDiscountCard />
    <HowDoesItWork />
    <LandingPageCarousel />
    <DownloadApp />
    <Footer />
    
    </>
)
}

export default LandingPage;