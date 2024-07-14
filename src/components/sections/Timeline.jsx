import React from "react";
import TimeLineSVG from "../../assets/svg_components/Card/timelinecard";
import YellowSVG from "../../assets/svg_components/circle/yellow";
export default function Timeline() {
  return (
    <div>
      <div className="grid grid-cols-1 p-3 lg:grid-cols-2 gap-6 ">
        <div className="relative">
          <TimeLineSVG className="w-full h-[100px] md:h-[100px] lg:h-[122px]">
            <div className="relative">
              <YellowSVG className="absolute top-2 left-2 w-16 h-16" />
            </div>
          </TimeLineSVG>
        </div>
        <div className="relative">
          <TimeLineSVG className="w-full h-[100px] md:h-[100px] lg:h-[122px]" />
          <p className="absolute top-10 left-10 text-white">hello</p>
        </div>
        <div className="relative">
          <TimeLineSVG className="w-full h-[100px] md:h-[100px] lg:h-[122px]" />
          <p className="absolute top-10 left-10 text-white">hello</p>
        </div>
        <div className="relative">
          <TimeLineSVG className="w-full h-[100px] md:h-[100px] lg:h-[122px]" />
          <p className="absolute top-10 left-10 text-white">hello</p>
        </div>
        <div className="relative">
          <TimeLineSVG className="w-full h-[100px] md:h-[100px] lg:h-[122px]" />
          <p className="absolute top-10 left-10 text-white">hello</p>
        </div>
      </div>
    </div>
  );
}
