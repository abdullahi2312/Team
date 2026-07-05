
import {
    FaShippingFast,
    FaCreditCard,
    FaUndoAlt,
    FaHeadset,
  } from "react-icons/fa";
  
  const services = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description:
        "Free shipping on all orders over $100 anywhere in the country.",
    },
    {
      id: 2,
      icon: <FaCreditCard />,
      title: "Secure Payment",
      description:
        "100% secure payment with trusted payment gateways.",
    },
    {
      id: 3,
      icon: <FaUndoAlt />,
      title: "Money Back",
      description:
        "Easy 30-day return policy with full money-back guarantee.",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our support team is available 24 hours a day, 7 days a week.",
    },
  ];
  
  function WhyChooseUs ()  {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
  
          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800">
              Why Choose My Shop?
            </h2>
  
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We are committed to providing the best shopping experience with
              quality products, secure payments, and fast delivery.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {services.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 duration-300 text-center group"
              >
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-4xl group-hover:bg-blue-600 group-hover:text-white duration-300">
                  {item.icon}
                </div>
  
                <h3 className="text-2xl font-bold mt-6 mb-3">
                  {item.title}
                </h3>
  
                <p className="text-gray-500 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;