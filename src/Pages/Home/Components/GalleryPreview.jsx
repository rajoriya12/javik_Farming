function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    "https://images.unsplash.com/photo-1492496913980-501348b61469",
  ];

  return (
    <section className="py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#1F3D2B]">
          Farm Gallery
        </h2>

        <p className="text-center text-gray-600 mt-3">
          A glimpse of our organic farming journey
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={img}
                alt="farm"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;