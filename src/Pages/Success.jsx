import { useNavigate } from "react-router-dom";
import Product from "./Product";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center relative">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-white shadow-md px-4 py-2 rounded-lg hover:bg-gray-100"
      >
         Back
      </button>

      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Successful 
        </h1>

        <p className="text-gray-500 text-lg">
          Thank you for shopping with us
        </p>
      </div>
    </div>
  );
}

export default Success;