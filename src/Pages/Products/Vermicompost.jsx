function Vermicompost() {
  const products = [
    { name: "5 kg Bag" , price: "₹80", priceNote: "/bag", emoji: "🪣", tag: "Home Garden", desc: "Perfect for kitchen gardens and small pots" },
    { name: "25 kg Bag",  price: "₹350", priceNote: "/bag", emoji: "🧺", tag: "Best Value", desc: "Ideal for medium-sized vegetable farms" },
    { name: "50 kg Bag",  price: "₹650", priceNote: "/bag", emoji: "🏗️", tag: "Farmer Pack", desc: "Bulk supply for large agricultural fields" },
    { name: "Custom Bulk Order", price: "Ask Us", priceNote: "", emoji: "🚛", tag: null, desc: "1 tonne+ orders for farms — special pricing" },
  ];

  const benefits = [
    { icon: "🌱", title: "Improves Soil Structure", desc: "Adds organic matter that makes soil loose, well-aerated, and water-retentive." },
    { icon: "🧬", title: "Rich in Nutrients", desc: "High in Nitrogen, Phosphorus, and Potassium — the three key plant nutrients." },
    { icon: "🪱", title: "Boosts Microbial Life", desc: "Worm castings bring beneficial microbes that protect plant roots naturally." },
    { icon: "📈", title: "Higher Crop Yield", desc: "Farmers using our vermicompost report 30–40% better yield season after season." },
    { icon: "♻️", title: "100% Natural", desc: "Made from desi cow dung and farm waste — no synthetic chemicals at any stage." },
    { icon: "🌦", title: "All Crop Types", desc: "Works for vegetables, fruit trees, wheat, maize, flowers — any crop." },
  ];

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#F5F0E8", minHeight: "100vh", color: "#1B2118" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #2C1A0A 60%, #4A2D10)",
        padding: "80px 60px 70px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: "-40px", right: "60px",
          width: "260px", height: "260px",
          borderRadius: "50%",
          background: "rgba(180,120,30,0.12)",
          pointerEvents: "none",
        }} />
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#D4A017", marginBottom: "18px", textTransform: "uppercase" }}>
          / Our Products / Compost
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "58px", fontWeight: "600", color: "#F5F0E8", lineHeight: 1.05, marginBottom: "20px" }}>
          Vermi<br /><em style={{ color: "#C8882A" }}>Compost</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#B09870", maxWidth: "520px", lineHeight: 1.65, marginBottom: "32px" }}>
          Made from our desi cow dung and farm waste — worm-processed into the
          finest natural fertilizer your soil will ever receive.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#order"
            style={{ background: "#C8882A", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontWeight: "700", fontSize: "15px", textDecoration: "none", boxShadow: "4px 4px 0 #2C1A0A" }}>
            📞 Order Vermicompost
          </a>
          <a href="#products"
            style={{ color: "#F5F0E8", padding: "14px 10px", fontWeight: "600", fontSize: "15px", textDecoration: "none", borderBottom: "2px solid #F5F0E880" }}>
            See Packs & Prices ↓
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#1E0F04", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "0 60px" }}>
        {[
          { val: "100%", lbl: "Desi Cow Dung Based" },
          { val: "30–40%", lbl: "Better Crop Yield" },
          { val: "Zero", lbl: "Chemicals or Additives" },
          { val: "5kg+", lbl: "Pack Sizes Available" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "28px 10px", borderRight: i < 3 ? "1px solid #ffffff15" : "none" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#D4A017", fontWeight: "600" }}>{s.val}</div>
            <div style={{ fontSize: "13px", color: "#907050", marginTop: "4px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Packs */}
      <section id="products" style={{ padding: "80px 60px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#C8882A", textTransform: "uppercase", marginBottom: "12px" }}>
            / Packs & Pricing
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#2C1A0A", marginBottom: "40px", fontWeight: "600" }}>
            Choose your pack size
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
            {products.map((p, i) => (
              <div key={i} style={{
                background: "#fff",
                border: i === 1 ? "2px solid #C8882A" : "1px solid #2C1A0A18",
                borderRadius: "14px",
                padding: "28px 22px",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 30px -10px rgba(44,26,10,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {p.tag && (
                  <span style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: i === 1 ? "#C8882A" : "#2C1A0A", color: "#F5F0E8",
                    fontSize: "10px", padding: "3px 8px", borderRadius: "20px", fontWeight: "700"
                  }}>{p.tag}</span>
                )}
                <div style={{ fontSize: "36px", marginBottom: "14px" }}>{p.emoji}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#2C1A0A", marginBottom: "4px" }}>{p.name}</h3>
                <p style={{ fontSize: "12px", color: "#999", marginBottom: "10px" }}>{p.hindi}</p>
                <p style={{ fontSize: "14px", color: "#6B5030", lineHeight: "1.5", marginBottom: "18px" }}>{p.desc}</p>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: "600", color: "#2C1A0A" }}>
                  {p.price}<span style={{ fontSize: "14px", fontWeight: "400", color: "#999" }}>{p.priceNote}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "#2C1A0A", padding: "70px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#F5F0E8", marginBottom: "36px" }}>
            Why vermicompost works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "#ffffff15", border: "1px solid #ffffff15", borderRadius: "14px", overflow: "hidden" }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ background: "#2C1A0A", padding: "30px 26px" }}>
                <div style={{ fontSize: "26px", marginBottom: "14px" }}>{b.icon}</div>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#F5F0E8", marginBottom: "10px" }}>{b.title}</h4>
                <p style={{ fontSize: "14px", color: "#907050", lineHeight: "1.6" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="order" style={{ background: "#F0E6D0", padding: "70px 60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#2C1A0A", marginBottom: "14px" }}>
          Enrich your soil today
        </h2>
        <p style={{ color: "#6B5030", fontSize: "16px", marginBottom: "30px" }}>
          Available in 5kg, 25kg, and 50kg packs. Bulk orders for farms welcome.
        </p>
        <a href="https://wa.me/+919667612626"
          style={{ background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
          💬 WhatsApp — Order Vermicompost
        </a>
      </section>
    </div>
  );
}

export default Vermicompost;