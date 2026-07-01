import Data from "../Xoogta/Data";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function View() {
  const { id } = useParams();
  const product = Data.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <span className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
            -{product.discount}%
          </span>

          <img
            src={product.image}
            alt=""
            className="w-full h-[500px] object-cover "
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            {product.title}
          </p>

          <div className="flex items-center gap-4 mt-5">
            <h2 className="text-3xl font-bold text-blue-600">
              ${product.price}.00
            </h2>

            <span className="line-through text-gray-400 text-xl">
              ${product.oldPrice}.00
            </span>
          </div>

          <div className="mt-4">
            <p className="text-yellow-500 text-sm flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <p className="text-gray-600 mt-1">
              {product.reviews} Reviews
            </p>
          </div>

          <p className="mt-5 text-gray-700 leading-7">
            Premium quality product with excellent durability and modern design.
            Perfect for daily use and long-term comfort.
          </p>

          <p className="mt-4 text-lg font-semibold">
            Stock:
            <span className="text-green-600 ml-2">
              {product.stock} Available
            </span>
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition">
              Add To Cart
            </button>

            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;