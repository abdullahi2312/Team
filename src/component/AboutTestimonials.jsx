import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/6b/94/30/6b9430c1c6b6041e8008f301e813028a.jpg",
    name: "Ahmed Hassan",
    job: "Software Engineer",
    review:
      "My Shop has amazing products with excellent quality. The delivery was fast, and customer support was very helpful.",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/2b/b6/3e/2bb63eb96b47d44977cf2ba77145f127.jpg",
    name: "Amina Ali",
    job: "Graphic Designer",
    review:
      "I really enjoyed shopping here. Everything arrived on time and exactly as described. Highly recommended!",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/29/9f/22/299f2236df1a6ddf043684722ea7f29e.jpg",
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

              <div className="flex justify-center text-yellow-400 mb-6">
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