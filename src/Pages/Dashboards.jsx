import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaBars,
  FaTimes,
  FaStore,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

function Dashboards() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Logged in admin
  const admin = JSON.parse(localStorage.getItem("admin"));

  const role = admin?.role || "";

  const isSuperAdmin = role === "Super Admin";

  const navClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 bg-blue-700 text-yellow-300 px-4 py-3 rounded-lg font-semibold"
      : "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 hover:text-yellow-300 hover:translate-x-1 transition-all duration-300";

  const handleLogout = () => {

    localStorage.removeItem("admin");
    localStorage.removeItem("role");

    navigate("/login");

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      <button
        onClick={() => setMenuOpen(true)}
        className="lg:hidden fixed top-5 right-5 z-50 bg-blue-600 text-white p-3 rounded-lg shadow"
      >
        <FaBars />
      </button>

      {
        menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )
      }

      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-72 bg-blue-600 text-white shadow-2xl z-50 transform transition-transform duration-300

        ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0`}
      >

        <div className="flex items-center justify-between p-6 border-b border-blue-500">

          <div
            className="flex items-center gap-2 "
          >

            <FaStore className="text-yellow-300 text-2xl" />

            <h1 className="text-2xl font-bold">
              Admin Panel
            </h1>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="lg:hidden text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="mt-6 px-4">

          <ul className="space-y-3">

            {/* Dashboard */}
            {isSuperAdmin && (

              <li>

                <NavLink
                  to="/dashboard"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >

                  <FaTachometerAlt />

                  Dashboard

                </NavLink>

              </li>

            )}

            {/* Products */}
            {(isSuperAdmin || role === "Product Manager") && (

              <li>

                <NavLink
                  to="/dashboard/products"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >

                  <FaBoxOpen />

                  Products

                </NavLink>

              </li>

            )}

            {/* Orders */}
            {(isSuperAdmin || role === "Order Manager") && (

              <li>

                <NavLink
                  to="/dashboard/orders"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >

                  <FaShoppingCart />

                  Orders

                </NavLink>

              </li>

            )}

            {/* Customers */}
           {(isSuperAdmin || role === "Customer Manager") && (

              <li>

                <NavLink
                  to="/dashboard/customers"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >

                  <FaUserShield />

                  Customers

                </NavLink>

              </li>

            )}

            {/* Admin Register */}
            {isSuperAdmin && (

              <li>

                <NavLink
                  to="/dashboard/adminregister"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >

                  <FaUserShield />

                  Admin Register

                </NavLink>

              </li>

            )}

            {(isSuperAdmin || role === "Message Manager") && (

              <li>

                <NavLink
                  to="/dashboard/messages"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >

                  <FaUserShield />

                  Message

                </NavLink>

              </li>

            )}

                      </ul>

        </nav>

        <div className="absolute bottom-6 left-0 w-full px-6">

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold mb-4"
          >
            <FaSignOutAlt />

            Logout

          </button>

          <div className="border-t border-blue-500 pt-4 text-center text-sm text-blue-100">

            © 2026 Admin Dashboard

          </div>

        </div>

      </aside>

      <main className="flex-1 p-6 lg:p-8 w-full">

        <Outlet />

      </main>

    </div>

  );

}

export default Dashboards;