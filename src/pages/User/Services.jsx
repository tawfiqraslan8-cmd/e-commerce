import {
  FaBoxOpen,
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaBoxOpen />,
      title: "Product Management",
      desc: "Create, edit, delete, and organize your products with an easy-to-use management system.",
    },
    {
      icon: <FaChartLine />,
      title: "Sales Analytics",
      desc: "Monitor business performance through detailed reports and interactive charts.",
    },
    {
      icon: <FaShoppingCart />,
      title: "Order Management",
      desc: "Track customer orders, monitor status, and manage deliveries efficiently.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Management",
      desc: "Store customer information and analyze customer activity to improve sales.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Dashboard",
      desc: "Advanced security features to keep your business data safe and protected.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our support team is always available to help you whenever you need assistance.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <div className="bg-[#bbdefb] text-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-lg max-w-3xl mx-auto leading-8">
            We provide complete business management solutions to help
            companies organize products, monitor sales, manage customers,
            and grow faster.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Manage products, track sales, and monitor performance with one powerful dashboard.
          </p>

          <button className="bg-[#0077b6] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
}