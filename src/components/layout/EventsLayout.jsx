import AppLayout from "./AppLayout";
import Hero from "../sections/Hero";
import MainContent from "../sections/MainContent";
import HackthonSection from "../sections/HackthonSection";
import Sidebar from "../nav/Sidebar";

export default function ({ routeName }) {
  let heroText = "";
  let link ="";
  if (routeName === "mainContent") {
    heroText = "Future Tech AI ";
    link = "https://rzp.io/l/FTASE"
  } else {
    heroText = "Future Tech AI";
    link = "https://forms.gle/usCSaXfGN6hGxm9B9"
  }
  return (
    <AppLayout>
      <Hero text={heroText} regLink={link} />
      {routeName === "mainContent" ? <MainContent /> : <HackthonSection />}
    </AppLayout>
  );
}
