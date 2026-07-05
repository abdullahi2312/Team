
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
      <div className="container mx-auto px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-12 text-center">

          {/* Small Title */}
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Start Shopping Today
          </span>

          {/* Main Title */}
          <h2 className="text-5xl font-bold text-gray-800 mt-4">
            Find Your Favorite Products
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-8 max-w-3xl mx-auto">
            Discover thousands of high-quality products with affordable prices,
            fast delivery, and secure payment. Join thousands of happy
            customers shopping with My Shop every day.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl
              flex items-center justify-center gap-3
              hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              <FaShoppingCart />
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl
              flex items-center justify-center gap-3
              hover:bg-blue-600 hover:text-white hover:scale-105
              transition duration-300"
            >
              Contact Us
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;