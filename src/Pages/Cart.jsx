import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Reducer/Index";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartItem = useSelector(
    (state) => state.cart.cartItem || []
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {cartItem.length === 0 ? (
        <h2 className="text-center text-gray-500 text-xl">
          Cart is empty
        </h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="md:col-span-2 space-y-5">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  className="w-[120px] h-[120px] object-cover rounded-lg"
                  src={item.image}
                  alt=""
                />

                <div>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.cartId))}
                  className="ml-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">
              Order Summary
            </h2>

            <p className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{cartItem.length}</span>
            </p>

            <p className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="font-bold text-blue-600">
                $
                {cartItem.reduce(
                  (total, item) => total + Number(item.price),
                  0
                )}
              </span>
            </p>

            <Link to="/checkout">
            <button className="w-full bg-black text-white py-3 rounded-lg">
             Checkout
             </button>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;