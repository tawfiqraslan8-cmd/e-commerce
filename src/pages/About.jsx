import {
  FaChartLine,
  FaBoxOpen,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Sales Analytics",
      desc: "Track sales performance with detailed charts and reports.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Product Management",
      desc: "Manage products, prices, stock, and categories easily.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Insights",
      desc: "Understand customer activity and improve business decisions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Dashboard",
      desc: "Protected access with a clean and responsive interface.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <div className="bg-[#bbdefb] text-black py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            About Our Dashboard
          </h1>

          <p className="text-lg max-w-3xl leading-8">
            Our dashboard helps businesses monitor sales, manage products,
            analyze performance, and make smarter business decisions through
            a modern and user-friendly interface.
          </p>

        </div>
      </div>

      {/* About */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              We provide a complete management dashboard designed for
              businesses that want to organize products, monitor sales,
              and improve overall performance.
            </p>

            <p className="text-gray-600 leading-8">
              The system is built to be simple, fast, and responsive,
              giving managers quick access to all important business data.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Dashboard Highlights
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Total Products</span>
                <span className="font-bold">500+</span>
              </div>

              <div className="flex justify-between">
                <span>Monthly Orders</span>
                <span className="font-bold">5,300+</span>
              </div>

              <div className="flex justify-between">
                <span>Customers</span>
                <span className="font-bold">10K+</span>
              </div>

              <div className="flex justify-between">
                <span>Performance</span>
                <span className="font-bold text-green-600">
                  Excellent
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              <div className="text-4xl text-blue-600 mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}