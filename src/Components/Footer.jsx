function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-green-500">
            🌱 Laxmi Jaivik Farming
          </h2>

          <p className="mt-4 text-gray-300">
            Fresh Organic Vegetables, A2 Milk, Nursery Plants
            & Vermicompost Direct From Farm.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-lg">
              Farm Address
            </h3>

            <p className="text-gray-400 mt-2">
              Dhani-Dabda walli,
              Vill.-Kirarod,
              Via-Pragpura,
              Teh.-Paota,
              Dist.-Kotputli-Behror,
              Rajasthan - 303107
            </p>
          </div>
        </div>

        {/* Right Side Map */}
        <div>
          <iframe
            title="Farm Location"
            src="https://maps.google.com/maps?q=Pragpura%20Kotputli%20Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-75 rounded-2xl"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 Laxmi Jaivik Farming. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;