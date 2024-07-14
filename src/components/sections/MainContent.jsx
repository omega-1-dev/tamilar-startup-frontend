import about from "../../assets/about_event.png";
import CardContainer from "../speakerCardContainer/CardContainer";
import CardData from "../speakerCardContainer/CardData";
import { useState } from "react";
import Reason from "./Reason";
import Timeline from "./Timeline";

export default function MainContent() {
  const [visibleCards, setVisibleCards] = useState(3);
  const handleViewMore = () => {
    setVisibleCards(visibleCards + 3);
  };
  const handleViewLess = () => {
    setVisibleCards(3);
  };

  return (
    <div>
      <div className="flex items-center justify-center lg:flex-row flex-col lg:gap-[4rem] gap-8 lg:pt-[60px] m-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] lg:leading-[64px] text-center">
            800+
          </p>
          <p className="text-[30px] lg:leading-[64px] font-normal text-[#828282]">
            Attendees
          </p>
        </div>

        <div className="hidden lg:block divider"></div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] leading-[64px] text-center">
            45+
          </p>
          <p className="text-[30px] leading-[64px] font-normal text-[#828282] ">
            Speakers
          </p>
        </div>

        <div className="hidden lg:block divider"></div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] leading-[64px] text-center">
            100+
          </p>
          <p className="text-[30px] leading-[64px] font-normal text-[#828282] ">
            AI Startups
          </p>
        </div>

        <div className="hidden lg:block divider"></div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] leading-[64px] text-center">
            25+
          </p>
          <p className="text-[30px] leading-[64px] text-[#828282] font-normal">
            Stalls
          </p>
        </div>

        <div className="hidden lg:block divider"></div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] leading-[64px] text-center">
            20+
          </p>
          <p className="text-[30px] leading-[64px] text-[#828282] font-normal">
            Sponsors
          </p>
        </div>
      </div>

      {/* about the event section */}

      <div className="flex flex-col w-full items-center justify-center space-y-8  py-[50px]">
        <div className="p-[20px] text-center text-[45px] font-bold text-black rounded-full">
          About the Event
        </div>

        {/* content section */}
        <div className="w-auto p-2 md:w-[800px] lg:w-[900px] text-justify text-[20px] tracking-normal font-normal">
          <p className="text-[#828282] font-semibold items-center justify-center">
            Future Tech presents its flagship event, the AI Summit & Expo 2024,
            a groundbreaking conference designed to catalyze innovation and
            empower entrepreneurs across India's diverse landscape. This
            single-track event brings together visionaries, startups, investors,
            and industry leaders to explore the transformative potential of AI
            in addressing challenges and creating opportunities, with a special
            focus on rural development, women empowerment, and emerging
            entrepreneurial hubs.
          </p>
        </div>
        <img src={about} alt="about_event" />
      </div>

      {/* speakers section */}
      <div className="flex flex-col w-full items-center justify-center space-y-8 mt-[75px] ">
        <div className="px-[40px] py-[15px] text-center text-[45px] text-black font-bold rounded-full">
          Speakers
        </div>
        <div className="flex items-center justify-center mb-4 p-2">
          <CardContainer cards={CardData} visibleCards={visibleCards} />
        </div>
        <div className="flex justify-center">
          {visibleCards < CardData.length ? (
            <button
              onClick={handleViewMore}
              className="bg-[#3945EF] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
            >
              View More
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="bg-[#E9EE00] text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-4"
            >
              View Less
            </button>
          )}
        </div>

        {/* why attend future tech AI summit */}
        <div className="flex flex-col w-full items-center justify-center space-y-8 mt-[75px] ">
          <div className="px-[40px] py-[15px] text-center text-[45px] text-black font-bold rounded-full">
            Why Attend FutureTech AI Summit?
          </div>
          <Reason />
        </div>
      </div>

      {/* timeline section */}
      <div className="flex flex-col w-full items-center justify-center space-y-8 mt-[75px] ">
        <div className="px-[40px] py-[15px] text-center text-[45px] text-black font-bold rounded-full">
          Timeline
        </div>
        <Timeline />
      </div>
    </div>
  );
}
