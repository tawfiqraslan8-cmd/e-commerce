import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <div className="bg-[#bbdefb] text-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message or reach us using the information below.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              className="bg-[#0077b6] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <FaMapMarkerAlt className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">Address</h3>
              <p className="text-gray-600">
                Riyadh, Saudi Arabia
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <FaPhoneAlt className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">Phone</h3>
              <p className="text-gray-600">
                +966 50 123 4567
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <FaEnvelope className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <p className="text-gray-600">
                support@example.com
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <FaClock className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">Working Hours</h3>
              <p className="text-gray-600">
                Sunday - Thursday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}