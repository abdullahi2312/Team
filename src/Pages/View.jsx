import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer/Index";
import { useProducts } from "../Pages/Productcontext";

function View() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useProducts();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  const handleBuyNow = () => {
    const buyProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };

    localStorage.setItem("buyNow", JSON.stringify(buyProduct));

    navigate("/checkout", {
      state: buyProduct,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-[50px]">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {product.discount && (
            <span className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
              -{product.discount}%
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
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
              ${product.price}
            </h2>

            {product.oldPrice && (
              <span className="line-through text-gray-400 text-xl">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <div className="mt-4">
            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {product.reviews && (
              <p className="text-gray-600 mt-1">
                {product.reviews} Reviews
              </p>
            )}
          </div>

          <p className="mt-5 text-gray-700 leading-7">
            Premium quality product with excellent durability and modern design.
          </p>

          <p className="mt-4 text-lg font-semibold">
            Stock:
            <span className="text-green-600 ml-2">
              {product.stock} Available
            </span>
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Add To Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;