import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/Usercontext";

function Checkout() {
  const navigate = useNavigate();

  const { user } = useUser();

  const cartItem = useSelector(
    (state) => state.cart.cartItem || []
  );

  const product =
    JSON.parse(localStorage.getItem("buyNow")) || null;

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const items = product ? [product] : cartItem;

  const total = items.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    if (items.length === 0) {
      alert("No products found");
      return;
    }

    const orderData = {
      id: Date.now(),

      email: user?.email,

      customer: name,

      phone,

      address,

      items,

      total,

      payment: "Not Paid",

      paymentMethod: "",

      status: "Pending",

      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orderData",
      JSON.stringify(orderData)
    );

    localStorage.removeItem("buyNow");

    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-[80px]">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Checkout
        </h1>

        <div className="bg-gray-100 rounded-lg p-4 mb-5">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-3">

                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div>
                  <h2 className="font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    ${item.price}
                  </p>
                </div>

              </div>

              <span className="font-bold text-blue-600">
                ${item.price}
              </span>
            </div>
          ))}

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>

            <span className="text-blue-600">
              ${total}
            </span>
          </div>

        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3 outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3 outline-none"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded-lg p-3 mb-5 outline-none"
        />

        <button
          onClick={handleOrder}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          Continue Payment
        </button>

      </div>
    </div>
  );
}

export default Checkout;