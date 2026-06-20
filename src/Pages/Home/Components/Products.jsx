import React from 'react'
export const products = [
    {
        id: 1,
        name: "Organic Vegetables",
        image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e",
        desc: "Fresh seasonal vegetables directly from farm",
    },
    {
        id: 2,
        name: "A2 Milk",
        image:
            "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        desc: "Pure and natural A2 cow milk",
    },
    {
        id: 3,
        name: "Nursery Plants",
        image:
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        desc: "Healthy plants and saplings",
    },
    {
        id: 4,
        name: "Vermicompost",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
        desc: "Organic fertilizer for better growth",
    },
];
function Products() {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-8xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center text-[#1F3D2B]">
                    Our Products
                </h2>

                <p className="text-center text-gray-600 mt-3">
                    Fresh, Organic and Naturally Grown
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-xl font-semibold">
                                    {item.name}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {item.desc}
                                </p>

                                <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
                                    Learn More
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}


export default Products