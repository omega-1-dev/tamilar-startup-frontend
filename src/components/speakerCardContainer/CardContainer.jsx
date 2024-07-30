import React, { useState } from "react";
import Card from "../sections/Card";

const CardContainer = ({ cards, visibleCards }) => {
  return (
    <div className="flex flex-wrap space-y-3 lg:space-y-0 lg:gap-8  justify-center sm:p-0 p-4">
      {cards.map((card, index) => (
        <Card
          data={card}
          index={index}
          color="black"
          textColor={index % 2 === 0 ? "white" : "white"}
          className={`overflow-hidden transition-all duration-500 ease-in-out ${index<visibleCards ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        />
      ))}
    </div>
  );
};

export default CardContainer;
