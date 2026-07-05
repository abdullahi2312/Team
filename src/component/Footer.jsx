import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
            
            🛍️  Online Shop
            </h2>

            <p className="mt-4 text-gray-300">
              Welcome to Online Shop. We provide quality products with affordable
              prices and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-blue-400">
                  Product
                </Link>
              </li>

              

              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>

              {/* Cart */}
              <li>
                <Link to="/cart" className="hover:text-blue-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Follow Us
            </h2>

            <div className="flex gap-4 text-2xl">
              <a href="#">
                <FaFacebook className="hover:text-blue-500" />
              </a>

              <a href="#">
                <FaTwitter className="hover:text-sky-400" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-pink-500" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-blue-300" />
              </a>
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} Online Shop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;