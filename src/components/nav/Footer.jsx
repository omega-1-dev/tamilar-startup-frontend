import LogoSVG from "../../assets/svg_components/tamilar_startup/black";
import IgSVG from "../../assets/svg_components/instagram/one";
import CopyrightSVG from "../../assets/svg_components/copyright/one";

export default function (props) {
  const { className } = props;
  const handelScrollEvent = () => {
    const aboutUsSection = document.getElementById("aboutus");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`w-full  ${className}`}>
      <div className={`flex flex-col md:flex-row lg:max-w-screen-xl  mx-auto `}>
        <div className={`flex-[1.5] px-2 mr-6`}>
          <LogoSVG className={`mb-2 mx-auto md:mx-0`} />
          <p className={`text-center md:text-start`}>
            "Driving innovation and growth in the tech community. Empowering
            startups, entrepreneurs, and students. Building a brighter future
            through technology."
          </p>
        </div>
        <div className={`flex-[4] flex flex-col md:flex-row py-3 `}>
          <div className={`flex-1`}>
            <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
              Navigate
            </p>
            <div className={`mb-2 space-y-2 text-center md:text-end`}>
              <a href={``} className={`underline cursor-pointer`}>Home</a> <br/>
              <button className={`underline `} onClick={handelScrollEvent}>About us</button> <br/>
              <a href={``} className={`underline cursor-pointer`}>Events</a> <br/>
              <a href={``} className={`underline cursor-pointer`}>Contact Us</a> <br/>
            </div>
          </div>

          <div className={`flex-1`}>
            <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
              Partners
            </p>
            <div className={`mb-2 space-y-2 text-center md:text-end`}>
              <a href="https://forms.gle/ezK9TEKxgZzGRQQ96" target="__blank">
                <p className={`underline cursor-pointer`}>Become a sponsor</p>
              </a>
              <a href="https://forms.gle/gtQQz4wwt3LGjbJDA" target="__blank">
                <p className={`underline cursor-pointer`}>Book a Stall</p>
              </a>
              <a href="https://forms.gle/T6evWjKt6D7UBNxp9" target="__blank">
                <p className={`underline cursor-pointer`}>Become a Speaker</p>
              </a>
            </div>
          </div>
          <div className={`flex-1`}>
            <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
              Contact Us
            </p>
            <div className={`mb-2 space-y-1 text-center md:text-end`}>
              <p>prabakar@tamilarstartup.com</p>
              <p>+91 9087654321</p>
            </div>
            <div className={`flex space-x-2 justify-center md:justify-end`}>
              <a href="">
                <IgSVG className={`h-6 w-6`} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />

      <div
        className={`flex justify-between flex-col items-center md:flex-row lg:max-w-screen-xl  mx-auto p-2 pb-8`}
      >
        <span>
          <CopyrightSVG className={`h-5 w-5 inline-block mr-1`} />
          2024 All rights reserved
        </span>
        <span>
          <a className={`underline cursor-pointer`} href="">
            Terms & Conditions
          </a>
          ,{" "}
          <a className={`underline cursor-pointer`} href="">
            Privacy Policy
          </a>
          ,{" "}
          <a className={`underline cursor-pointer`} href="">
            Sitemap
          </a>
        </span>
      </div>
    </div>
  );
}
