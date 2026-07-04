import Header from "./component/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import View from "./Pages/View"
import Checkout from "./Pages/Checkout"
import Success from "./Pages/Success"
import Payment from "./Pages/Payment"

import Login from "./Dash/Login"
import ProtectedRoute from "./Dash/ProtectedRoute"
import Signup from "./Dash/Singup"

import Dashboards from "./Pages/Dashboards"
import Overview from "./Desing/Overview"
import Products from "./Desing/Products"
import Orders from "./Desing/Orders"
import Customers from "./Desing/Customers"

import { Routes, Route, useLocation } from "react-router-dom"
import Data from "./Xoogta/Data"
import Cart from "./Pages/Cart"

function App() {
  const location = useLocation()

  return (
    <>
      {!location.pathname.includes("/dashboard") && <Header />}

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product" element={<Product Data={Data} />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/view/:id" element={<View />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<Login />} />
  <Route path="/checkout" element={<Checkout/>} />
  <Route path="/success" element={<Success/>} />
  <Route path="/Payment" element={<Payment/>} />
  <Route path="/singup" element={<Signup/>} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboards />
      </ProtectedRoute>
    }
  >
    <Route index element={<Overview />} />
    <Route path="products" element={<Products />} />
    <Route path="orders" element={<Orders />} />
    <Route path="customers" element={<Customers />} />
  </Route>
</Routes>
    </>
  )
}

export default App