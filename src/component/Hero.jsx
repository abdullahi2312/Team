
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

function Hero(){
  return (
    <section className="bg-gradient-to-r from-slate-50 to-blue-50 min-h-screen  pt-24 flex items-center">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full  text-sm font-semibold">
              Best Online Store
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Discover Amazing
              <span className="text-blue-600 block">
                Products
              </span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Find the best products at affordable prices.
              Quality products with fast delivery.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">

              <button   onClick={() =>
    document.getElementById("products").scrollIntoView({
      behavior: "smooth",
    })
  }
 className="bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-700 hover:scale-105 transition">
                Shop Now
                <FaArrowRight />
              </button>

              <button className="border px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white transition">
                <FaPlay />
                Watch Video
              </button>

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="flex items-center gap-3">
                <FaTruck className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    Free Shipping
                  </h4>
                  <p className="text-sm text-gray-500">
                    Orders over $50
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaUndo className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    30 Days Return
                  </h4>
                  <p className="text-sm text-gray-500">
                    Money Back
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    Secure Payment
                  </h4>
                  <p className="text-sm text-gray-500">
                    100% Secure
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

            <img
              src="https://i.pinimg.com/736x/57/b7/a6/57b7a69821a0bf5c19d88543f17da968.jpg"
              alt="hero"
              className="relative z-10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

          </motion.div>

        </div>

      </div>
    </section>

    
  );
};

export default Hero;