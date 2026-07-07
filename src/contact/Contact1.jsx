import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

function Contact1() {
  return (
    <div className="min-h-screen bg-gray-100 pt-[50px]">

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Have questions about our products, orders, or delivery?
            Contact our support team anytime.
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
              <FiPhone className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-500">+252 61 0000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
              <FiMail className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-500">abdallax089@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
              <FiMapPin className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-500">Mogadishu, Somalia</p>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-lg outline-none "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-4 rounded-lg outline-none "
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border p-4 rounded-lg outline-none resize-none"
            ></textarea>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold transition">
              Send Message
            </button>

          </form>
        </div>
        
      </section>
    </div>
    
  );
}

export default Contact1;