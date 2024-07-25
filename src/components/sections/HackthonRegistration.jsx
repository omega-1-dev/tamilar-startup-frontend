import React from "react";

export default function HackthonRegistration() {
  const handleClick = () => {
    window.location.href = "https://forms.gle/T3TCHCm8mELKsopN8";
  };
  return (
    <div className="mt-[75px]">
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="max-w-6xl mx-auto text-center pb-12 md:pb-6">
            <div className="py-9 mt-0 mb-10">
              <p className="text-xl mt-10 mb-4 text-white lg:text-2xl font-bold">
                Let's Start Something Great
                <br />
                Get Your Amazing Teams registered for this Hackathon!
              </p>
            </div>
            <a href="https://forms.gle/usCSaXfGN6hGxm9B9">
              <button
                onClick={handleClick}
                className="text-md text-white bg-black rounded-lg font-bold p-3 lg:p-4"
              >
                Register!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
