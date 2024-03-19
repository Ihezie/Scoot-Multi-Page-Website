import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="flex flex-col text-center h-screen justify-center items-center gap-16 md:px-[20%]">
      <h1 className="text-2xl px-8 md:text-3xl lg:text-4xl xl:text-5xl xl:leading-normal">
        Oops! This page could not be found.
      </h1>
      <button type="button" className="btn w-[180px]">
        <Link to="/">Back to home</Link>
      </button>
    </main>
  );
};
export default Error;
