import { useState } from "react";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filters = ["All", "Farm", "Vegetables", "Dairy & Cows", "Nursery", "Compost", "Awards"];

  const images = [
    { id: 1, category: "Farm", emoji: "🌾", title: "Our Farm — Sunrise View", desc: "Kirarod village, early morning", color: "#DCE9D8" },
    { id: 2, category: "Vegetables", emoji: "🍅", title: "Fresh Tomato Harvest", desc: "Organic tomatoes, zero chemicals", color: "#F9DCDC" },
    { id: 3, category: "Dairy & Cows", emoji: "🐄", title: "Our Gir Cows", desc: "Morning in the gaushala", color: "#F3E4C8" },
    { id: 4, category: "Nursery", emoji: "🌱", title: "Seedling Beds", desc: "Ready-to-plant tomato seedlings", color: "#DCE9D8" },
    { id: 5, category: "Compost", emoji: "🪱", title: "Vermicompost Beds", desc: "Worm beds — pure organic", color: "#EAD9C4" },
    { id: 6, category: "Awards", emoji: "🏆", title: "Government Award 2022", desc: "Organic farming excellence award", color: "#FFF3CD" },
    { id: 7, category: "Vegetables", emoji: "🥬", title: "Spinach Crop", desc: "October harvest — deep green", color: "#DCE9D8" },
    { id: 8, category: "Dairy & Cows", emoji: "🥛", title: "Morning Milking", desc: "Fresh A2 milk, 5am every day", color: "#F3E4C8" },
    { id: 9, category: "Farm", emoji: "🚜", title: "Field Preparation", desc: "Natural ploughing methods", color: "#E8DFD0" },
    { id: 10, category: "Nursery", emoji: "🫑", title: "Capsicum Seedlings", desc: "4-week old healthy plants", color: "#DCE9D8" },
    { id: 11, category: "Vegetables", emoji: "🍆", title: "Brinjal Field", desc: "Organic brinjal — August harvest", color: "#EAD5F0" },
    { id: 12, category: "Compost", emoji: "♻️", title: "Compost Process", desc: "Cow dung + farm waste composting", color: "#EAD9C4" },
    { id: 13, category: "Farm", emoji: "🌿", title: "Organic Field View", desc: "No pesticide — just nature", color: "#DCE9D8" },
    { id: 14, category: "Awards", emoji: "📜", title: "Organic Certificate", desc: "Government organic certification", color: "#FFF3CD" },
    { id: 15, category: "Dairy & Cows", emoji: "🧈", title: "Bilona Ghee Process", desc: "Hand-churned desi ghee", color: "#F3E4C8" },
    { id: 16, category: "Vegetables", emoji: "🌶️", title: "Chilli Harvest", desc: "Spicy, natural, farm-fresh", color: "#F9DCDC" },
    { id: 17, category: "Nursery", emoji: "🥦", title: "Cauliflower Poudh", desc: "Winter nursery seedlings", color: "#DCE9D8" },
    { id: 18, category: "Farm", emoji: "🐝", title: "Natural Pollination", desc: "Bees at work in our fields", color: "#FFF3CD" },
  ];

  const filtered = activeFilter === "All" ? images : images.filter(img => img.category === activeFilter);

  return (
    <div >

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1F3D2B 55%, #2E5C3E 100%)",
        padding: "80px 60px 70px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(212,160,23,0.07)", pointerEvents: "none" }} />
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#E08A2C", marginBottom: "18px", textTransform: "uppercase" }}>
          / Gallery
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "60px", fontWeight: "600", color: "#F6F1E4", lineHeight: 1.04, marginBottom: "20px" }}>
          Life on our<br /><em style={{ color: "#D4A017", fontStyle: "italic" }}>farm.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#B7C2B9", maxWidth: "500px", lineHeight: 1.7 }}>
          A glimpse into our daily work — from seedling to harvest,
          from cow to milk, from soil to your table.
        </p>
      </section>

      {/* Filter Bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #1F3D2B18", padding: "20px 60px", display: "flex", gap: "10px", flexWrap: "wrap", position: "sticky", top: 0, zIndex: 10 }}>
        {filters.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)}
            style={{
              padding: "9px 20px",
              borderRadius: "30px",
              border: activeFilter === f ? "none" : "1.5px solid #1F3D2B30",
              background: activeFilter === f ? "#1F3D2B" : "transparent",
              color: activeFilter === f ? "#D4A017" : "#3C4A3F",
              fontFamily: "monospace",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "all 0.2s",
            }}>
            {f}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: "13px", color: "#888", alignSelf: "center" }}>
          {filtered.length} photos
        </span>
      </div>

      {/* Grid */}
      <section style={{ padding: "50px 60px 80px" }}>
        <div style={{
          columns: "3",
          columnGap: "20px",
        }}>
          {filtered.map((img) => (
            <div key={img.id}
              onClick={() => setLightbox(img)}
              style={{
                breakInside: "avoid",
                marginBottom: "20px",
                cursor: "pointer",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #1F3D2B18",
                background: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 16px 32px -8px rgba(31,61,43,0.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {/* Photo placeholder */}
              <div style={{
                background: img.color,
                height: img.id % 3 === 0 ? "220px" : img.id % 3 === 1 ? "180px" : "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "52px",
                position: "relative",
              }}>
                {img.emoji}
                <div style={{
                  position: "absolute", top: "10px", left: "10px",
                  background: "#1F3D2B", color: "#D4A017",
                  fontSize: "10px", padding: "3px 8px", borderRadius: "20px",
                  fontFamily: "monospace", fontWeight: "700",
                }}>
                  {img.category}
                </div>
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "15px", color: "#1F3D2B", marginBottom: "4px" }}>{img.title}</h3>
                <p style={{ fontSize: "12px", color: "#888" }}>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#888" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>📷</div>
            <p style={{ fontSize: "16px" }}>No photos in this category yet.</p>
          </div>
        )}
      </section>

      {/* Upload Note */}
      <div style={{ background: "#EFE7D3", padding: "30px 60px", display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "22px" }}>📸</span>
        <p style={{ fontSize: "14px", color: "#5C6B5F", lineHeight: 1.5 }}>
          Share your farm moments with us!
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(20,42,28,0.92)",
            zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "40px",
          }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", maxWidth: "600px", width: "100%" }}>
            <div style={{ background: lightbox.color, height: "340px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px" }}>
              {lightbox.emoji}
            </div>
            <div style={{ padding: "28px 30px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#E08A2C", textTransform: "uppercase", marginBottom: "6px" }}>{lightbox.category}</p>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#1F3D2B", marginBottom: "6px" }}>{lightbox.title}</h3>
                <p style={{ fontSize: "14px", color: "#888" }}>{lightbox.desc}</p>
              </div>
              <button onClick={() => setLightbox(null)}
                style={{ background: "#1F3D2B", color: "#D4A017", border: "none", borderRadius: "50%", width: "36px", height: "36px", fontSize: "18px", cursor: "pointer", flexShrink: 0 }}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;