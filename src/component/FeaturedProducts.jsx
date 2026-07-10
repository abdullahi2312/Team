import Data from "../Xoogta/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer/Index";
import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-3">
            Explore our best-selling products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-110 duration-500"
                />

                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  -{item.discount}%
                </span>

          
              </div>

              <div className="p-5">
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array.from({
                    length: Math.floor(item.rating),
                  }).map((_, index) => (
                    <FaStar key={index} />
                  ))}

                  <span className="ml-2 text-gray-500 text-sm">
                    ({item.rating})
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {item.category}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-600 font-bold text-xl">
                    ${item.price}
                  </span>

                  <span className="line-through text-gray-400">
                    ${item.oldPrice}
                  </span>
                </div>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  disabled={Number(item.stock || 0) <= 0}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${Number(item.stock || 0) <= 0 ? "cursor-not-allowed bg-slate-200 text-slate-500" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                >
                  <FaShoppingCart />
                  {Number(item.stock || 0) <= 0 ? "Coming Soon" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
