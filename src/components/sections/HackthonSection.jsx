import React, { useState } from "react";
import samsung from "../../assets/samsung.png";
import stripe from "../../assets/stripe.png";
import map from "../../assets/dm_map.png";
import FAQ from "./FAQ";
import PlusSVG from "../../assets/svg_components/extra/plus";
import MinusSVG from "../../assets/svg_components/extra/minus";

export default function HackthonSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropDown = (index) => {
    if (openIndex == index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      {/* organizers section */}
      <div className="pt-24 pb-12 md:pt-[60px]  content-center">
        <p class="max-w-6xl mx-auto text-black text-[35px] font-bold text-center mb-5">
          Organizers
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

      {/* map section  */}
      <div className="pt-24 pb-12 md:pt-[60px] relative">
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
            Contributing to Tamilnadu's 1 trillion $ economy, a step from
            Dharmapuri
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex text-[25px] lg:text-[35px] text-black items-center justify-center p-4 font-bold lg:justify-start">
          Frequently Asked Questions
        </div>
        <div className="grid grid-rows-4 p-3 justify-center">
          {FAQ.map((faq, index) => (
            <div
              key={index}
              className="w-full border-b-2 border-gray-200 py-2 mb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer space-x-10"
                onClick={() => toggleDropDown(index)}
              >
                <div className="text-[25px] font-bold text-black">
                  {faq.question}
                </div>
                <div>
                  {openIndex === index ? (
                    <MinusSVG className={`h-5 w-5`} />
                  ) : (
                    <PlusSVG className={`h-5 w-5`} />
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
    </div>
  );
}
