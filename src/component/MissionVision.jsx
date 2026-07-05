
import {
    FaBullseye,
    FaEye,
    FaGem,
  } from "react-icons/fa";
  
  function MissionVision () {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Mission & Vision
            </span>
  
            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              Building Trust Through Quality & Innovation
            </h2>
  
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
              Our goal is to provide every customer with a safe,
              simple, and enjoyable shopping experience while
              delivering high-quality products at affordable prices.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
  
            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl duration-300">
  
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl text-blue-600">
                <FaBullseye />
              </div>
  
              <h3 className="text-2xl font-bold mt-6">
                Our Mission
              </h3>
  
              <p className="text-gray-600 mt-4 leading-8">
                To provide quality products at affordable prices,
                fast delivery, and outstanding customer service for
                every shopper.
              </p>
  
            </div>
  
            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl duration-300">
  
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl text-green-600">
                <FaEye />
              </div>
  
              <h3 className="text-2xl font-bold mt-6">
                Our Vision
              </h3>
  
              <p className="text-gray-600 mt-4 leading-8">
                To become one of the most trusted online shopping
                platforms by offering excellent products and a
                world-class customer experience.
              </p>
  
            </div>
  
            {/* Values */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl duration-300">
  
              <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-4xl text-yellow-500">
                <FaGem />
              </div>
  
              <h3 className="text-2xl font-bold mt-6">
                Our Values
              </h3>
  
              <ul className="mt-4 space-y-3 text-gray-600">
  
                <li>✔ Customer Satisfaction</li>
  
                <li>✔ Product Quality</li>
  
                <li>✔ Honesty & Transparency</li>
  
                <li>✔ Innovation & Growth</li>
  
                <li>✔ Fast & Reliable Delivery</li>
  
              </ul>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default MissionVision;