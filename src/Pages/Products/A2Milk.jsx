function A2Milk() {
  const products = [
    { name: "A2 Full Cream Milk", price: "₹70/litre", emoji: "🥛", tag: "Daily", desc: "Fresh every morning from our desi cows" },
    { name: "Pure Desi Ghee", price: "₹800/500g", emoji: "🫙", tag: "Premium", desc: "Bilona method — hand-churned from curd" },
    { name: "Fresh Curd (Dahi)", price: "₹60/500g", emoji: "🥣", tag: "Daily", desc: "Set overnight, thick and probiotic-rich" },
    { name: "Buttermilk (Chaas)", price: "₹20/250ml", emoji: "🥤", tag: null, desc: "Chilled, spiced — perfect for summer" },
    { name: "Unsalted Butter (Makhan)", price: "₹120/100g", emoji: "🧈", tag: null, desc: "Hand-churned white butter, natural taste" },
    { name: "Paneer", price: "₹300/kg", emoji: "🧀", tag: "Order Ahead", desc: "Made fresh from our own A2 milk" },
  ];

  const cowFacts = [
    { icon: "🐄", title: "Gir & Sahiwal Breed", desc: "Indigenous Indian breeds known for high-quality A2 protein milk." },
    { icon: "🌿", title: "Grass-Fed & Free-Roaming", desc: "Our cows graze freely and eat farm-grown fodder — no hormones." },
    { icon: "💉", title: "No Injections", desc: "Zero oxytocin, zero antibiotics. Pure natural milk, always." },
    { icon: "🕕", title: "Morning Fresh", desc: "Milked at 5am, bottled by 6am, at your door by 8am." },
  ];

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#FDF8EF", minHeight: "100vh", color: "#1B2118" }}>

      <section style={{
        background: "linear-gradient(135deg, #3B2A1A 60%, #5C3D20)",
        padding: "80px 60px 70px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: "-80px", right: "80px",
          width: "280px", height: "280px",
          borderRadius: "50%",
          background: "rgba(212,160,23,0.1)",
          pointerEvents: "none",
        }} />
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#E08A2C", marginBottom: "18px", textTransform: "uppercase" }}>
          / Our Products / Dairy
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "58px", fontWeight: "600", color: "#FDF8EF", lineHeight: 1.05, marginBottom: "20px" }}>
          A2 Milk &<br /><em style={{ color: "#D4A017", fontStyle: "italic" }}>Dairy Products</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#C9B99A", maxWidth: "520px", lineHeight: 1.65, marginBottom: "32px" }}>
          From our desi cows — Gir and Sahiwal breed — every drop is
          natural, rich in A2 beta-casein, and free of any injections.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#order"
            style={{ background: "#E08A2C", color: "#1B2118", padding: "14px 28px", borderRadius: "6px", fontWeight: "700", fontSize: "15px", textDecoration: "none", boxShadow: "4px 4px 0 #3B2A1A" }}>
            📞 Daily Milk Subscription
          </a>
          <a href="#products"
            style={{ color: "#FDF8EF", padding: "14px 10px", fontWeight: "600", fontSize: "15px", textDecoration: "none", borderBottom: "2px solid #FDF8EF80" }}>
            See All Products ↓
          </a>
        </div>
      </section>

      <div style={{ background: "#2E1F0F", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "0 60px" }}>
        {[
          { val: "10+", lbl: "Desi Cows" },
          { val: "A2", lbl: "Beta-Casein Protein" },
          { val: "0", lbl: "Chemicals / Hormones" },
          { val: "5am", lbl: "Daily Milking" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "28px 10px", borderRight: i < 3 ? "1px solid #ffffff18" : "none" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#D4A017", fontWeight: "600" }}>{s.val}</div>
            <div style={{ fontSize: "13px", color: "#A09070", marginTop: "4px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <section id="products" style={{ padding: "80px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "12px" }}>
            / Product Range
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#3B2A1A", marginBottom: "40px", fontWeight: "600" }}>
            Pure dairy, six ways
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
            {products.map((p, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #D4B89622",
                borderRadius: "14px",
                padding: "28px 24px",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 32px -10px rgba(59,42,26,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {p.tag && (
                  <span style={{
                    position: "absolute", top: "14px", right: "14px",
                    background: "#3B2A1A", color: "#D4A017",
                    fontSize: "10px", padding: "3px 10px", borderRadius: "20px", fontWeight: "700"
                  }}>{p.tag}</span>
                )}
                <div style={{ fontSize: "40px", marginBottom: "14px" }}>{p.emoji}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "19px", color: "#3B2A1A", marginBottom: "4px" }}>{p.name}</h3>
                <p style={{ fontSize: "12px", color: "#999", marginBottom: "10px" }}>{p.hindi}</p>
                <p style={{ fontSize: "14px", color: "#6B5B45", lineHeight: "1.55", marginBottom: "18px" }}>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: "#3B2A1A", fontFamily: "Georgia, serif" }}>{p.price}</span>
                  <a href="#order" style={{ fontSize: "13px", color: "#E08A2C", fontWeight: "700", textDecoration: "none" }}>Order →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F0E6D3", padding: "70px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#3B2A1A", marginBottom: "36px" }}>Our cows, our promise</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
            {cowFacts.map((f, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "28px 22px", border: "1px solid #D4B89620" }}>
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{f.icon}</div>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#3B2A1A", marginBottom: "8px" }}>{f.title}</h4>
                <p style={{ fontSize: "14px", color: "#6B5B45", lineHeight: "1.6" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" style={{ background: "#3B2A1A", padding: "70px 60px", textAlign: "center" }}>
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#D4A017", marginBottom: "14px", textTransform: "uppercase" }}>/ Daily Subscription</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#FDF8EF", marginBottom: "14px" }}>Start your daily milk subscription</h2>
        <p style={{ color: "#A09070", fontSize: "16px", marginBottom: "30px", maxWidth: "480px", margin: "0 auto 30px" }}>
          Fresh milk at your door every morning. WhatsApp us to set up your daily order.
        </p>
        <a href="https://wa.me/+919667612626"
          style={{ background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
          💬 WhatsApp — Order Now
        </a>
      </section>
    </div>
  );
}

export default A2Milk;