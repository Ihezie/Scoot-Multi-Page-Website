import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";
import circleIcons from "../assets/icons/circle-icons.svg";


const Banner = ({ text }) => {
  return (
    <motion.section
      variants={fadeIn}
      initial="hide"
      whileInView="show"
      viewport={viewPortOptions}
      className={`${
        text === "about"
          ? "bg-mobile-banner-one xs:bg-tablet-banner-one md:bg-desktop-banner-one"
          : "bg-mobile-banner-two xs:bg-tablet-banner-two md:bg-desktop-banner-two"
      } bg-center bg-no-repeat bg-cover h-40 text-white flex justify-center items-center md:justify-between md:h-[200px] md:pl-24 xl:pl-44`}
    >
      <h1 className="heading-3 capitalize sm:heading-1">{text}</h1>
      <img className="hidden md:block" src={circleIcons} alt="circle icons" />
    </motion.section>
  );
};
export default Banner;
