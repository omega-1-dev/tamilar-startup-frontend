import AppLayout from "./AppLayout";
import Hero from "../sections/Hero";
import MainContent from "../sections/MainContent";
import HackthonSection from "../sections/HackthonSection";
import SummitSVG from "../../assets/svg_components/Herosvg/summit";
import HackathonSVG from "../../assets/svg_components/Herosvg/hackathon";
import Sidebar from "../nav/Sidebar";

export default function ({ routeName }) {
  let heroText = "";
  let link = "";
  let svg = null;
  if (routeName === "mainContent") {
    heroText = "Future Tech AI ";
    link = "https://rzp.io/l/FTASE";
    svg = <SummitSVG className={`my-10 w-screen px-2 lg:w-2/3`} />;
  } else {
    heroText = "Future Tech AI";
    link = "https://forms.gle/usCSaXfGN6hGxm9B9";
    svg = <HackathonSVG className={`my-10 w-screen px-2 lg:w-2/3`} />;
  }
  return (
    <AppLayout>
      <Hero text={heroText} regLink={link} svg={svg} />
      {routeName === "mainContent" ? <MainContent /> : <HackthonSection />}
    </AppLayout>
  );
}
