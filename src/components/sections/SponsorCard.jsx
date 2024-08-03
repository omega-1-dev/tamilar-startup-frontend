import React, { useState } from "react";

const SponsorCard = ({ title, amount, details, backgroundColor, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[250px] md:w-[300px] lg:w-[350px] h-auto border border-black rounded-lg p-4 cursor-pointer "
      style={{ background: backgroundColor }} 
      onClick={handleToggle}
      >
      <p
        className={`text-md font-bold text-center p-2 ${
          index % 2 === 0 ? "text-black" : "text-white"
        }`}
        >
        {title}
      </p>
      <p
        className={`text-center text-[35px] font-bold  ${
          index % 2 === 0 ? "text-black" : "text-white"
        }`}
        >
        {amount}
      </p>
      <div className="flex justify-center mt-2">
        <button onClick={handleToggle} className="text-black text-2xl">
          {isOpen ? "✕" : "↓"}
        </button>
      </div>
      <div id="text" className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}>
        {details.map((detail, idx) => (
          <li
          key={idx}
          className={`tracking-tighter text-justify text-14 font-normal -leading-8 ${
              index % 2 === 0 ? "text-black" : "text-white"
            }`}
            >
            {detail}
          </li>
        ))}
      </div>
    </div>
  );
};
export default SponsorCard;