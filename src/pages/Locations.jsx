import mobileMap from "../assets/locations/mobile-map.png";
import tabletMap from "../assets/locations/tablet-map.png";
import desktopMap from "../assets/locations/desktop-map.png";
import Banner from "../components/Banner";
import { locations } from "../data";
import semiCircle from "../assets/icons/semi-circle.svg";
import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";

const Locations = () => {
  return (
    <main>
      <Banner text={"locations"} />
      <section className="px-8 mt-[72px] sm:px-10 lg:px-24 xl:px-44">
        <motion.picture
          variants={fadeIn}
          initial="hide"
          whileInView="show"
          viewport={viewPortOptions}
        >
          <source media="(max-width:639px)" srcSet={mobileMap} />
          <source media="(max-width:1023px)" srcSet={tabletMap} />
          <img src={desktopMap} alt="our locations" />
        </motion.picture>
        <ul className="mt-10 flex flex-col gap-4 sm:hidden">
          {locations.map((item) => (
            <motion.li
              variants={fadeIn}
              initial="hide"
              whileInView="show"
              viewport={viewPortOptions}
              key={item}
              className="heading-4 font-space-mono font-semibold bg-light-yellow py-[22px] text-center"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>
      <motion.article
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
        className="text-center mt-[72px] px-8 sm:px-24 xl:px-44 xl:grid xl:grid-cols-[350px_2fr_1fr] xl:items-center xl:text-left xl:mt-[120px]"
      >
        <h2 className="text-[32px]/8 text-dark-navy mb-8 sm:heading-2 sm:mb-10 xl:mb-0">
          Your City Not Listed?
        </h2>
        <p className="text-dim-gray">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <button
          type="button"
          className="mt-8 btn w-[180px] sm:mt-10 xl:justify-self-end xl:mt-0"
        >
          message us
        </button>
      </motion.article>
    </main>
  );
};
export default Locations;
