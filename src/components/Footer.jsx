import appleLogo from "../assets/icons/apple-logo.svg";
import googlePlayLogo from "../assets/icons/google-play-logo.svg";
import appStoreText from "../assets/icons/app-store-text.svg";
import googlePlayText from "../assets/icons/google-play-text.svg";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data";
import { fadeIn } from "../framer-variants";
import { motion } from "framer-motion";
import { viewPortOptions } from "../framer-variants";

const Footer = () => {
  return (
    <footer className="mt-[120px] lg:mt-40">
      <motion.section
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
        className="bg-footer-mobile bg-bottom bg-no-repeat bg-dark-navy px-8 py-24 xs:bg-footer-tablet sm:px-28 md:px-40 md:bg-footer-desktop md:bg-right-bottom lg:px-24 lg:flex lg:items-center lg:justify-between xl:px-44"
      >
        <h1 className="text-[32px] text-center text-white sm:heading-2 lg:text-left lg:w-[415px]">
          Sign up and Scoot off today
        </h1>
        <div className="mt-10 flex justify-center gap-4 lg:mt-0 lg:scale-110 lg:origin-right">
          <div
            role="button"
            className="bg-light-gray flex gap-2 px-3 py-2 rounded cursor-pointer hover:scale-105 my-transition"
          >
            <img className="w-5" src={appleLogo} alt="apple logo" />
            <img src={appStoreText} alt="available on the app store" />
          </div>
          <div
            role="button"
            className="bg-light-gray flex gap-2 px-4 py-2 rounded cursor-pointer hover:scale-105 my-transition"
          >
            <img className="" src={googlePlayLogo} alt="apple logo" />
            <img src={googlePlayText} alt="get it on google play" />
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
      >
        <nav className="bg-dark-gray pt-16 flex flex-col items-center gap-10 pb-20 sm:flex-row sm:py-9 sm:px-10 sm:justify-between md:justify-start md:gap-16 lg:px-24 xl:px-44">
          <Link to="/">
            <svg
              width="107"
              height="28"
              viewBox="0 0 76 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.998 16.2465V19.6078H69.1156C68.4807 19.6078 67.9625 19.4024 67.561 18.9916C67.1595 18.5808 66.9588 18.0579 66.9588 17.423V9.07563H62.8411V5.71429H66.9588V0H70.4882V5.71429H75.5022V9.07563H70.4882V15.4062C70.4882 15.9664 70.7403 16.2465 71.2445 16.2465H74.998ZM6.38655 20C8.21662 20 9.63585 19.5892 10.6443 18.7675C11.6527 17.9458 12.1569 16.8441 12.1569 15.4622V15.2941C12.1569 14.043 11.7087 13.0672 10.8123 12.3669C9.91597 11.6667 8.75817 11.2418 7.33894 11.0924C6.10644 10.9617 5.25677 10.7983 4.78992 10.6022C4.32306 10.4062 4.08964 10.084 4.08964 9.63585C4.08964 9.31839 4.23903 9.05229 4.53782 8.83753C4.8366 8.62278 5.28478 8.51541 5.88235 8.51541C6.53595 8.51541 7.06816 8.66013 7.47899 8.94958C7.88982 9.23903 8.17927 9.63585 8.34734 10.1401L11.5406 8.85154C11.3912 8.45938 11.1765 8.05322 10.8964 7.63305C10.6162 7.21288 10.2521 6.83007 9.80392 6.48459C9.35574 6.13912 8.80952 5.85901 8.16527 5.64426C7.52101 5.4295 6.76004 5.32213 5.88235 5.32213C5.21008 5.32213 4.55649 5.4155 3.92157 5.60224C3.28665 5.78898 2.72642 6.06443 2.2409 6.42857C1.75537 6.79272 1.36321 7.23623 1.06443 7.7591C0.76564 8.28198 0.616247 8.88889 0.616247 9.57983V9.7479C0.616247 11.0738 1.07843 12.0775 2.0028 12.7591C2.92717 13.4407 4.17367 13.8469 5.7423 13.9776C6.3212 14.0336 6.80205 14.1083 7.18487 14.2017C7.56769 14.2951 7.87115 14.4118 8.09524 14.5518C8.31933 14.6919 8.47339 14.8413 8.55742 15C8.64146 15.1587 8.68347 15.3315 8.68347 15.5182C8.68347 15.8357 8.52007 16.1298 8.19328 16.4006C7.86648 16.6713 7.26424 16.8067 6.38655 16.8067C5.39683 16.8067 4.66387 16.5826 4.18767 16.1345C3.71148 15.6863 3.39869 15.1634 3.2493 14.5658L0 15.6303C0.0933707 16.1158 0.275444 16.6153 0.546219 17.1289C0.816993 17.6424 1.20448 18.1092 1.70868 18.5294C2.21289 18.9496 2.84781 19.2997 3.61345 19.5798C4.37909 19.8599 5.30345 20 6.38655 20ZM22.1108 20C24.0903 20 25.6729 19.4958 26.8587 18.4874C28.0446 17.479 28.7962 16.1531 29.1136 14.5098L25.6403 13.6415C25.4722 14.5565 25.1034 15.2848 24.5338 15.8263C23.9643 16.3679 23.1379 16.6387 22.0548 16.6387C21.5506 16.6387 21.0744 16.5593 20.6263 16.4006C20.1781 16.2418 19.7859 16.0037 19.4498 15.6863C19.1136 15.3688 18.8475 14.972 18.6515 14.4958C18.4554 14.0196 18.3573 13.4734 18.3573 12.8571V12.6891C18.3573 12.0728 18.4554 11.5173 18.6515 11.0224C18.8475 10.5275 19.1136 10.1074 19.4498 9.7619C19.7859 9.41643 20.1781 9.15033 20.6263 8.96358C21.0744 8.77684 21.5506 8.68347 22.0548 8.68347C23.1379 8.68347 23.9783 8.98226 24.5758 9.57983C25.1734 10.1774 25.5282 10.887 25.6403 11.7087L29.1136 10.8123C28.7962 9.169 28.0352 7.84314 26.8307 6.83473C25.6263 5.82633 24.053 5.32213 22.1108 5.32213C21.1024 5.32213 20.1547 5.4902 19.2677 5.82633C18.3807 6.16247 17.6057 6.64799 16.9428 7.28291C16.2798 7.91783 15.7616 8.68347 15.3882 9.57983C15.0147 10.4762 14.8279 11.4846 14.8279 12.605V12.9412C14.8279 14.0616 15.0147 15.0607 15.3882 15.9384C15.7616 16.8161 16.2752 17.5537 16.9288 18.1513C17.5824 18.7488 18.3527 19.2064 19.2397 19.5238C20.1267 19.8413 21.0838 20 22.1108 20ZM40.5662 19.5238C39.6979 19.8413 38.7875 20 37.8351 20C36.8828 20 35.9724 19.8413 35.104 19.5238C34.2357 19.2064 33.4654 18.7442 32.7931 18.1373C32.1208 17.5303 31.5886 16.7834 31.1965 15.8964C30.8043 15.0093 30.6082 13.9869 30.6082 12.8291V12.493C30.6082 11.3539 30.8043 10.3408 31.1965 9.45378C31.5886 8.56676 32.1208 7.81513 32.7931 7.19888C33.4654 6.58263 34.2357 6.11578 35.104 5.79832C35.9724 5.48086 36.8828 5.32213 37.8351 5.32213C38.7875 5.32213 39.6979 5.48086 40.5662 5.79832C41.4346 6.11578 42.2049 6.58263 42.8772 7.19888C43.5494 7.81513 44.0816 8.56676 44.4738 9.45378C44.8659 10.3408 45.062 11.3539 45.062 12.493V12.8291C45.062 13.9869 44.8659 15.0093 44.4738 15.8964C44.0816 16.7834 43.5494 17.5303 42.8772 18.1373C42.2049 18.7442 41.4346 19.2064 40.5662 19.5238ZM37.8351 16.6387C37.3309 16.6387 36.8547 16.5546 36.4066 16.3866C35.9584 16.2185 35.5662 15.9757 35.2301 15.6583C34.894 15.3408 34.6278 14.9533 34.4318 14.4958C34.2357 14.0383 34.1377 13.5201 34.1377 12.9412V12.381C34.1377 11.8021 34.2357 11.2838 34.4318 10.8263C34.6278 10.3688 34.894 9.98133 35.2301 9.66387C35.5662 9.34641 35.9584 9.10364 36.4066 8.93557C36.8547 8.76751 37.3309 8.68347 37.8351 8.68347C38.3393 8.68347 38.8155 8.76751 39.2637 8.93557C39.7119 9.10364 40.104 9.34641 40.4402 9.66387C40.7763 9.98133 41.0424 10.3688 41.2385 10.8263C41.4346 11.2838 41.5326 11.8021 41.5326 12.381V12.9412C41.5326 13.5201 41.4346 14.0383 41.2385 14.4958C41.0424 14.9533 40.7763 15.3408 40.4402 15.6583C40.104 15.9757 39.7119 16.2185 39.2637 16.3866C38.8155 16.5546 38.3393 16.6387 37.8351 16.6387ZM56.4586 19.5238C55.5902 19.8413 54.6799 20 53.7275 20C52.7751 20 51.8647 19.8413 50.9964 19.5238C50.128 19.2064 49.3577 18.7442 48.6855 18.1373C48.0132 17.5303 47.481 16.7834 47.0888 15.8964C46.6967 15.0093 46.5006 13.9869 46.5006 12.8291V12.493C46.5006 11.3539 46.6967 10.3408 47.0888 9.45378C47.481 8.56676 48.0132 7.81513 48.6855 7.19888C49.3577 6.58263 50.128 6.11578 50.9964 5.79832C51.8647 5.48086 52.7751 5.32213 53.7275 5.32213C54.6799 5.32213 55.5902 5.48086 56.4586 5.79832C57.3269 6.11578 58.0972 6.58263 58.7695 7.19888C59.4418 7.81513 59.974 8.56676 60.3661 9.45378C60.7583 10.3408 60.9544 11.3539 60.9544 12.493V12.8291C60.9544 13.9869 60.7583 15.0093 60.3661 15.8964C59.974 16.7834 59.4418 17.5303 58.7695 18.1373C58.0972 18.7442 57.3269 19.2064 56.4586 19.5238ZM53.7275 16.6387C53.2233 16.6387 52.7471 16.5546 52.2989 16.3866C51.8507 16.2185 51.4586 15.9757 51.1224 15.6583C50.7863 15.3408 50.5202 14.9533 50.3241 14.4958C50.128 14.0383 50.03 13.5201 50.03 12.9412V12.381C50.03 11.8021 50.128 11.2838 50.3241 10.8263C50.5202 10.3688 50.7863 9.98133 51.1224 9.66387C51.4586 9.34641 51.8507 9.10364 52.2989 8.93557C52.7471 8.76751 53.2233 8.68347 53.7275 8.68347C54.2317 8.68347 54.7079 8.76751 55.1561 8.93557C55.6042 9.10364 55.9964 9.34641 56.3325 9.66387C56.6687 9.98133 56.9348 10.3688 57.1309 10.8263C57.3269 11.2838 57.425 11.8021 57.425 12.381V12.9412C57.425 13.5201 57.3269 14.0383 57.1309 14.4958C56.9348 14.9533 56.6687 15.3408 56.3325 15.6583C55.9964 15.9757 55.6042 16.2185 55.1561 16.3866C54.7079 16.5546 54.2317 16.6387 53.7275 16.6387Z"
                fill="#FFFFFF"
              />
            </svg>
          </Link>
          <ul className="flex gap-6 flex-col items-center mb-20 sm:flex-row sm:mb-0">
            {navLinks.map((item) => (
              <li key={item} className="text-dim-gray capitalize font-bold">
                <NavLink className="hover:text-yellow my-transition" to={item}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 items-center md:absolute md:right-10 lg:right-24 xl:right-44">
            <a href="#f">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="fill-yellow hover:fill-white my-transition"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                className="fill-yellow hover:fill-white my-transition"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-yellow hover:fill-white my-transition"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
                />
              </svg>
            </a>
          </div>
        </nav>
        <div className="bg-dark-gray text-white text-center  px-8 pb-4 text-sm lg:px-24 xl:px-44">
          <p>
            Coded by{" "}
            <a
              className="text-yellow underline"
              href="https://www.frontendmentor.io/profile/Ihezie"
            >
              Raymond Ogbuehi
            </a>
          </p>
          <p className="text-[13px]">
            Design by Figma user{" "}
            <a
              className="text-yellow underline"
              href="https://www.figma.com/@azamatxakimov"
            >
              Azamat Xakimov
            </a>
          </p>
        </div>
      </motion.section>
    </footer>
  );
};
export default Footer;
