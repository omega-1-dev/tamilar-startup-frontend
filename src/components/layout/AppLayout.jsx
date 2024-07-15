import { useState } from "react";

import Header from "../nav/Header";
import SideBar from "../nav/Sidebar";
import Footer from "../nav/Footer";

export default function (props) {
  const [showSideBar, setSideBarStatus] = useState(false);
  const openSideBar = () => {
    setSideBarStatus(true);
  };
  const closeSideBar = () => {
    setSideBarStatus(false);
  };
  return (
    <div {...props}>
      <Header
        className={`fixed top-0 w-screen z-10`}
        openSideBar={openSideBar}
      />
      <SideBar
        className={`lg:hidden ${showSideBar ? "flex" : "hidden"}`}
        onClose={closeSideBar}
      />
      {props.children}
      <Footer className={`mt-80`} />
    </div>
  );
}
