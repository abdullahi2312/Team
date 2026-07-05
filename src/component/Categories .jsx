
import {
    FaLaptop,
    FaMobileAlt,
    FaTshirt,
    FaHome,
    FaHeadphones,
    FaGamepad,
    FaWatchmanMonitoring,
    FaShoppingBag,
  } from "react-icons/fa";
  
  const categories = [
    {
      id: 1,
      title: "Electronics",
      icon: <FaLaptop />,
      items: "120 Items",
    },
    {
      id: 2,
      title: "Mobiles",
      icon: <FaMobileAlt />,
      items: "80 Items",
    },
    {
      id: 3,
      title: "Fashion",
      icon: <FaTshirt />,
      items: "150 Items",
    },
    {
      id: 4,
      title: "Home",
      icon: <FaHome />,
      items: "95 Items",
    },
    {
      id: 5,
      title: "Audio",
      icon: <FaHeadphones />,
      items: "70 Items",
    },
    {
      id: 6,
      title: "Gaming",
      icon: <FaGamepad />,
      items: "60 Items",
    },
    {
      id: 7,
      title: "Watches",
      icon: <FaWatchmanMonitoring />,
      items: "45 Items",
    },
    {
      id: 8,
      title: "Accessories",
      icon: <FaShoppingBag />,
      items: "100 Items",
    },
  ];
  
  function Categories () {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
  
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Shop By Category
            </h2>
  
            <p className="text-gray-500 mt-3">
              Discover your favorite products from different categories.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  
            {categories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-8 text-center
                hover:bg-blue-600 hover:text-white
                hover:-translate-y-3
                hover:shadow-2xl
                duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-5 flex justify-center">
                  {item.icon}
                </div>
  
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>
  
                <p className="mt-2 opacity-80">
                  {item.items}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Categories;