import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Pages/Productcontext";

function Hero() {
  const navigate = useNavigate();
  const { products } = useProducts();

  return (
    <section className="bg-gradient-to-r from-slate-50 to-blue-50 min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Best Online Store
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Discover Amazing
              <span className="text-blue-600 block">Products</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Find the best products at affordable prices. Quality products with
              fast delivery.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button
                onClick={() => navigate("/product")}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-700 hover:scale-105 transition"
              >
                Shop Now
                <FaArrowRight />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <FaTruck className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Free Shipping</h4>
                  <p className="text-sm text-gray-500">Orders over $50</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaUndo className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">30 Days Return</h4>
                  <p className="text-sm text-gray-500">Money Back</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Secure Payment</h4>
                  <p className="text-sm text-gray-500">100% Secure</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

            {products.length > 0 && (
              <img
                src={products[1].image}
                alt=""
                className="relative z-10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;