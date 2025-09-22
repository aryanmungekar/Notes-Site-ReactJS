import { Link } from "react-router-dom";
import Nf from '../Images/404.png'

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center bg-transparent text-center">
      <img src={Nf} className="w-100" alt="Not Found"/>
      {/* <h1 className="text-6xl font-bold text-red-600">404</h1> */}
      <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
      <p className="mt-2 text-gray-500">The page you’re looking for doesn’t exist.</p>

      <Link
        to="/"
      >
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mt-5">Go Home</button>

      </Link>
    </div>
  );
}   