import logo from "../../assets/icons/scoot.svg";
import bars from "../../assets/icons/bars.svg";
import closeIcon from "../../assets/icons/icon-menu-close.svg";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="sticky top-0 py-6 px-8 flex justify-between bg-white z-50 items-center xl:px-44">
        <div
          className="cursor-pointer md:hidden"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          {showSidebar ? (
            <img src={closeIcon} alt="close icon" />
          ) : (
            <img src={bars} alt="menu icon" />
          )}
        </div>
        <Link to="/">
          <img src={logo} alt="scoot logo" className="md:w-28" />
        </Link>
        <span className="md:hidden"></span>
        <Navbar />
      </header>
      <AnimatePresence>{showSidebar && <Sidebar />}</AnimatePresence>
    </>
  );
};
export default Header;
