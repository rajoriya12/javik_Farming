import { Link } from "react-router-dom";

function Products() {
  const categories = [
    {
      title: "Organic Vegetables",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e",
      link: "/organic-vegetables",
    },
    {
      title: "A2 Milk & Dairy",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      link: "/A2Milk",
    },
    {
      title: "Nursery",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      link: "/Nursery",
    },
    {
      title: "Vermicompost",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      link: "/Vermicompost",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-8xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Our Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <Link
                  to={item.link}
                  className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Products;