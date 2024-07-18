import AppLayout from "./AppLayout";
import Hero from "../sections/Hero";
import MainContent from "../sections/MainContent";
import HackthonSection from "../sections/HackthonSection";

export default function ({ routeName }) {
  let heroText = "";

  if (routeName === "mainContent") {
    heroText = "Future Tech AI ";
  } else {
    heroText = "Future Tech AI ";
  }
  return (
    <AppLayout>
      <Hero text={heroText} />
      {routeName === "mainContent" ? <MainContent /> : <HackthonSection />}
    </AppLayout>
  );
}
