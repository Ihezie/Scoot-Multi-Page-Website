import arrow from "../assets/icons/full-arrow.svg";
import circleIcons from "../assets/icons/circle-icons.svg";
import straightLine from "../assets/icons/straight-line.svg";
import { userGuide, productInfo } from "../data";
import Steps from "../components/Steps";
import SingleProductInfo from "../components/SingleProductInfo";
import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <motion.section
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
        className="bg-mobile-hero bg-cover sm:bg-tablet-hero lg:bg-desktop-hero"
      >
        <section className="h-[95vh] min-h-[650px] text-center px-8 pt-28 relative sm:px-24 sm:pt-32 sm:h-auto sm:pb-52 xl:px-0 xl:text-left xl:pt-40 ">
          <h1 className="heading-3 text-white mb-6 sm:heading-1 xl:mb-10 xl:w-[500px] xl:ml-40">
            Scooter sharing made simple
          </h1>
          <div className="xl:flex xl:relative">
            <img
              className="hidden absolute top-10 xl:block"
              src={straightLine}
              alt="straight line"
            />
            <div className="xl:ml-64">
              <p className="mb-8 text-white xl:text-justify xl:w-[405px]">
                Scoot takes the hassle out of urban mobility. Our bikes are
                placed in convenient locations in each of our cities. Use our
                app to locate the nearest bike, unlock it with a tap, and you’re
                away!
              </p>
              <button type="button" className="btn w-[180px]">
                get scootin
              </button>
            </div>
            <img
              className="absolute left-0 -translate-x-[66%] bottom-[30px] sm:-translate-x-[27%] xl:translate-x-0 xl:static xl:ml-10 xl:mt-9"
              src={arrow}
              alt="arrow icon"
            />
            <img
              className="hidden sm:block absolute right-0 bottom-11 xl:hidden 1.5xl:block 1.5xl:bottom-4"
              src={circleIcons}
              alt="circle icons"
            />
          </div>
        </section>
      </motion.section>
      {/* User Guide */}
      <section className="pt-32 px-8 flex flex-col items-center relative gap-12 sm:items-start sm:px-16 md:px-24 lg:flex-row lg:pt-0 lg:mt-32 lg:gap-10 xl:px-44">
        <motion.div
          variants={fadeIn}
          viewport={{ ...viewPortOptions, amount: 0.5 }}
          initial="hide"
          whileInView="show"
          className="hidden absolute bg-light-gray w-4 h-[80%] left-28 -translate-x-1/2 -z-20 top-0 sm:block md:left-36 lg:left-0 lg:translate-x-0 lg:h-4 lg:w-[67.6%] lg:top-12 lg:-translate-y-1/2"
        ></motion.div>
        {userGuide.map((item, index) => (
          <Steps key={index} {...item} />
        ))}
      </section>
      {/* Product Info */}
      <section className="info-block">
        {productInfo.map((item, index) => (
          <SingleProductInfo key={index} {...item} showButton={true} buttonText="learn more" />
        ))}
      </section>
    </main>
  );
};
export default Home;
