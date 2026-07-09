import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import View from "./Pages/View";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import Payment from "./Pages/Payment";

import Profile from "./Context/Profile";

import Login from "./Dash/Login";
import Signup from "./Dash/Singup";
import ProtectedRoute from "./Dash/ProtectedRoute";

import Dashboards from "./Pages/Dashboards";
import Overview from "./Desing/Overview";
import Products from "./Desing/Products";
import Orders from "./Desing/Orders";
import Customers from "./Desing/Customers";
import AdminRegister from "./Pages/AdminRegister";
import Messages from "./Desing/Messages";

import ScrollToTop from "./Scroll/ScrollToTop";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <>

      <ScrollToTop />

      {/* Header wuxuu muuqanayaa oo keliya website-ka */}
      {!location.pathname.startsWith("/dashboard") && <Header />}

      <Routes>

        {/* Website */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Product />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/view/:id" element={<View />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={<Success />} />

        <Route path="/profile" element={<Profile />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        <Route path="/singup" element={<Signup />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboards />
            </ProtectedRoute>
          }
        >

          <Route index element={<Overview />} />
                    {/* Products */}
          <Route
            path="products"
            element={
              <ProtectedRoute allowedRoles={["Product Manager"]}>
                <Products />
              </ProtectedRoute>
            }
          />

          {/* Orders */}
          <Route
            path="orders"
            element={
              <ProtectedRoute allowedRoles={["Order Manager"]}>
                <Orders />
              </ProtectedRoute>
            }
          />

          {/* Customers */}
          <Route
            path="customers"
            element={
              <ProtectedRoute allowedRoles={["Super Admin"]}>
                <Customers />
              </ProtectedRoute>
            }
          />

          <Route
            path="adminregister"
            element={
              <ProtectedRoute allowedRoles={["Super Admin"]}>
                <AdminRegister />
              </ProtectedRoute>
            }
          />

          <Route
          path="messages"
          element={
            <ProtectedRoute allowedRoles={["Message Manager"]}>
              <Messages />
            </ProtectedRoute>
          }
        />
        
        </Route>

      </Routes>

      {!location.pathname.startsWith("/dashboard") && <Footer />}

    </>
  );
}

export default App;