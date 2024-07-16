import AppLayout from "./AppLayout";
import Hero from "../sections/Hero";
import MainContent from "../sections/MainContent";
import HackthonSection from "../sections/HackthonSection";

export default function (props) {
  return (
    <AppLayout>
      <Hero />
      {/* {props === "mainContent" ? <MainContent /> : <HackthonSection />} */}
      <HackthonSection />
      {/* //  <MainContent /> */}
    </AppLayout>
  );
}
