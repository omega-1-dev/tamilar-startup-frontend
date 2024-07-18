import { Router, Route, Routes } from "react-router-dom";
import EventsLayout from "./components/layout/EventsLayout";
import HackthonSection from "./components/sections/HackthonSection";
import MainContent from "./components/sections/MainContent";
function App() {
  const text = "Future Tech AI";
  return (
    <>
      {/* <EventsLayout /> */}
      <Routes>
        <Route
          path="/hackathon"
          element={
            <EventsLayout
              routeName="hackathon"
              heroText="Future Tech AI Summit & Expo 2024"
            />
          }
        />
        <Route
          path="*"
          element={
            <EventsLayout
              routeName="mainContent"
              heroText="Future Tech AI Hackathon 2024"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
