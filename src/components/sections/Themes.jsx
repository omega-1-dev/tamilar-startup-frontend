import React from "react";
import TimeLineSVG from "../../assets/svg_components/Card/timelinecard";
import YellowSVG from "../../assets/svg_components/circle/yellow";
import ThemesData from "./ThemesList";
export default function Themes() {
  return (
    <div className={`-z-50`}>
      <div className="grid grid-cols-1 p-3 lg:grid-cols-2 gap-6 ">
        {ThemesData.map((item, index) => (
          <div key={index} className="relative">
            <TimeLineSVG className="w-full h-[120px] md:h-[120px] lg:h-[130px] " />
            <div className="absolute inset-0 flex items-center justify-start space-x-4 p-4">
              <div className="relative w-16 h-16 z-3 flex-shrink-0">
                <YellowSVG className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center z-4 text-black font-bold text-3xl">
                  {index + 1}
                </span>
              </div>
              <div className="h-full w-px bg-gray-200"></div>
              <div className="flex flex-col justify-center gap-2 text-white">
                <p className="text-xl font-bold">{item.topic}</p>
                <p className="text-[16px] font-semibold lg:block hidden">
                  {item.data}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
