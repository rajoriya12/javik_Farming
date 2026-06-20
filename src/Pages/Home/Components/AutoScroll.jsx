import React from 'react'

function AutoScroll() {
    const items = [
        "🌿100% Organic Farming — Zero Chemicals, Zero Pesticides",
        " 🥛Fresh A2 Desi Cow Milk — Available Every Morning",
        "🚚Free Home Delivery — Kotputli & Nearby Areas",
        "🏆Government-Awarded Organic Farm — Certified & Trusted",
        " 🥬Seasonal Vegetables — Straight from Our Fields to Your Kitchen",
        "🪱Organic Vermicompost — Enrich Your Soil Naturally",
        "🌱Vegetable Nursery — Quality Seedlings for Farmers & Home Gardens",
        "📞Order on WhatsApp — Quick, Easy, Delivered Fresh",
    ]

    return (
        <section className="overflow-hidden whitespace-nowrap bg-green-200 py-4 ">
            <div className='flex gap-30 animate-auto-scroll'> 
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </section>
    )
}

export default AutoScroll
