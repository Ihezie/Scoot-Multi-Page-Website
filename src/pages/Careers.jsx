import Banner from "../components/Banner";
import SingleProductInfo from "../components/SingleProductInfo";
import smStockPhoto from "../assets/careers/stock-photo.png";
import lgStockPhoto from "../assets/careers/stock-photo-2.jpg";
import { values } from "../data";
import SingleValue from "../components/SingleValue";
import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import SingleJobListing from "../components/SingleJobListing";
import { jobListings } from "../data";

const Careers = () => {
  const joinUs = {
    image: {
      sm: smStockPhoto,
      lg: lgStockPhoto,
    },
    title: "Care to join our mission?",
    text: "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
  };
  return (
    <main>
      <Banner text={"Careers"} />
      <div className="info-block">
        <SingleProductInfo
          {...joinUs}
          showButton={true}
          buttonText="say hello"
        />
      </div>
      {/* Why join us? */}
      <section className="mt-[120px] px-8 sm:px-36 md:px-40 lg:px-80 xl:px-44">
        <motion.h2
          variants={fadeIn}
          initial="hide"
          whileInView="show"
          className="text-[32px] text-dark-navy text-center mb-16 md:mb-24 sm:heading-2"
        >
          Why join us?
        </motion.h2>
        <section className="flex flex-col gap-14 xl:flex-row xl:justify-between">
          {values.map((item) => (
            <SingleValue key={item.id} {...item} />
          ))}
        </section>
      </section>
      <section className="px-8 flex flex-col gap-4 mt-36 md:px-10 lg:px-24 lg:gap-6 lg:mt-[120px] xl:px-44">
        {jobListings.map((item, index) => (
          <SingleJobListing key={index} {...item} />
        ))}
      </section>
    </main>
  );
};
export default Careers;
