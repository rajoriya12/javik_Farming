function OrganicVeg() {
  const vegetables = [
    { name: "Tomato", season: "Oct – Feb", price: "₹30/kg", emoji: "🍅", tag: "Best Seller" },
    { name: "Spinach", season: "Nov – Mar", price: "₹20/bunch", emoji: "🥬", tag: "High Demand" },
    { name: "Coriander", season: "All Year", price: "₹15/bunch", emoji: "🌿", tag: "Daily Use" },
    { name: "Brinjal",season: "Aug – Dec", price: "₹25/kg", emoji: "🍆", tag: null },
    { name: "Bitter Gourd",season: "Jun – Sep", price: "₹35/kg", emoji: "🥒", tag: null },
    { name: "Fenugreek",  season: "Oct – Jan", price: "₹15/bunch", emoji: "🌱", tag: null },
    { name: "Okra",  season: "Mar – Jul", price: "₹30/kg", emoji: "🫛", tag: null },
    { name: "Bottle Gourd",  season: "Jul – Oct", price: "₹20/kg", emoji: "🥦", tag: null },
  ];

  const benefits = [
    { icon: "🚫", title: "Zero Chemicals", desc: "No pesticides, no synthetic fertilizers — ever." },
    { icon: "🌦", title: "Seasonally Grown", desc: "We grow what the season demands, for peak nutrition." },
    { icon: "🚚", title: "Same-Day Delivery", desc: "Harvested in the morning, at your door by evening." },
    { icon: "🪱", title: "Vermicompost Fed", desc: "Our own compost nourishes every plant we grow." },
  ];

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#F6F1E4", minHeight: "100vh", color: "#1B2118" }}>


      <section style={{
        background: "linear-gradient(135deg, #1F3D2B 60%, #2E5C3E)",
        padding: "80px 60px 70px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "340px", height: "340px",
          borderRadius: "50%",
          background: "rgba(212,160,23,0.08)",
          pointerEvents: "none",
        }} />
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#E08A2C", marginBottom: "18px", textTransform: "uppercase" }}>
          / Our Products / Vegetables
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "58px", fontWeight: "600", color: "#F6F1E4", lineHeight: 1.05, marginBottom: "20px" }}>
          Organic<br /><em style={{ color: "#D4A017", fontStyle: "italic" }}>Vegetables</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#B7C2B9", maxWidth: "520px", lineHeight: 1.65, marginBottom: "32px" }}>
          Grown on our farm in Kirarod using traditional organic methods —
          no chemicals, no shortcuts, just honest food.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#order"
            style={{ background: "#E08A2C", color: "#1B2118", padding: "14px 28px", borderRadius: "6px", fontWeight: "700", fontSize: "15px", textDecoration: "none", boxShadow: "4px 4px 0 #1F3D2B" }}>
            📞 Order via WhatsApp
          </a>
          <a href="#list"
            style={{ color: "#EFE7D3", padding: "14px 10px", fontWeight: "600", fontSize: "15px", textDecoration: "none", borderBottom: "2px solid #EFE7D380" }}>
            See All Vegetables ↓
          </a>
        </div>
      </section>


      <div style={{ background: "#142A1C", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "0 60px" }}>
        {[
          { val: "15+", lbl: "Vegetables Grown" },
          { val: "100%", lbl: "Chemical Free" },
          { val: "Daily", lbl: "Fresh Harvest" },
          { val: "Free", lbl: "Home Delivery" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "28px 10px", borderRight: i < 3 ? "1px solid #ffffff18" : "none" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#D4A017", fontWeight: "600" }}>{s.val}</div>
            <div style={{ fontSize: "13px", color: "#AEBBB0", marginTop: "4px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>


      <section id="list" style={{ padding: "80px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "12px" }}>
            / Seasonal List
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#1F3D2B", marginBottom: "40px", fontWeight: "600" }}>
            What's available right now
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {vegetables.map((veg, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #1F3D2B22",
                borderRadius: "12px",
                padding: "24px 20px",
                position: "relative",
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {veg.tag && (
                  <span style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "#1F3D2B", color: "#D4A017",
                    fontSize: "10px", padding: "3px 8px", borderRadius: "20px", fontWeight: "700"
                  }}>{veg.tag}</span>
                )}
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{veg.emoji}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#1F3D2B", marginBottom: "2px" }}>{veg.name}</h3>
                <p style={{ fontSize: "13px", color: "#888", marginBottom: "14px" }}>{veg.hindi}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: "#5C6B5F" }}>🗓 {veg.season}</span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1F3D2B" }}>{veg.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "24px", fontSize: "14px", color: "#888", fontStyle: "italic" }}>
            * Availability varies by season. WhatsApp us to confirm today's stock.
          </p>
        </div>
      </section>


      <section style={{ background: "#EFE7D3", padding: "70px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#1F3D2B", marginBottom: "36px" }}>Why choose our vegetables?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "28px 22px", border: "1px solid #1F3D2B15" }}>
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{b.icon}</div>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#1F3D2B", marginBottom: "8px" }}>{b.title}</h4>
                <p style={{ fontSize: "14px", color: "#5C6B5F", lineHeight: "1.6" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="order" style={{ background: "#1F3D2B", padding: "70px 60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#F6F1E4", marginBottom: "14px" }}>Ready to order?</h2>
        <p style={{ color: "#AEBBB0", fontSize: "16px", marginBottom: "30px" }}>Message us on WhatsApp — we'll confirm availability and deliver fresh.</p>
        <a href="https://wa.me/+919667612626"
          style={{ background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
          💬 WhatsApp करें — Order Now
        </a>
      </section>
    </div>
  );
}

export default OrganicVeg;