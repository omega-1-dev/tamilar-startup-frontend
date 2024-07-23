import React from "react";
import TimeLineSVG from "../../assets/svg_components/Card/timelinecard";
import YellowSVG from "../../assets/svg_components/circle/yellow";
import TimelineData from "./TimelineData";
export default function Timeline() {
  return (
    <div className={`-z-50`}>
      <div className="grid grid-cols-1 p-3 lg:grid-cols-2 sm:gap-3 lg:gap-6 gap-0">
        {TimelineData.map((item, index) => (
          <div key={index} className="relative">
            <TimeLineSVG className="w-full h-[120px] md:h-[120px] lg:h-[130px] " />
            <div className="absolute inset-0 flex items-center justify-start space-x-4 p-4">
              <div className="relative w-16 h-16 z-3 flex-shrink-0">
                <YellowSVG className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center z-4 text-black font-bold text-3xl">
                  {item.sno}
                </span>
              </div>
              <div className="h-full w-px bg-gray-200"></div>
              <div className="flex flex-col justify-center gap-2 text-white">
                <p className="text-xl font-bold">{item.data}</p>
                <p className="text-[16px] font-semibold lg:block hidden">
                  {item.topic}
                </p>
                <p className="text-sm font-semibold lg:mb-2">{item.timing}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
