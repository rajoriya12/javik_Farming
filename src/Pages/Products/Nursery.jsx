function Nursery() {
  const seedlings = [
    { name: "Tomato", season: "All Year", ready: "25–30 days", price: "₹5/plant", emoji: "🍅", tag: "Most Popular" },
    { name: "Chilli", season: "All Year", ready: "30–35 days", price: "₹4/plant", emoji: "🌶️", tag: null },
    { name: "Brinjal", season: "All Year", ready: "28–32 days", price: "₹4/plant", emoji: "🍆", tag: null },
    { name: "Capsicum", season: "All Year", ready: "35–40 days", price: "₹6/plant", emoji: "🫑", tag: null },
    { name: "Cauliflower", season: "All Year", ready: "20–25 days", price: "₹3/plant", emoji: "🥦", tag: "Seasonal" },
    { name: "Cabbage", season: "All Year", ready: "20–25 days", price: "₹3/plant", emoji: "🥬", tag: null },
    { name: "Cucumber", season: "All Year", ready: "15–18 days", price: "₹5/plant", emoji: "🥒", tag: null },
    { name: "Bottle Gourd", season: "All Year", ready: "12–15 days", price: "₹4/plant", emoji: "🫙", tag: null },
  ];

  const steps = [
    { num: "01", title: "WhatsApp Your Order", desc: "Tell us which seedlings you need and quantity. We'll confirm availability same day." },
    { num: "02", title: "We Prepare Fresh", desc: "Seedlings are prepared in our nursery beds using organic soil and vermicompost." },
    { num: "03", title: "Pick Up or Delivery", desc: "Collect from our farm in Kirarod or get delivery to nearby areas." },
    { num: "04", title: "Grow & Enjoy", desc: "We'll guide you on planting tips over WhatsApp — free of charge." },
  ];

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#F2F7F0", minHeight: "100vh", color: "#1B2118" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1A3B22 60%, #285E35)",
        padding: "80px 60px 70px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "30px", right: "100px",
          width: "200px", height: "200px",
          borderRadius: "50%",
          background: "rgba(45,180,80,0.08)",
          pointerEvents: "none",
        }} />
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#6EE87A", marginBottom: "18px", textTransform: "uppercase" }}>
          / Our Products / Nursery
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "58px", fontWeight: "600", color: "#F2F7F0", lineHeight: 1.05, marginBottom: "20px" }}>
          Vegetable<br /><em style={{ color: "#A8E063", fontStyle: "italic" }}>Nursery</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#A5BFA8", maxWidth: "520px", lineHeight: 1.65, marginBottom: "32px" }}>
          Healthy, organically raised seedlings for farmers and kitchen garden
          lovers. Strong roots, strong crops — from our soil to yours.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#order"
            style={{ background: "#A8E063", color: "#1A3B22", padding: "14px 28px", borderRadius: "6px", fontWeight: "700", fontSize: "15px", textDecoration: "none", boxShadow: "4px 4px 0 #1A3B22" }}>
            📞 Order Seedlings
          </a>
          <a href="#list"
            style={{ color: "#F2F7F0", padding: "14px 10px", fontWeight: "600", fontSize: "15px", textDecoration: "none", borderBottom: "2px solid #F2F7F080" }}>
            See All Seedlings ↓
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#122B19", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "0 60px" }}>
        {[
          { val: "8+", lbl: "Seedling Varieties" },
          { val: "Bulk", lbl: "Farmer Orders Welcome" },
          { val: "Organic", lbl: "Soil & Compost Used" },
          { val: "Free", lbl: "Planting Guidance" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "28px 10px", borderRight: i < 3 ? "1px solid #ffffff15" : "none" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#A8E063", fontWeight: "600" }}>{s.val}</div>
            <div style={{ fontSize: "13px", color: "#7A9E7E", marginTop: "4px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Seedlings Grid */}
      <section id="list" style={{ padding: "80px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#2E7D32", textTransform: "uppercase", marginBottom: "12px" }}>
            / Available Seedlings
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#1A3B22", marginBottom: "40px", fontWeight: "600" }}>
            Ready-to-plant varieties
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "18px" }}>
            {seedlings.map((s, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #1A3B2218",
                borderRadius: "12px",
                padding: "22px 18px",
                position: "relative",
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {s.tag && (
                  <span style={{
                    position: "absolute", top: "10px", right: "10px",
                    background: "#1A3B22", color: "#A8E063",
                    fontSize: "10px", padding: "3px 8px", borderRadius: "20px", fontWeight: "700"
                  }}>{s.tag}</span>
                )}
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>{s.emoji}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "#1A3B22", marginBottom: "2px" }}>{s.name}</h3>
                <p style={{ fontSize: "12px", color: "#999", marginBottom: "12px" }}>{s.hindi}</p>
                <div style={{ fontSize: "12px", color: "#5C7A5F", marginBottom: "4px" }}>🕐 Ready in: {s.ready}</div>
                <div style={{ fontSize: "16px", fontWeight: "700", color: "#1A3B22", fontFamily: "Georgia, serif" }}>{s.price}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "20px", background: "#E8F5E9", border: "1px solid #A8E06340", borderRadius: "10px", padding: "16px 20px", fontSize: "14px", color: "#2E7D32" }}>
            💡 <strong>Bulk orders for farmers:</strong> 500+ plants — special pricing available. WhatsApp us for a quote.
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ background: "#1A3B22", padding: "70px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#F2F7F0", marginBottom: "40px" }}>How to order</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ padding: "10px 0" }}>
                <div style={{ fontFamily: "monospace", fontSize: "28px", color: "#A8E063", marginBottom: "14px", fontWeight: "700" }}>{s.num}</div>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#F2F7F0", marginBottom: "10px" }}>{s.title}</h4>
                <p style={{ fontSize: "14px", color: "#7A9E7E", lineHeight: "1.6" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="order" style={{ background: "#E8F5E9", padding: "70px 60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#1A3B22", marginBottom: "14px" }}>Ready to grow?</h2>
        <p style={{ color: "#5C7A5F", fontSize: "16px", marginBottom: "30px" }}>
          Tell us what you need — seedlings will be ready within a few days.
        </p>
        <a href="https://wa.me/+919667612626"
          style={{ background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
          💬 WhatsApp — Order Seedlings
        </a>
      </section>
    </div>
  );
}

export default Nursery;