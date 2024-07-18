import React, { useState } from "react";
import samsung from "../../assets/samsung.png";
import stripe from "../../assets/stripe.png";
import map from "../../assets/dm_map.png";
import FAQ from "./FAQ";
import PlusSVG from "../../assets/svg_components/extra/plus";
import MinusSVG from "../../assets/svg_components/extra/minus";
import TimerSvg from "../../assets/svg_components/Timer/timer";
import HackathonCardSVG from "../../assets/svg_components/hackathoncard/one";
import CountDownTimer from "./CountDownTimer";
import HackthonRegistration from "./HackthonRegistration";
import tamilar from "../../assets/tamilar.jpg";
import growbinar from "../../assets/growbinar.png";

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
      {/* hacksthon card */}
      <div className={`lg:max-w-screen-xl  mx-auto text-center mt-10`}>
          <HackathonCardSVG className={`mx-auto`} />
      </div>

      {/* organizers section */}
      <div className="pt-24 pb-12 md:pt-[60px] content-center">
        <p class="max-w-6xl mx-auto text-black text-[35px] font-bold text-center mb-5">
          Organizers
        </p>
        <div className="max-w-sm md:max-w-4xl mx-auto  gap-8 grid-cols-2 md:grid-cols-4 text-center flex items-center justify-center">
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img src={tamilar} className={`max-w-full fill-current h-32 w-98`} />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img src={growbinar} className={`max-w-full fill-current h-32 w-98`} />
          </div>

          {/* <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={stripe}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={samsung}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={stripe}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div> */}
        </div>
      </div>

      {/* hackathon timer section */}
      <div className="relative w-full h-[500px] lg:h-[700px] -z-30 ">
        <div className="flex flex-col items-center justify-center w-full h-full  lg:max-w-screen-xl mx-auto">
          <p className="text-4xl text-white text-center font-bold mb-10">
            Registration ends soon! Hurry up and Register!
          </p>
          <div className="relative  flex items-center justify-center w-full ">
            <CountDownTimer targetDate={targetDate} />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full -z-10 hidden xl:block">
          <TimerSvg className="w-full h-full  object-cover" />
        </div>
        <div
          className={`absolute top-0 w-full [height:inherit]  -z-10 xl:hidden bg-gradient-to-br from-purple-theme to-fuchsia-400 t o-cyan-300`}
        ></div>
      </div>

      {/* map section  */}
      <div className="pt-24 pb-12 md:pt-[60px] relative -z-30">
        <p className="max-w-6xl mx-auto text-black text-[35px] font-bold text-center mb-5">
          AI SUMMIT & EXPO 2024
        </p>
        <div className="relative">
          <img
            src={map}
            alt="dharmapuri map"
            className="block mx-auto max-w-full h-auto"
          />
          <div className="absolute top-0 right-0  p-4 text-white font-bold text-center lg:text-[50px]">
            Contributing to Tamilnadu's 1 trillion $ economy,
          </div>
          <div className="absolute bottom-0 p-4 text-white font-bold text-center lg:text-[50px]">
            Towards a Trillion Dollar Economy by 2030
          </div>
        </div>
      </div>

      {/* official tech partners */}
      <div className="pt-24 pb-12 md:pt-[60px]  content-center">
        <p class="max-w-6xl mx-auto text-black text-[35px] font-bold text-center mb-5">
          Official Tech Partners
        </p>
        <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={samsung}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={stripe}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={samsung}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div>
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img
              src={stripe}
              alt="sponsor1"
              className="max-w-full fill-current"
            />
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[75px]">
        <div className="flex text-[25px] lg:text-[35px] text-black items-center justify-center p-4 font-bold lg:justify-center">
          Frequently Asked Questions
        </div>
        <div className="grid grid-rows-4 p-3 justify-center">
          {FAQ.map((faq, index) => (
            <div
              key={index}
              className="w-full border-b-2 border-gray-200 py-2 mb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer space-x-[200px]"
                onClick={() => toggleDropDown(index)}
              >
                <div className="text-[25px] font-bold text-black">
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
              {openIndex === index && (
                <div className="py-2 text-[20px] font-semibold text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* regsiter now section */}
      <HackthonRegistration />
    </div>
  );
}
