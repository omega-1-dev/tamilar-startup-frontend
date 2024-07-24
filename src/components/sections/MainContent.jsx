import about from "../../assets/about_event.png";
import CardContainer from "../speakerCardContainer/CardContainer";
import CardData from "../speakerCardContainer/CardData";
import { useState, useRef } from "react";
import Reason from "./Reason";
import Timeline from "./Timeline";
import executives from "../../assets/executives.jpg";
import startup from "../../assets/startup.jpg";
import investors from "../../assets/investors.jpg";
import SponsorCard from "./SponsorCard";
import Sponsors from "./Sponsors";
import sponsor1 from "../../assets/sponsor1.svg";
import rtr from "../../assets/rtr.jpg";
import jci from "../../assets/jci.jpg";
import sts from "../../assets/out1.jpg";
import care from "../../assets/care.png";
import yaa from "../../assets/yaa_creation.png";
import sona from "../../assets/sona.jpg";
import college from "../../assets/college.jpg";
import one_team from "../../assets/oneteam.png";

export default function MainContent() {
  const [visibleCards, setVisibleCards] = useState(3);
  const scrollTo = (id) => {
    const aboutUsSection = document.getElementById(id);
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleViewMore = () => {
    setVisibleCards(visibleCards + 3);
  };
  const handleViewLess = () => {
    setVisibleCards(3);
    scrollTo("speakers");
  };

  return (
    <div>
      <div className="flex items-center justify-center lg:flex-row flex-col lg:gap-[4rem] gap-8 lg:pt-[60px] m-4 lg:max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] lg:leading-[64px] text-center">
            1000+
          </p>
          <p className="text-[30px] lg:leading-[64px] font-normal text-[#828282]">
            Attendees
          </p>
        </div>

        <div className="hidden lg:block divider"></div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[48px] text-[#3945EF] leading-[64px] text-center">
            25+
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
            50+
          </p>
          <p className="text-[30px] leading-[64px] text-[#828282] font-normal">
            Stalls
          </p>
        </div>
      </div>

      {/* about the event section */}

      <div
        id="aboutus"
        className="flex flex-col w-full items-center justify-center space-y-8  py-[50px] "
      >
        <div className="p-[20px] text-center text-[45px] font-bold text-black rounded-full">
          About the Event
        </div>

        {/* content section */}
        <div className="w-auto p-2 lg:max-w-screen-xl mx-auto text-justify text-[20px] tracking-normal font-normal ">
          <p className="text-[#828282] font-semibold items-center justify-center p-2 lg:p-1">
            TamilarStartup presents its flagship event, Future Tech AI Summit &
            Expo 2024, a groundbreaking conference designed to catalyze
            innovation and empower entrepreneurs across India's diverse
            landscape. This single-track event brings together visionaries,
            startups, investors, and industry leaders to explore the
            transformative potential of AI in addressing challenges and creating
            opportunities, with a special focus on rural development, women
            empowerment, and emerging entrepreneurial hubs.
          </p>
        </div>
        <img src={about} alt="about_event" />
      </div>

      {/* speakers section */}
      <div
        id="speakers"
        className="flex flex-col w-full items-center justify-center space-y-8 mt-[75px] lg:max-w-screen-xl mx-auto"
      >
        <div className="px-[40px] py-[15px] text-center text-[45px] text-black font-bold rounded-full">
          Speakers
        </div>
        <div className="flex items-center justify-center mb-0 lg:mb-4 p-2">
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
              className="bg-[#E9EE00] px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-4 text-black"
            >
              View Less
            </button>
          )}
        </div>

        {/* why attend future tech AI summit */}
        <div className="flex flex-col w-full items-center justify-center mt-[75px] lg:max-w-screen-xl mx-auto">
          <div className=" py-[15px] text-center text-[45px] text-black font-bold rounded-full">
            Why Attend FutureTech AI Summit?
          </div>
          <Reason />
        </div>
      </div>

      {/* timeline section */}
      <div className="flex flex-col w-full items-center justify-center  mt-[75px] lg:max-w-screen-xl mx-auto">
        <div className=" py-[15px] text-center text-[45px] text-black font-bold rounded-full">
          Timeline
        </div>
        <Timeline />
      </div>

      {/* who should attend section */}
      <div className="mt-[75px] ">
        <p className="text-black text-[35px] md:text-[48px] font-bold text-center lg:max-w-screen-xl mx-auto">
          Who Should Attend
        </p>
        <div className="flex flex-wrap gap-[16px] mt-10 items-center justify-center">
          <div className="bg-black w-full p-3 flex justify-center flex-wrap">
            <div className="flex flex-col items-center justify-center p-3">
              <img
                src={executives}
                alt="participant_image"
                className="h-[300px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[350px] lg:w-[300px]"
              />
              <p className="text-white  text-md font-semibold text-center p-4">
                Corporate Executives{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <img
                src={startup}
                alt="participant_image"
                className="h-[300px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[350px] lg:w-[300px]"
              />
              <p className="text-white text-md font-semibold text-center p-4">
                Startup Entrepreneurs & Collaborators{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <img
                src={investors}
                alt="participant_image"
                className="h-[300px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[350px] lg:w-[300px]"
              />
              <p className="text-white text-md font-semibold text-center p-4">
                Investors & Venture Capitalists{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <img
                src={college}
                alt="participant_image"
                className="h-[300px] w-[250px] md:h-[250px] md:w-[300px] lg:h-[350px] lg:w-[300px]"
              />
              <p className="text-white text-md font-semibold text-center p-4">
                College Students{" "}
              </p>
            </div>
          </div>
        </div>
        {/* sponsorship oppurtunites section */}
        <div className="bg-[#F9F9F9] h-auto w-full p-4 mt-[75px] lg:max-w-screen-xl mx-auto">
          <p className="text-black text-[35px] text-center font-bold lg:text-[48px]">
            Sponsorship Oppurtunities
          </p>
          <div className="flex flex-wrap p-[35px] gap-8 items-start justify-center ">
            {Sponsors.map((card, index) => (
              <SponsorCard
                key={index}
                title={card.title}
                amount={card.amount}
                details={card.details}
                backgroundColor={card.backgroundColor}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* sponsors list section */}
        {/* need to loop content - pending */}
        <div className="mt-[75px] lg:max-w-screen-xl mx-auto">
          <p className="text-black text-[35px] text-center font-bold lg:text-[48px]">
            Platinum Sponsors
          </p>
          <div className="flex flex-wrap gap-4  mt-[50px] items-center justify-center">
            <div className="max-w-fit rounded-full h-auto ">
              <img src={sponsor1} alt="sponsor1" />
            </div>
          </div>
        </div>

        <div className="mt-[75px] lg:max-w-screen-xl mx-auto">
          <p className="text-black text-[35px] text-center font-bold lg:text-[48px]">
            Associate Partners
          </p>
          <div className="flex sm:flex-col md:flex-row flex-wrap md:space-x-6  mt-[50px] items-center justify-center">
            <div className="w-48 h-48 ">
              <img
                src={rtr}
                alt="sponsor1"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-48 h-48 ">
              <img
                src={jci}
                alt="sponsor1"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-[75px] lg:max-w-screen-xl mx-auto">
          <p className="text-black text-[35px] text-center font-bold lg:text-[48px]">
            Outreach Partners
          </p>
          <div className="flex sm:flex-col md:flex-row flex-wrap md:space-x-6  mt-[50px] items-center justify-center">
            <div className="w-48 h-48 ">
              <img
                src={sts}
                alt="sponsor1"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-48 h-48 ">
              <img
                src={care}
                alt="sponsor1"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-48 h-48 ">
              <img
                src={yaa}
                alt="sponsor1"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-48 h-48 ">
              <img
                src={one_team}
                alt="sponsor1"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-[75px] lg:max-w-screen-xl mx-auto">
          <p className="text-black text-[35px] text-center font-bold lg:text-[48px]">
            Incubation Partner
          </p>
          <div className="flex sm:flex-col md:flex-row flex-wrap md:space-x-6  mt-[50px] items-center justify-center">
            <div className="w-48 h-48 ">
              <img
                src={sona}
                alt="sona_incubation"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
