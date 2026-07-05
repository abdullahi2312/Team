
import {
    FaHeart,
    FaShoppingCart,
    FaStar,
  } from "react-icons/fa";
  
  import p1 from "../assets/products/p1.jpg";
  import p2 from "../assets/products/p2.jpg";
  import p3 from "../assets/products/p3.jpg";
  import p7 from "../assets/products/p7.jpg";
  import p5 from "../assets/products/p5.jpg";
  import p6 from "../assets/products/p6.jpg";
import { image } from "framer-motion/client";

  
  const products = [
    {
      id: 1,
      image: p1,
      name: "Smart Watch",
      price: "$99",
      oldPrice: "$129",
      rating: 5,
    },
    {
      id: 2,
      image: p2,
      name: "Wireless Headphones",
      price: "$149",
      oldPrice: "$199",
      rating: 5,
    },
    {
      id: 3,
      image: p3,
      name: "Sneakers",
      price: "$39",
      oldPrice: "$59",
      rating: 4,
    },
    {
      id: 4,
      image: p7,
      name: "Bluetooth Speaker",
      price: "$89",
      oldPrice: "$120",
      rating: 5,
    },
    {
      id: 5,
      image: p5,
      name: "Hoodles",
      price: "$79",
      oldPrice: "$110",
      rating: 4,
    },
    {
      id: 6,
      image: p6,
      name: "Sunglasess",
      price: "$45",
      oldPrice: "$65",
      rating: 5,
    }
   
  ]
  
  const FeaturedProducts = () => {
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
  
            {products.map((item) => (
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
                    Sale
                  </span>
  
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white duration-300">
                    <FaHeart />
                  </button>
  
                </div>
  
                <div className="p-5">
  
                  <div className="flex text-yellow-500 mb-2">
                    {Array(item.rating)
                      .fill()
                      .map((_, index) => (
                        <FaStar key={index} />
                      ))}
                  </div>
  
                  <h3 className="text-xl font-semibold mb-2">
                    {item.name}
                  </h3>
  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-blue-600 font-bold text-xl">
                      {item.price}
                    </span>
  
                    <span className="line-through text-gray-400">
                      {item.oldPrice}
                    </span>
                  </div>
  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 duration-300">
                    <FaShoppingCart />
                    Add To Cart
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