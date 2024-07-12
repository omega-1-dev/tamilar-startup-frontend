import { useLocation, useNavigate } from "react-router-dom"

import LogoSVG from "../../assets/svg_components/tamilar_startup/one"
import CircleSVG from "../../assets/svg_components/circle/one"
import HamburgerSVG from "../../assets/svg_components/hamburger/one"

export default function(props) {
    const {className, hideNavScreenSize, openSideBar} = props
    const location = useLocation()
    const navigate = useNavigate()
    return <div className={`flex justify-between w-full p-3 ${className}`}>
        <div className={`flex-1 flex justify-start ${hideNavScreenSize} lg:justify-center items-center `}>
            <LogoSVG className={`h-[54px]`}/>
        </div>
        <div className={`hidden ${hideNavScreenSize}:flex flex-[2] text-center items-center`}>
            <ul className={`flex flex-1 justify-between items-center pt-3`}>
                <li className={`flex-1 text-center text-white font-bold text-2xl`}>
                    <div className={`inline-block w-2 h-2 mr-2`}>
                        <CircleSVG className={`${location.pathname==='/'?'block':'hidden'}`}/>
                    </div>
                    <span onClick={()=>navigate('/')} className={`cursor-pointer`}>
                        Home
                    </span>
                </li>
                <li className={`flex-1 text-center text-white font-bold text-2xl`}>
                    <div className={`inline-block w-2 h-2 mr-2`}>
                        <CircleSVG className={`${location.pathname==='/aboutus'?'block':'hidden'}`}/>
                    </div>
                    <span onClick={()=>navigate('/aboutus')} className={`cursor-pointer`}>
                        About Us
                    </span>
                </li>
                <li className={`flex-1 text-center text-white font-bold text-2xl`}>
                    <div className={`inline-block w-2 h-2 mr-2`}>
                        <CircleSVG className={`${location.pathname==='/events'?'block':'hidden'}`}/>
                    </div>
                    <span onClick={()=>navigate('/events')} className={`cursor-pointer`}>
                        Events
                    </span>
                </li>
                <li className={`flex-1 text-center text-white font-bold text-2xl`}>
                    <div className={`inline-block w-2 h-2 mr-2`}>
                        <CircleSVG className={`${location.pathname==='/contact'?'block':'hidden'}`}/>
                    </div>
                    <span onClick={()=>navigate('/contact')} className={`cursor-pointer`}>
                        Contact Us
                    </span>
                </li>
            </ul>
        </div>
        <div className={`hidden ${hideNavScreenSize}:flex justify-center items-center flex-1 text-center`}>
            <button className={`text-white font-bold text-[21px bg-purple-theme rounded-2xl px-2 py-2 mt-2`}>
                Register now
            </button>
        </div>
        <div className={`flex ${hideNavScreenSize}:hidden justify-center items-center text-center`}>
            <HamburgerSVG className={`h-8 w-8 fill-white`} onClick={openSideBar}/>
        </div>
    </div>
}