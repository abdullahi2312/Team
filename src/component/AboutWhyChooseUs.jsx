
import {
    FaShippingFast,
    FaCreditCard,
    FaUndoAlt,
    FaHeadset,
    FaAward,
    FaShieldAlt,
  } from "react-icons/fa";
  
  const features = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description:
        "We deliver your orders quickly and safely to your doorstep.",
    },
    {
      id: 2,
      icon: <FaCreditCard />,
      title: "Secure Payment",
      description:
        "Your payments are protected with trusted and secure systems.",
    },
    {
      id: 3,
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      description:
        "Enjoy a simple and hassle-free return policy within 30 days.",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our support team is available anytime you need assistance.",
    },
    {
      id: 5,
      icon: <FaAward />,
      title: "Premium Quality",
      description:
        "We carefully select products to ensure the highest quality.",
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Trusted Brand",
      description:
        "Thousands of customers trust My Shop for reliable online shopping.",
    },
  ];
  
  const AboutWhyChooseUs = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>
  
            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              We Make Shopping Better Every Day
            </h2>
  
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
              At My Shop, we focus on quality, customer satisfaction,
              and a secure shopping experience for everyone.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {features.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-3xl p-8 text-center shadow-md
                hover:bg-blue-600 hover:text-white
                hover:-translate-y-3 hover:shadow-2xl
                transition duration-300 group"
              >
                <div
                  className="w-20 h-20 mx-auto rounded-full bg-blue-100
                  flex items-center justify-center text-4xl text-blue-600
                  group-hover:bg-white group-hover:text-blue-600
                  transition duration-300"
                >
                  {item.icon}
                </div>
  
                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>
  
                <p className="mt-4 leading-7 opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default AboutWhyChooseUs;