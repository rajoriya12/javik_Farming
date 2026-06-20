import {
  Leaf,
  ShieldCheck,
  Truck,
  Sprout
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={40} />,
      title: "100% Organic",
      desc: "Naturally grown products without harmful chemicals.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Assured",
      desc: "Every product is carefully checked before delivery.",
    },
    {
      icon: <Truck size={40} />,
      title: "Farm Fresh Delivery",
      desc: "Fresh products delivered directly from the farm.",
    },
    {
      icon: <Sprout size={40} />,
      title: "Sustainable Farming",
      desc: "Eco-friendly farming methods for a greener future.",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F4E9]">

      <div className="max-w-8xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#1F3D2B]">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Pure, Natural and Healthy Farming Practices
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition"
            >
              <div className="text-green-400 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;