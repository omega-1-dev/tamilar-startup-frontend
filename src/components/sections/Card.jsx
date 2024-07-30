import React from "react";

const Card = ({ data, index, color, textColor, className }) => {
  return (
   
<div className={`flex flex-col items-center justify-center w-[343px] md:h-[450px] h-[474px] rounded-lg overflow-hidden ${className}`}>
  <img
    src={data.image_url}
    alt="speaker_image"
    className="w-[250px] h-[275px] rounded-t-[27px] bg-gradient-to-r from-violet-500 to-fuchsia-500"
  />
  <div className="w-[250px] h-[100px] text-center bg-black rounded-b-[27px] p-2 content-center">
    <h3 className={`font-bold text-${textColor}`}>{data.name}</h3>
    <h4 className={`font-bold text-${textColor}`}>
      {data.designation}
    </h4>
    <p className={` text-[14px] font-semibold text-${textColor} overflow-hiddden`}>
      {data.company}
    </p>
  </div>
</div>


  );
};

export default Card;
