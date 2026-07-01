import { Link } from "react-router-dom";

function Product1({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="w-full h-[220px] sm:h-[250px] object-cover"
          src={item.image}
          alt=""
        />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800 truncate">
          {item.name}
        </h1>

        <p className="text-2xl font-semibold text-blue-600 mt-2">
          ${item.price}.00
        </p>

        <Link
          to={`/view/${item.id}`}
          className="block w-full mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold duration-300"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default Product1;