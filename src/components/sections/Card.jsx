import React from "react";

const Card = ({ data, index, color, textColor }) => {
  return (
    <div className="flex items-center justify-center w-[343px] md:h-[450px] h-[474px] rounded-lg overflow-hidden">
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{ backgroundColor: color }}
      >
        <img
          src={data.image_url}
          alt="speaker_image"
          className="w-[250px] h-[250px] mb-4"
        />
        <div className="text-center">
          <h2 className={`text-xl font-bold text-${textColor}`}>{data.name}</h2>
          <h3 className={`text-lg font-bold text-${textColor}`}>
            {data.designation}
          </h3>
          <p className={`text-md font-bold text-${textColor}`}>
            {data.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
