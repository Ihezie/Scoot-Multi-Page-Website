import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";

const Steps = ({ icon, title, text }) => {
  return (
    <motion.article
      variants={fadeIn}
      viewport={viewPortOptions}
      initial="hide"
      whileInView="show"
      className="text-center sm:grid sm:grid-cols-[30%_70%] sm:text-left w-full lg:block"
    >
      <div className="w-14 h-14 bg-yellow flex justify-center items-center rounded-full mx-auto mb-6 sm:mx-0 sm:w-24 sm:h-24">
        <img src={icon} className="w-[23px] sm:w-9 md:w-10" alt="guide icon" />
      </div>
      <div>
        <h3 className="text-xl text-dark-navy mb-6 sm:text-2xl">{title}</h3>
        <p className="text-dim-gray">{text}</p>
      </div>
    </motion.article>
  );
};
export default Steps;
