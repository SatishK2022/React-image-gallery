import { Link } from "react-router-dom";
import ErrorPng from "./assets/404.png";

const Error = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
        <Link to='/' className="mt-5 py-2 px-10 bg-orange-500 text-white font-semibold rounded-md">Home</Link>
        <img className="h-[80vh]" src={ErrorPng} />
    </div>
  );
};

export default Error;
