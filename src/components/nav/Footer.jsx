import LogoSVG from "../../assets/svg_components/tamilar_startup/black"
import IgSVG from "../../assets/svg_components/instagram/one"
import TeleSVG from "../../assets/svg_components/telegram/one"
import FacebookSVG from "../../assets/svg_components/facebook/one"
import CopyrightSVG from "../../assets/svg_components/copyright/one"

export default function(props) {
    const {className} = props
    return <div className={`w-full  ${className}`}>
        <div className={`flex flex-col md:flex-row lg:max-w-screen-xl  mx-auto `}>
            <div className={`flex-[1.5] px-2 mr-6`}>
                <LogoSVG className={`mb-2 mx-auto md:mx-0`}/>
                <p className={`text-center md:text-start`}>
                    "Maximize your decision-making
                    capabilities with our powerful analytical
                    tools. Harness the power of your data
                    to drive growth and success. Maximize your decision-making
                    capabilities with our powerful analytical
                    tools. Harness the power of your data
                    to drive growth and success.
                    "
                </p>
            </div>
            <div className={`flex-[4] flex flex-col md:flex-row py-3 `}>
                <div className={`flex-1`}>
                    <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
                        Navigate
                    </p>
                    <div className={`mb-2 space-y-2 text-center md:text-end`}>
                        <p>Home</p>
                        <p>About us</p>                         
                        <p>Events</p>                         
                        <p>Contact Us</p>                         
                    </div>
                </div>
                <div className={`flex-1`}>
                    <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
                        Support Us
                    </p>
                    <div className={`mb-2 space-y-2 text-center md:text-end`}>
                        <p>Home</p>
                        <p>About us</p>                         
                        <p>Events</p>                         
                        <p>Contact Us</p>                         
                    </div>
                </div>
                <div className={`flex-1`}>
                    <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
                        Partners
                    </p>
                    <div className={`mb-2 space-y-2 text-center md:text-end`}>
                        <p>Our Partners</p>
                        <p>Subscribers</p>                                               
                    </div>
                </div>
                <div className={`flex-1`}>
                    <p className={`font-bold text-xl mb-2 text-center md:text-end`}>
                        Contact Us
                    </p>
                    <div className={`mb-2 space-y-1 text-center md:text-end`}>
                        <p>sample@gmail.com</p>
                        <p>+91 9087654321</p>                         
                    </div>
                    <div className={`flex space-x-2 justify-center md:justify-end`}>
                        <a href="">
                            <IgSVG className={`h-6 w-6`}/>
                        </a>
                        <a href="">
                            <TeleSVG className={`h-6 w-6`}/>
                        </a>
                        <a href="">
                            <FacebookSVG className={`h-6 w-6`}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className={`flex justify-between flex-col md:flex-row lg:max-w-screen-xl  mx-auto p-2 pb-8`}>
            <span>
                <CopyrightSVG className={`h-5 w-5 inline-block mr-1`}/>2024 All rights reserved
            </span>
            <span>
                <a className={`underline cursor-pointer`} href="">Terms & Conditions</a>,{" "}
                <a className={`underline cursor-pointer`} href="">Privacy Policy</a>,{" "}
                <a className={`underline cursor-pointer`} href="">Sitemap</a>
            </span>
        </div>

    </div>
}