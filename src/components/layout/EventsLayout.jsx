import AppLayout from "./AppLayout";
import Hero from "../sections/Hero";
import MainContent from "../sections/MainContent";

export default function (props) {
  return (
    <AppLayout>
      <Hero />
      <MainContent />
    </AppLayout>
  );
}
