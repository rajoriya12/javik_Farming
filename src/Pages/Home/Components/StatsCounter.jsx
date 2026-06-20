function StatsCounter() {
  const stats = [
    {
      number: "5000+",
      title: "Happy Customers",
    },
    {
      number: "50+",
      title: "Organic Products",
    },
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "100%",
      title: "Natural Farming",
    },
  ];

  return (
    <section className="py-20 bg-[#1F3D2B]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#D4A017]">
                {item.number}
              </h2>

              <p className="text-white mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsCounter;