import { FaCheckCircle } from "react-icons/fa";

function OurStory () {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://i.pinimg.com/736x/18/b4/12/18b412dc36a7a1f813df1c70c9f2caca.jpg"
              alt="Our Story"
              className="w-full h-full object-cover hover:scale-105 duration-500"
            />
          </div>

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Story
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              We Make Online Shopping Easy & Reliable
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our Shop was created to provide customers with a simple,
              secure, and enjoyable online shopping experience. We
              believe everyone deserves high-quality products at
              affordable prices.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Every day we work hard to deliver trusted products,
              excellent customer support, and fast shipping so our
              customers can shop with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>High Quality Products</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Fast Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>Secure Payment</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span>24/7 Customer Support</span>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-gray-100 rounded-2xl p-6 text-center hover:bg-blue-600 hover:text-white duration-300">
                <h3 className="text-3xl font-bold">10K+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 text-center hover:bg-blue-600 hover:text-white duration-300">
                <h3 className="text-3xl font-bold">500+</h3>
                <p>Products</p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 text-center hover:bg-blue-600 hover:text-white duration-300">
                <h3 className="text-3xl font-bold">20K+</h3>
                <p>Orders Delivered</p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 text-center hover:bg-blue-600 hover:text-white duration-300">
                <h3 className="text-3xl font-bold">4.9★</h3>
                <p>Customer Rating</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;