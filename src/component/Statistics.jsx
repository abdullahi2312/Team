
import {
    FaUsers,
    FaBoxOpen,
    FaShoppingBag,
    FaGlobe,
    FaStar,
    FaAward,
  } from "react-icons/fa";
  
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      number: "10K+",
      title: "Happy Customers",
    },
    {
      id: 2,
      icon: <FaBoxOpen />,
      number: "500+",
      title: "Products",
    },
    {
      id: 3,
      icon: <FaShoppingBag />,
      number: "20K+",
      title: "Orders Delivered",
    },
    {
      id: 4,
      icon: <FaGlobe />,
      number: "25+",
      title: "Countries Served",
    },
    {
      id: 5,
      icon: <FaStar />,
      number: "4.9",
      title: "Customer Rating",
    },
    {
      id: 6,
      icon: <FaAward />,
      number: "8+",
      title: "Years Experience",
    },
  ];
  
  function Statistics () {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center text-white mb-14">
            <span className="uppercase tracking-widest text-blue-200">
              Our Achievements
            </span>
  
            <h2 className="text-4xl font-bold mt-3">
              Trusted by Thousands of Customers
            </h2>
  
            <p className="mt-4 max-w-2xl mx-auto text-gray-200">
              These numbers reflect our commitment to providing
              quality products and excellent customer service.
            </p>
          </div>
  
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
  
            {stats.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 text-center shadow-xl
                hover:-translate-y-3 hover:scale-105
                transition duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100
                flex items-center justify-center text-blue-600 text-4xl">
                  {item.icon}
                </div>
  
                <h3 className="text-4xl font-bold text-gray-800 mt-6">
                  {item.number}
                </h3>
  
                <p className="text-gray-500 mt-2 text-lg">
                  {item.title}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Statistics;