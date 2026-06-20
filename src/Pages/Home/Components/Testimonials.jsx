function Testimonials() {
  const reviews = [
    {
      name: "Priya Verma",
      review:
        "Best organic farm products I have ever purchased.",
    },
    {
      name: "Amit Singh",
      review:
        "A2 milk quality is amazing and always delivered fresh.",
    },
    {
      name: "Roopkishor Sharma",
      review:
        "Exceptional service and top-quality products. Will definitely recommend!",
    },
    {
      name: "Ritika Patel",
      review:
        "Outstanding quality and excellent customer service.",
    },
    {
      name: "Ambika Sharma",
      review:
        "Amazing products and great service!",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-8xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#1F3D2B]">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F4E9] p-8 rounded-3xl shadow-lg"
            >
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-4 text-gray-700">
                {item.review}
              </p>

              <h4 className="mt-5 font-semibold text-[#1F3D2B]">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;