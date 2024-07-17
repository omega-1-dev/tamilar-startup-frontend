import { Router, Route, Routes } from "react-router-dom";
import EventsLayout from "./components/layout/EventsLayout";
import HackthonSection from "./components/sections/HackthonSection";
import MainContent from "./components/sections/MainContent";
function App() {
  return (
    <>
      {/* <EventsLayout /> */}
      <Routes>
        <Route path="/hackathon" element={<EventsLayout props="hackathon" />} />
        <Route path="*" element={<EventsLayout props="mainContent" />} />
      </Routes>
    </>
  );
}

export default App;
