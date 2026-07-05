
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import customer1 from "../assets/customers/customer1.jpg";
import customer2 from "../assets/customers/customer2.jpg";
import customer3 from "../assets/customers/customer3.jpg";

const reviews = [
  {
    id: 1,
    image: customer1,
    name: "John Smith",
    job: "Web Developer",
    review:
      "Excellent products and super fast delivery. I will definitely shop here again.",
  },
  {
    id: 2,
    image: customer2,
    name: "Sarah Johnson",
    job: "UI Designer",
    review:
      "Amazing quality with affordable prices. Highly recommended!",
  },
  {
    id: 3,
    image: customer3,
    name: "Michael Brown",
    job: "Business Owner",
    review:
      "The customer support was excellent and the shopping experience was fantastic.",
  },
];

function Testimonials () {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-3">
            Thousands of happy customers trust My Shop every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <FaQuoteLeft className="text-4xl text-blue-600 mb-5" />

              <p className="text-gray-600 leading-7 mb-6">
                {item.review}
              </p>

              <div className="flex text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-500"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.job}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;