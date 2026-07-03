import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Reducer/Index";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItem = useSelector(
    (state) => state.cart.cartItem || []
  );

  const product =
    JSON.parse(localStorage.getItem("buyNow")) || null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const items = product ? [product] : cartItem;

  const total = items.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Fadlan buuxi form-ka");
      return;
    }

    if (items.length === 0) {
      alert("No items found");
      return;
    }

    const orderData = {
      name,
      phone,
      address,
      items,
      total,
    };

    localStorage.setItem(
      "orderData",
      JSON.stringify(orderData)
    );

    localStorage.removeItem("buyNow");

    dispatch(clearCart());

    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Checkout
        </h1>

        <div className="bg-gray-100 p-4 rounded mb-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-blue-600 font-bold">
                ${item.price}
              </p>
            </div>
          ))}

          <hr className="my-2" />

          <p className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </p>
        </div>

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={handleOrder}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>

      </div>
    </div>
  );
}

export default Checkout;