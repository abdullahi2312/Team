
import {
    FaUsers,
    FaBoxOpen,
    FaShoppingCart,
    FaStar,
    FaPaperPlane,
  } from "react-icons/fa";
  
  function Newsletter  ()  {
    return (
      <section className="bg-blue-600 py-20">
  
        <div className="container mx-auto px-6">
    
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  
            <div className="bg-white rounded-2xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
              <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
  
              <h2 className="text-4xl font-bold">10K+</h2>
  
              <p className="text-gray-500 mt-2">
                Happy Customers
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
              <FaBoxOpen className="text-5xl text-blue-600 mx-auto mb-4" />
  
              <h2 className="text-4xl font-bold">500+</h2>
  
              <p className="text-gray-500 mt-2">
                Products
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
              <FaShoppingCart className="text-5xl text-blue-600 mx-auto mb-4" />
  
              <h2 className="text-4xl font-bold">20K+</h2>
  
              <p className="text-gray-500 mt-2">
                Orders Delivered
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-8 text-center hover:-translate-y-2 duration-300 shadow-lg">
              <FaStar className="text-5xl text-yellow-400 mx-auto mb-4" />
  
              <h2 className="text-4xl font-bold">4.9</h2>
  
              <p className="text-gray-500 mt-2">
                Customer Rating
              </p>
            </div>
  
          </div>
    
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
  
            <h2 className="text-4xl font-bold text-gray-800">
              Subscribe to Our Newsletter
            </h2>
  
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Get the latest offers, discounts, and new arrivals directly in your inbox.
            </p>
  
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
  
              <input
                type="email"
                placeholder="Enter your email..."
                className="border border-gray-300 rounded-xl px-5 py-4 w-full md:w-[420px] outline-none focus:border-blue-600"
              />
  
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 duration-300 flex items-center justify-center gap-3">
  
                <FaPaperPlane />
  
                Subscribe
  
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default Newsletter;
