
import { FaArrowRight } from "react-icons/fa";
import banner from "../assets/banner/banner.jpg";
import banner1 from "../assets/banner/banner1.jpg";

function SpecialOffer ()  {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="text-white">

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
              Limited Time Offer
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Big Summer Sale
            </h1>

            <h2 className="text-6xl font-extrabold text-yellow-300 mt-3">
              50% OFF
            </h2>

            <p className="mt-6 text-lg text-gray-200 leading-8">
              Don't miss our biggest sale of the season.
              Shop your favorite products today and save up to 50%.
            </p>

            <button
              className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl
              font-bold flex items-center gap-3
              hover:bg-yellow-400 hover:text-black
              transition duration-300"
            >
              Shop Now
              <FaArrowRight />
            </button>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src={banner}
              alt="Special Offer"
              className="w-full max-w-lg hover:scale-105 transition duration-500"
            />
            <div>

<img
              src={banner1}
              alt="Special Offer"
              className="w-full max-w-lg hover:scale-105 transition duration-500"
            />
</div>

          </div>



        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;