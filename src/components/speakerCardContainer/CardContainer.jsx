import React, { useState } from "react";
import Card from "../sections/Card";

const CardContainer = ({ cards, visibleCards }) => {
  return (
    <div className="flex flex-wrap gap-8 mt-6 justify-center sm:p-0 p-4">
      {cards.slice(0, visibleCards).map((card, index) => (
        <Card
          data={card}
          index={index}
          color={index % 2 === 0 ? "#3945EF" : "#E9EE00"}
          textColor={index % 2 === 0 ? "white" : "black"}
        />
      ))}
    </div>
  );
};

export default CardContainer;
