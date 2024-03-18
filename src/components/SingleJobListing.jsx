import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";

const SingleJobListing = ({ position, country, region }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hide"
      whileInView="show"
      viewport={viewPortOptions}
      className="bg-snow text-center px-8 pt-9 pb-8 sm:flex sm:text-left sm:justify-between sm:items-end sm:py-[38px] md:px-12 xl:pr-16"
    >
      <div className="mb-4 sm:mb-0">
        <h4 className="text-lg text-dark-navy mb-1 md:mb-2 md:heading-4">
          {position}
        </h4>
        <p className="text-dark-navy">
          {region}, {country}
        </p>
      </div>
      <button type="button" className="btn w-full sm:w-[180px]">
        apply
      </button>
    </motion.div>
  );
};
export default SingleJobListing;
