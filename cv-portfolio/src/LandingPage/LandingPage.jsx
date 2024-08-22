import BigWords from "../BigWords";
import ExperiencePage from "../ExperiencePage";
import Footer from "../Footer";
import HeroPage from "../HeroPage";
import NavBar from "../NavBar";
import TechnologiesUsed from "../TechnologiesUsed";

const LandingPage = () => {
  return (
    <div  className="text-white h-screen px-10 justify-center">
        <NavBar />
        <HeroPage />
        <ExperiencePage />
        <BigWords />
        <TechnologiesUsed />
        <Footer />
    </div>
  );
};

export default LandingPage;
