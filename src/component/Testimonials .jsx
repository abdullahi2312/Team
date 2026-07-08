
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/90/1e/9c/901e9c722dfc110924863b61ae7d64a2.jpg",
    name: "John Smith",
    job: "Web Developer",
    review:
      "Excellent products and super fast delivery. I will definitely shop here again.",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/0c/22/90/0c2290cf168019e6cbfe5cb31187a471.jpg",
    name: "Sarah Johnson",
    job: "UI Designer",
    review:
      "Amazing quality with affordable prices. Highly recommended!",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/1a/74/88/1a7488fbdcca5c85187e100ef6b4afc6.jpg",
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

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-3">
            Thousands of happy customers trust My Shop every day.
          </p>
        </div>

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