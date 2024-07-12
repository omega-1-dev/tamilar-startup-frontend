import { useState } from "react"

import Header from  "../nav/Header"
import SideBar from "../nav/Sidebar"

export default function(props) {
    const [showSideBar, setSideBarStatus] = useState(false)
    const openSideBar = () => {
        setSideBarStatus(true)
    }
    const closeSideBar = () => {
        setSideBarStatus(false)
    }
    return <div {...props}>
        <Header className={`fixed top-2 w-screen`} hideNavScreenSize={`lg`} openSideBar={setSideBarStatus}/>
        <SideBar className={`lg:hidden ${showSideBar?'flex':'hidden'}`} onClose={closeSideBar}/>
        {props.children}
    </div>
}