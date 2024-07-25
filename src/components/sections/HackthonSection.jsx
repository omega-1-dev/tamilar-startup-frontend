import React, { useState } from "react";
import FAQ from "./FAQ";
import PlusSVG from "../../assets/svg_components/extra/plus";
import MinusSVG from "../../assets/svg_components/extra/minus";
import TimerSvg from "../../assets/svg_components/Timer/timer";
import CountDownTimer from "./CountDownTimer";
import HackthonRegistration from "./HackthonRegistration";
import team from "../../assets/Team.svg";
import prizes from "../../assets/prizes.svg";
import time from "../../assets/Time.svg";
import Themes from "./Themes";
// import wofy from "../../assets/wofy.png";
import growbinar_svg from "../../assets/growbinar.svg";

export default function HackthonSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const targetDate = "2024-07-31T23:59:59";
  const toggleDropDown = (index) => {
    if (openIndex == index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      {/* hackathon card */}
      <div className="pt-24 pb-12 md:pt-[60px] flex flex-col items-center content-center lg:max-w-screen-xl  mx-auto">
        <div className="max-w-6xl mx-auto text-black text-[30px] font-bold text-center ">
          Why Attend Hackathon!
        </div>
        <div className=" mt-[75px] items-center px-2 lg:space-y-2 space-y-0">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-2">
            {/* <TimeSVG className="max-w-full h-[231px]" />
            <TeamSVG className="max-w-full h-[231px]" /> */}
            <img src={time} alt="timersvg" className="max-w-full h-[231px]" />
            <img src={team} alt="team" className="max-w-full h-[231px]" />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-2">
            {/* <PrizePoolSVG className={`max-w-full h-[231px]`}/>
            <BackedSVG  className={`max-w-full h-[231px]`} /> */}
            <img src={prizes} alt="prizes" className="max-w-full h-[231px]" />
            <img
              src={growbinar_svg}
              alt="tamilar1"
              className="max-w-full h-[231px]"
            />
          </div>
        </div>
      </div>

      {/* organizers section */}
      <div className="pt-24 pb-12 md:pt-[60px] content-center lg:max-w-screen-xl  mx-auto">
        <p class="max-w-6xl mx-auto text-black text-[35px] font-bold text-center mb-5">
          Organizers
        </p>
        <div className="max-w-sm md:max-w-4xl mx-auto  gap-8 grid-cols-2 md:grid-cols-4 text-center flex items-center justify-center">
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src="https://omega2024.sirv.com/other_assets/tamilar.jpg"
              className={`max-w-full fill-current h-32 w-98`}
            />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src="https://omega2024.sirv.com/other_assets/growbinar1.png"
              className={`max-w-full fill-current h-32 w-98`}
            />
          </div>
        </div>
      </div>

      {/* hackathon timer section */}
      <div className="relative w-full h-[500px] lg:h-[700px] -z-30 ">
        <div className="flex flex-col items-center justify-center w-full h-full lg:max-w-screen-xl mx-auto">
          <p className="text-4xl text-white text-center font-bold mb-10">
            Registration ends soon! Hurry up and Register!
          </p>
          <div className="relative flex items-center justify-center w-full ">
            <CountDownTimer targetDate={targetDate} />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 hidden xl:block">
          <TimerSvg className="w-full h-full  object-cover" />
        </div>
        <div
          className={`absolute top-0 w-full [height:inherit] -z-10 xl:hidden bg-gradient-to-br from-purple-theme to-fuchsia-400 t o-cyan-300`}
        ></div>
      </div>

      {/* hackathon themes section */}

      <div className="flex flex-col w-full items-center justify-center  mt-[75px] lg:max-w-screen-xl mx-auto">
        <div className=" py-[15px] text-center text-[45px] text-black font-bold rounded-full">
          Themes
        </div>
        <Themes />
      </div>

      {/* map section  */}
      <div className="pt-24 pb-12 md:pt-[60px] relative -z-30 mt-10">
        <p className="max-w-6xl mx-auto text-black text-[35px] font-bold text-center mb-5">
          Future Tech AI Hackathon 2024 Venue
        </p>
        <div className="relative">
          <img
            src="https://omega2024.sirv.com/other_assets/dm_map.png"
            alt="dharmapuri map"
            className={`block mx-auto max-w-full`}
          />
          <div className="absolute top-0 right-0  p-4 text-white font-bold text-center lg:text-[50px]">
            Contributing to Dharmapuri's Economy
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center lg:text-[50px]">
            <div className="p-4">Dharmapuri</div>
          </div>
        </div>
      </div>

      {/* official tech partners */}
      <div className="pt-24 pb-12 md:pt-[60px]  content-center">
        <p class="max-w-6xl mx-auto text-black text-[35px] font-bold text-center  ">
          Official Tech Partners
        </p>
        <div className="max-w-sm md:max-w-4xl mx-auto">
          <div className="flex items-start justify-center">
            <img
              src="https://omega2024.sirv.com/other_assets/omega.png"
              alt="omega"
              className="max-w-full md:h-[200px] fill-current"
            />
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="flex flex-col lg:flex-row mt-1 lg:mt-16 lg:max-w-screen-xl  mx-auto">
        <div className="flex-1 flex text-[25px] lg:text-[35px] text-black items-center justify-center p-4 font-bold lg:justify-center h-96">
          Frequently Asked Questions
        </div>
        <div className="flex-1  p-3 justify-center h-[500px]">
          {FAQ.map((faq, index) => (
            <div
              key={index}
              className="w-full border-b-2 border-gray-200 py-2 mb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer space-x-[200px]"
                onClick={() => toggleDropDown(index)}
              >
                <div className="text-16 lg:text-[25px] font-bold text-black">
                  {faq.question}
                </div>
                <div>
                  {openIndex === index ? (
                    <MinusSVG className={`h-6 w-6`} />
                  ) : (
                    <PlusSVG className={`h-6 w-6`} />
                  )}
                </div>
              </div>
              <div
                className={`text-[16px] font-semibold text-gray-500 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex == index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* regsiter now section */}
      <HackthonRegistration />
    </div>
  );
}
