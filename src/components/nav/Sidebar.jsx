import { useLocation, useNavigate } from "react-router-dom";

import XSVG from "../../assets/svg_components/x/one";
import CircleSVG from "../../assets/svg_components/circle/one";

export default function (props) {
  const { className, onClose } = props;
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed flex flex-col right-0 h-full w-6/12 bg-gray-theme ${className}`}
    >
      <div className={`flex justify-start px-2 py-5 mb-1`} onClick={onClose}>
        <XSVG className={`fill-white h-8 w-8 cursor-pointer`} />
      </div>
      <div className={`px-2 mb-1`}>
        <ul className={`pt-3 space-y-1`}>
          <li className={` text-start text-white font-bold text-xl`}>
            <div className={`inline-block w-2 h-2 mr-2`}>
              <CircleSVG
                className={`${location.pathname === "/" ? "block" : "hidden"}`}
              />
            </div>
            <span onClick={() => navigate("/")} className={`cursor-pointer`}>
              Home
            </span>
          </li>
          <li className={` text-start text-white font-bold text-xl`}>
            <div className={`inline-block w-2 h-2 mr-2`}>
              <CircleSVG
                className={`${
                  location.pathname === "/aboutus" ? "block" : "hidden"
                }`}
              />
            </div>
            <span
              onClick={() => navigate("/aboutus")}
              className={`cursor-pointer`}
            >
              About Us
            </span>
          </li>
          <li className={` text-start text-white font-bold text-xl`}>
            <div className={`inline-block w-2 h-2 mr-2`}>
              <CircleSVG
                className={`${
                  location.pathname === "/events" ? "block" : "hidden"
                }`}
              />
            </div>
            <span
              onClick={() => navigate("/hackathon")}
              className={`cursor-pointer`}
            >
              Hackathon
            </span>
          </li>
          <li className={` text-start text-white font-bold text-xl`}>
            <div className={`inline-block w-2 h-2 mr-2`}>
              <CircleSVG
                className={`${
                  location.pathname === "/contact" ? "block" : "hidden"
                }`}
              />
            </div>
            <span
              onClick={() => navigate("/contact")}
              className={`cursor-pointer`}
            >
              Contact Us
            </span>
          </li>
        </ul>
      </div>
      <div className={`flex justify-start px-5`}>
        <button
          className={`text-white font-bold text-[21px bg-purple-theme rounded-2xl px-2 py-2 mt-2`}
        >
          Register now
        </button>
      </div>
    </div>
  );
}
