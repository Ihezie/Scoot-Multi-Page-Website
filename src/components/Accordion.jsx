import { fadeIn } from "../framer-variants";
import { motion, AnimatePresence } from "framer-motion";
import { viewPortOptions } from "../framer-variants";
import { useState } from "react";
import arrow from "../assets/icons/accordion-arrow.svg";

const Accordion = ({ title, data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      variants={fadeIn}
      initial="hide"
      whileInView="show"
      viewport={viewPortOptions}
      className="px-8 mt-12 md:mt-16 lg:grid grid-cols-[40%_60%] md:px-10 lg:px-24 xl:grid-cols-[35%_65%] xl:px-44"
    >
      <h3 className="heading-4 text-dark-navy text-center mb-8 md:heading-3 lg:text-start">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <AccordionItem
            {...item}
            questionIndex={index}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </motion.section>
  );
};
export default Accordion;

const AccordionItem = ({
  question,
  answer,
  questionIndex,
  expanded,
  setExpanded,
}) => {
  const answerIsVisible = expanded === questionIndex;
  return (
    <motion.article
      variants={fadeIn}
      initial="hide"
      whileInView="show"
      whileHover={{
        backgroundColor: "#FFF4DF",
      }}
      viewport={{ ...viewPortOptions, amount: 0.5 }}
      className="bg-light-gray"
    >
      <div
        className={`flex justify-between items-center cursor-pointer p-8 md:px-10 transition-all duration-300 ${
          answerIsVisible ? "pb-6" : ""
        }`}
        onClick={() => {
          setExpanded(answerIsVisible ? false : questionIndex);
        }}
      >
        <h2 className="text-dark-navy text-lg transition-colors md:text-2xl">
          {question}
        </h2>
        <img
          className={`transition-all duration-300 ${
            answerIsVisible ? "rotate-180" : ""
          }`}
          src={arrow}
          alt="arrow-icon"
        />
      </div>
      <AnimatePresence>
        {answerIsVisible && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{
              duration: 0.4,
            }}
            className="overflow-hidden "
          >
            <p className="text-dark-navy px-8 pb-8 md:px-10">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
