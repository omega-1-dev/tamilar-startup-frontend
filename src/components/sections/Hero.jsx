import HeroTextIMG from "../../assets/fat.png";
import herovid from "../../assets/hero_section_vid.mp4";
import CalendarSVG from "../../assets/svg_components/calendar/one";
import LocatonSVG from "../../assets/svg_components/location/one";
import RedCircleSVG from "../../assets/svg_components/circle/red";
import summit from "../../assets/summit.svg";

export default function ({ text, regLink }) {
  // let link = regLink;
  // const handleClick = () => {
  //   window.location.href = regLink 
  //  };
  return (
    <div>
      <div
      // className={`relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity`}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0  w-full h-full object-cover  z-[-1] bg-local"
        >
          <source src={herovid} type="video/mp4" />
        </video>
      </div>
      <div
        className={`flex flex-col h-screen w-full justify-center items-center p-5 lg:p-0`}
      >
        <div className={`text-6xl text-white font-bold `}>{text}</div>
        <img className={`my-10`} src={summit} />
        <div className={`flex mb-8`}>
          <div className={`flex items-center pr-2`}>
            <p className={`pr-1`}>
              <CalendarSVG className={`h-10 w-10`} />
            </p>
            <span className={`text-white font-bold text-2xl`}>10 Aug 2024</span>
          </div>
          <div className={`flex items-center`}>
            <p className={`pr-1`}>
              <LocatonSVG className={`h-10 w-10`} />
            </p>
            <span className={`text-white font-bold text-2xl`}>
              Jothi Mahal, Dharmapuri
            </span>
          </div>
        </div>
        <div className={`flex justify-center items-center text-center mb-8`}>
          <a href={regLink}><button
            className={`text-white text-center font-bold text-[21px] bg-purple-theme rounded-2xl px-4 py-4 mt-2`}
          >
            Register now
          </button>
          </a>
        </div>
        <p>
          <div className={`flex items-center`}>
            <p className={`pr-1`}>
              <RedCircleSVG className={`h-6 w-6`} />
            </p>
            <span className={`text-white font-bold text-xl`}>
              Hurry up! Few seats left.
            </span>
          </div>
        </p>
      </div>
    </div>
  );
}
