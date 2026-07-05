import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  const cartItem = useSelector((state) => state.cart.cartItem || []);

  return (
    <>
      <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            🛍️ Online Shop
          </h1>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-yellow-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-yellow-300">
                Product
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-yellow-300">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/cart" className="relative hover:text-yellow-300">
                <FaShoppingCart size={24} />
                  <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {cartItem.length}
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/login" className="text-xl hover:text-yellow-300">
                  <FaUser />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;