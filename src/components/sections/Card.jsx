import React from "react";

const Card = ({ data, index, textColor, className }) => {
  // Check if it's the first card
  const isFirstCard = index === 0;

  // Define conditional styles
  const appliedTextColor = isFirstCard ? "black" : textColor; // Gold for the first card
  const appliedBgColor = isFirstCard ? "#DAA520" : "black";    // Gold background for the first card

  return (
    <div className={`flex flex-col items-center justify-center w-[343px] md:h-[450px] h-[474px] rounded-lg overflow-hidden ${className}`}>
      <img
        src={data.image_url}
        alt="speaker_image"
        className="w-[250px] h-[275px] rounded-t-[27px] bg-[#f5f5f5]"
      />
      <div 
        className={`w-[250px] h-[103.5px] text-center rounded-b-[27px] p-2 content-center`} 
        style={{ backgroundColor: appliedBgColor }} // Apply conditional background color
      >
        <h3 className={`font-bold`} style={{ color: appliedTextColor }}>
          {data.name}
        </h3>
        <h4 className={`font-bold`} style={{ color: appliedTextColor }}>
          {data.designation}
        </h4>
        <p className={`text-[14px] font-semibold`} style={{ color: appliedTextColor }}>
          {data.company}
        </p>
      </div>
    </div>
  );
};

export default Card;
