import Banner from "../components/Banner";
import SingleProductInfo from "../components/SingleProductInfo";
import { productMerits, values } from "../data";
import SingleValue from "../components/SingleValue";
import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";
import Accordion from "../components/Accordion";
import { accordionData } from "../data";

const About = () => {
  return (
    <main>
      <Banner text={"about"} />
      {/* About product */}
      <section className="info-block">
        {productMerits.map((item, index) => (
          <SingleProductInfo key={index} {...item} showButton={false} />
        ))}
      </section>
      {/* Our Values */}
      <section className="mt-[120px] px-8 sm:px-36 md:px-40 lg:px-80 xl:px-44">
        <motion.h2
          variants={fadeIn}
          initial="hide"
          whileInView="show"
          className="text-[32px] text-dark-navy text-center mb-16 md:mb-24 sm:heading-2"
        >
          Our values
        </motion.h2>
        <section className="flex flex-col gap-14 xl:flex-row xl:justify-between">
          {values.map((item) => (
            <SingleValue key={item.id} {...item} />
          ))}
        </section>
      </section>
      {/* FAQs */}
      <section className="mt-36 md:mt-[120px]">
        <motion.h2
          variants={fadeIn}
          initial="hide"
          whileInView="show"
          viewport={viewPortOptions}
          className="text-[32px] text-dark-navy text-center md:heading-1"
        >
          FAQs
        </motion.h2>
        {accordionData.map((item, index) => {
          const { title, data } = item;
          return <Accordion key={index} title={title} data={data} />;
        })}
      </section>
    </main>
  );
};
export default About;
