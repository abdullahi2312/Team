import { FaStar, FaQuoteLeft } from "react-icons/fa";

import customer1 from "../assets/customers/customer1.jpg";
import customer2 from "../assets/customers/customer2.jpg";
import customer3 from "../assets/customers/customer3.jpg";

const testimonials = [
  {
    id: 1,
    image: customer1,
    name: "Ahmed Hassan",
    job: "Software Engineer",
    review:
      "My Shop has amazing products with excellent quality. The delivery was fast, and customer support was very helpful.",
  },
  {
    id: 2,
    image: customer2,
    name: "Amina Ali",
    job: "Graphic Designer",
    review:
      "I really enjoyed shopping here. Everything arrived on time and exactly as described. Highly recommended!",
  },
  {
    id: 3,
    image: customer3,
    name: "Mohamed Noor",
    job: "Business Owner",
    review:
      "The website is easy to use, prices are affordable, and the overall shopping experience is excellent.",
  },
];

const AboutTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We are proud to have thousands of satisfied customers around the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <FaQuoteLeft className="text-5xl text-blue-600 mb-6" />

              <p className="text-gray-600 leading-8 mb-6">
                {item.review}
              </p>

              {/* Rating */}
              <div className="flex justify-center text-yellow-400 mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Customer */}
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-blue-600 object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
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

export default AboutTestimonials;