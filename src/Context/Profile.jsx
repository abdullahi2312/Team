import { useState } from "react";
import { useUser } from "./Usercontext";
import { useOrders } from "./Ordercontext";
import { useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaShoppingBag,
  FaMoneyBillWave,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

function Profile() {
  const { user, updateUser, logout } = useUser();

  const { orders } = useOrders();

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const [name, setName] = useState(user.name || "");

  const myOrders = orders.filter(
    (order) => order.email === user.email
  );

  const totalPaid = myOrders.reduce(
    (sum, order) =>
      order.payment === "Paid"
        ? sum + Number(order.total)
        : sum,
    0
  );

  const totalProducts = myOrders.reduce(
    (sum, order) => sum + order.items.length,
    0
  );

  const changeName = () => {
    if (!name.trim()) {
      alert("Enter your name");
      return;
    }

    updateUser(name);

    alert("Profile Updated Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-10 px-4 mt-[70px]">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="h-36 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

          <div className="px-8 pb-8">

            <div className="-mt-16 flex flex-col md:flex-row md:justify-between md:items-center">

              <div className="flex flex-col md:flex-row items-center gap-5">

                <div className="bg-white rounded-full p-2 shadow-xl">

                  <FaUserCircle className="text-[110px] text-blue-600"/>

                </div>

                <div className="text-center md:text-left">

                  <h1 className="text-3xl font-bold mt-5">
                    {user.name}
                  </h1>

                  <p className="text-gray-500">
                    {user.email}
                  </p>

                  <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                    Customer Account
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <FaShoppingBag className="text-4xl text-blue-600 mb-3"/>

            <p className="text-gray-500">
              Orders
            </p>

            <h1 className="text-3xl font-bold">
              {myOrders.length}
            </h1>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <FaMoneyBillWave className="text-4xl text-green-600 mb-3"/>

            <p className="text-gray-500">
              Total Paid
            </p>

            <h1 className="text-3xl font-bold text-green-600">
              ${totalPaid}
            </h1>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <FaShoppingBag className="text-4xl text-purple-600 mb-3"/>

            <p className="text-gray-500">
              Products Purchased
            </p>

            <h1 className="text-3xl font-bold text-purple-600">
              {totalProducts}
            </h1>

          </div>

        </div>

        {/* Edit Profile */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold flex items-center gap-2 mb-5">

            <FaEdit/>

            Edit Profile

          </h2>

          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <button
            onClick={changeName}
            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Save Changes
          </button>

        </div>

        {/* Order History */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Order History
          </h2>

          {myOrders.length === 0 ? (

            <div className="text-center py-10 text-gray-500">
              No Orders Found
            </div>

          ) : (

            <div className="space-y-6">

              {myOrders.map((order) => (

                <div
                  key={order.id}
                  className="border rounded-2xl p-5 hover:shadow-lg transition"
                >

                  <div className="flex flex-col md:flex-row md:justify-between gap-4">

                    <div>

                      <h2 className="font-bold text-xl">
                        Order #{order.id}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Date : {order.date}
                      </p>

                      <p className="text-gray-500">
                        Payment Method : {order.paymentMethod}
                      </p>

                      <p
                        className={`font-semibold ${
                          order.payment === "Paid"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        Payment Status : {order.payment}
                      </p>

                      <p className="text-blue-600 font-semibold">
                        Order Status : {order.status}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-gray-500">
                        Total
                      </p>

                      <h1 className="text-3xl font-bold text-blue-600">
                        ${order.total}
                      </h1>

                    </div>

                  </div>

                  <hr className="my-5" />

                  <div className="space-y-4">

                    {order.items.map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center justify-between border rounded-xl p-3"
                      >

                        <div className="flex items-center gap-4">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-xl object-cover"
                          />

                          <div>

                            <h3 className="font-bold">
                              {item.name}
                            </h3>

                            <p className="text-gray-500">
                              ${item.price}
                            </p>

                          </div>

                        </div>

                        <div>

                          <span className="text-blue-600 font-bold">
                            ${item.price}
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Profile;