import semiCircle from "../../assets/icons/semi-circle.svg";

const SingleProductInfo = ({ image, title, text }) => {
  return (
    <div className="lg:grid lg:grid-cols-2 group lg:items-center lg:gap-24 xl:gap-44">
      <div className="mb-14 relative lg:group-odd:order-2 lg:group-odd:pr-24 lg:group-odd:pl-0 lg:pl-24 lg:mb-0 xl:group-odd:pr-44 xl:pl-44">
        <img className="rounded-full mx-auto lg:mx-0" src={image} alt={title} />
        <img
          className={`hidden md:block lg:hidden xl:block h-full absolute top-0 right-0 group-even:left-0 group-even:rotate-180`}
          src={semiCircle}
          alt="semi circle icon"
        />
      </div>
      <article className="text-center md:px-24 lg:text-left lg:pr-0 lg:group-even:pr-24 lg:group-even:pl-0 xl:group-even:pr-44 xl:pl-44">
        <h2 className="text-[32px]/8 text-dark-navy mb-8 sm:text-2xl md:heading-2">
          {title}
        </h2>
        <p className="text-dim-gray mb-8">{text}</p>
        <button type="button" className="btn w-[180px]">
          Learn More
        </button>
      </article>
    </div>
  );
};
export default SingleProductInfo;
