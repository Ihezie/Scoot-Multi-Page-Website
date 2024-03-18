import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data";

const Sidebar = ({ setShowSidebar }) => {
  const container = {
    show: {
      x: 0,
      transition: {
        type: "tween",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    hide: {
      transition: {
        type: "tween",
      },
      x: "-100%",
    },
  };
  const child = {
    show: {
      x: 0,
    },
    hide: {
      x: "-200%",
    },
  };
  const overlay = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.aside
        variants={container}
        initial="hide"
        animate="show"
        exit="hide"
        className="fixed bg-dark-gray w-[70%] left-0 h-screen top-0 z-40 pt-[132px] px-8 pb-6 flex flex-col items-start justify-between md:hidden"
      >
        <ul>
          {navLinks.map((item) => (
            <motion.li
              key={item}
              className="text-white capitalize text-lg font-bold pb-6"
              variants={child}
            >
              <NavLink className="hover:text-yellow my-transition" to={item}>
                {item}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <button type="button" className="btn w-full">
          get scootin
        </button>
      </motion.aside>
      <motion.div
        variants={overlay}
        initial="hide"
        animate="show"
        exit="hide"
        onClick={() => {
          setShowSidebar(false);
        }}
        className="z-30 fixed h-screen w-screen top-0 left-0 bg-black/75 md:hidden"
      ></motion.div>
    </>
  );
};
export default Sidebar;
