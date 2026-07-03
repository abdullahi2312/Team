import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Reducer/Index";

import { FaMobileAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const order =
    JSON.parse(localStorage.getItem("orderData")) || null;

  const items = order?.items || [];

  const total = order?.total || 0;

  const [selected, setSelected] = useState("");

  const handlePay = () => {
    if (!order) {
      alert("No order found");
      return;
    }

    if (!selected) {
      alert("Select payment method");
      return;
    }

    setTimeout(() => {
      localStorage.removeItem("orderData");

      dispatch(clearCart());

      navigate("/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Payment Method
        </h1>

        <div className="bg-gray-100 p-4 rounded-xl mb-5">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between mb-1"
            >
              <span>{item.name}</span>
              <span className="font-bold text-blue-600">
                ${item.price}
              </span>
            </div>
          ))}

          <hr className="my-2" />

          <p className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total}</span>
          </p>
        </div>

        <div className="space-y-3">

          <div
            onClick={() => setSelected("EVC Plus")}
            className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${
              selected === "EVC Plus"
                ? "border-blue-600 bg-blue-50"
                : ""
            }`}
          >
            <FaMobileAlt />
            <span>EVC Plus</span>
          </div>

          <div
            onClick={() => setSelected("Zaad")}
            className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${
              selected === "Zaad"
                ? "border-blue-600 bg-blue-50"
                : ""
            }`}
          >
            <MdPayment />
            <span>Zaad</span>
          </div>

          <div
            onClick={() => setSelected("Cash")}
            className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${
              selected === "Cash"
                ? "border-blue-600 bg-blue-50"
                : ""
            }`}
          >
            <FaMoneyBillWave />
            <span>Cash on Delivery</span>
          </div>

        </div>

        <button
          onClick={handlePay}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default Payment;