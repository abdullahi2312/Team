import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaStore,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl shadow-lg">
              <FaStore />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Online Shop
              </h2>

              <p className="text-gray-400 text-sm">
                Premium Store
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-7">
            We provide premium quality products with affordable prices,
            secure payment, and fast delivery to give every customer the
            best shopping experience.
          </p>

          <div className="flex gap-3 mt-7">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center duration-300 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center duration-300 hover:-translate-y-1"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center duration-300 hover:-translate-y-1"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center duration-300 hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4">

            <li>
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white duration-300"
              >
                <FaArrowRight className="text-xs text-blue-500" />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-400 hover:text-white duration-300"
              >
                <FaArrowRight className="text-xs text-blue-500" />
                About
              </Link>
            </li>

            <li>
              <Link
                to="/product"
                className="flex items-center gap-2 text-gray-400 hover:text-white duration-300"
              >
                <FaArrowRight className="text-xs text-blue-500" />
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="flex items-center gap-2 text-gray-400 hover:text-white duration-300"
              >
                <FaArrowRight className="text-xs text-blue-500" />
                Cart
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-400 hover:text-white duration-300"
              >
                <FaArrowRight className="text-xs text-blue-500" />
                Contact
              </Link>
            </li>

          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">
            Contact Us
          </h2>

          <div className="space-y-5">

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p>online-Shop@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p>+252 61 0000000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p>Mogadishu, Somalia</p>
              </div>
            </div>

          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Newsletter
          </h2>

          <p className="text-gray-400 mb-5">
            Subscribe to receive the latest offers and updates.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition duration-300">
              Subscribe
            </button>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">
              Payment Methods
            </h3>

            <div className="flex gap-4 text-4xl text-gray-300">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcApplePay />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Online Shop
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <Link to="#" className="hover:text-white duration-300">
              Privacy Policy
            </Link>

            <Link to="#" className="hover:text-white duration-300">
              Terms
            </Link>

            <Link to="#" className="hover:text-white duration-300">
              Support
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;