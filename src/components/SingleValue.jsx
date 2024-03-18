import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";

const SingleValue = ({ image, id, title, text }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hide"
      whileInView="show"
      className="text-center"
      viewport={viewPortOptions}
    >
      <div className="relative mb-16">
        <img
          src={image}
          alt="value stock photo"
          className="mx-auto rounded-full"
        />
        <div className="w-24 h-24 bg-yellow text-2xl font-space-mono font-bold flex justify-center items-center rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-dark-navy">
          0{id}
        </div>
      </div>
      <article>
        <h3 className="heading-4 mb-7 text-dark-navy">{title}</h3>
        <p className="text-dim-gray">{text}</p>
      </article>
    </motion.div>
  );
};
export default SingleValue;
