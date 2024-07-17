import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CountDownTimer({ targetDate }) {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  const calculateTimeLeft = () => {
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevTimeLeft(timeLeft);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="text-center text-black bg-white bg-opacity-75 p-4    rounded-lg grid grid-cols-4 gap-4">
      {timeLeft.days !== undefined ? (
        <>
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-full h-24 flex items-center justify-center bg-white p-2 rounded-lg relative">
                <AnimatePresence>
                  <motion.div
                    key={`${unit}-${timeLeft[unit]}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-5xl font-bold"
                  >
                    {timeLeft[unit]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className="block text-xl capitalize">{unit}</span>
            </div>
          ))}
        </>
      ) : (
        <span className="text-2xl font-bold">Event has started!</span>
      )}
    </div>
  );
}
