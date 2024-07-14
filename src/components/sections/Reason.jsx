import React from "react";
import SettingSVG from "../../assets/svg_components/integration/settings";
import NetworkSVG from "../../assets/svg_components/integration/network";
import InnovationSVG from "../../assets/svg_components/integration/innovation";
import StartupSVG from "../../assets/svg_components/integration/startup";
import HackthonSVG from "../../assets/svg_components/integration/Hackathon";
import StallSVG from "../../assets/svg_components/integration/stall";

export default function Reason() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 justify-center items-center">
        <div className="w-full md:w-[350px] h-[250px] p-2">
          <div className="flex flex-col items-start space-y-4 ">
            <SettingSVG className="h-7 w-7" />
            <div className="text-center">
              <p className="text-left font-bold text-[18px] text-black">
                Networking Opportunities
              </p>
              <p className="text-[16px] text-[#12141D] font-semibold leading-[26px] tracking-tight text-justify">
                Dive into the latest advancements in AI and technology with
                keynote speeches, panel discussions, and presentations from
                industry leaders and innovators.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[250px] p-2">
          <div className="flex flex-col items-start space-y-4 ">
            <NetworkSVG className="h-7 w-7" />
            <div className="text-center">
              <p className="text-left font-bold text-[18px] text-black">
                Networking Opportunities
              </p>
              <p className="text-[16px] text-[#12141D] font-semibold leading-[26px] tracking-tight text-justify">
                Connect with like-minded professionals, industry experts,
                startups, and investors. Forge valuable relationships that can
                propel your career and business forward.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[250px] p-2">
          <div className="flex flex-col items-start space-y-4 ">
            <InnovationSVG className="h-6 w-6" />
            <div className="text-center">
              <p className="text-left  font-bold text-[18px] text-black">
                Innovative Showcases
              </p>
              <p className="text-[16px] text-[#12141D] font-semibold leading-[26px] tracking-tight text-justify">
                Explore groundbreaking products and solutions from leading
                companies and startups.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[250px] p-2">
          <div className="flex flex-col items-start space-y-4  ">
            <StartupSVG className="h-7 w-7" />
            <div className="text-center">
              <p className="text-left font-bold text-[18px] text-black">
                Startup and Investor Interaction
              </p>
              <p className="text-[16px] text-[#12141D] font-semibold leading-[26px] tracking-tight text-justify">
                Startups can pitch their ideas to potential investors and
                partners. Investors can discover the next big innovation and
                promising ventures in the AI ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[250px] p-2">
          <div className="flex flex-col items-start space-y-4">
            <HackthonSVG className="h-7 w-7" />
            <div className="text-center">
              <p className="text-left font-bold text-[18px] text-black">
                Competitive Hackathon
              </p>
              <p className="text-[16px] text-[#12141D] font-semibold leading-[26px] tracking-tight text-justify">
                Join the Future Tech Hackathon AI Hackathon 2024 to solve
                real-world challenges. Collaborate with talented individuals and
                compete for exciting prizes.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[250px] p-2">
          <div className="flex flex-col items-start space-y-4 ">
            <StallSVG className="h-6 w-6" />
            <div className="text-center">
              <p className="text-left font-bold text-[18px] text-black">
                Innovative and Diverse Stalls Showcase
              </p>
              <p className="text-[16px] text-[#12141D] font-semibold leading-[26px] tracking-tight text-justify">
                Explore a variety of stalls showcasing innovative products,
                services, and solutions from different sectors. From
                cutting-edge tech demonstrations to interactive displays,
                there's something to spark everyone's interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
