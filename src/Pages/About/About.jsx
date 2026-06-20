function About() {
  const values = [
    { icon: "🌿", title: "Zero Chemicals", desc: "We have never used synthetic pesticides or fertilizers on our land — not once in 5+ years of farming." },
    { icon: "🐄", title: "Desi Cow Centered", desc: "Our Gir and Sahiwal cows are at the heart of everything — their dung feeds our compost, their milk feeds our families." },
    { icon: "♻️", title: "Closed-Loop Farm", desc: "Farm waste becomes compost, compost grows vegetables, vegetables feed people. Nothing is wasted." },
    { icon: "🤝", title: "Community First", desc: "We supply farmers with seedlings, share organic farming knowledge freely, and believe good food should reach everyone." },
  ];

  const timeline = [
    { year: "2019", event: "Started organic farming on 2 acres in Kirarod village with 3 desi cows." },
    { year: "2020", event: "Launched vegetable nursery for local farmers — first 500 seedlings sold." },
    { year: "2021", event: "Started vermicompost production using our own desi cow dung." },
    { year: "2022", event: "Received government award for organic farming excellence in Kotputli district." },
    { year: "2023", event: "Expanded to 10+ cows, began A2 milk home delivery service." },
    { year: "2024", event: "500+ happy customers, delivering fresh produce across Kotputli-Behroad district." },
  ];

  const team = [
    { name: "Farm Owner", role: "Founder & Head Farmer", emoji: "👨‍🌾", desc: "5+ years of organic farming experience, Government Award recipient." },
    { name: "Farm Team", role: "Nursery & Cow Care", emoji: "👩‍🌾", desc: "Our dedicated team manages daily milking, nursery beds, and vegetable harvesting." },
    { name: "Delivery Team", role: "Fresh Delivery", emoji: "🚚", desc: "Ensuring your order reaches you fresh, on time, every day." },
  ];

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#F6F1E4", minHeight: "100vh", color: "#1B2118" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1F3D2B 55%, #2E5C3E 100%)",
        padding: "90px 60px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "380px", height: "380px", borderRadius: "50%", background: "rgba(212,160,23,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "300px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(212,160,23,0.05)", pointerEvents: "none" }} />

        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#E08A2C", marginBottom: "18px", textTransform: "uppercase" }}>
          / About Us
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "60px", fontWeight: "600", color: "#F6F1E4", lineHeight: 1.04, marginBottom: "22px", maxWidth: "640px" }}>
          A family farm,<br /><em style={{ color: "#D4A017", fontStyle: "italic" }}>rooted in honesty.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#B7C2B9", maxWidth: "540px", lineHeight: 1.7 }}>
          Laxmi Jaivik Farming is a family-run organic farm in Kirarod village, Pragpura.
          We grow food the way it was always meant to be grown — with patience,
          respect for the soil, and zero compromise on purity.
        </p>
      </section>

      {/* Mission Strip */}
      <div style={{ background: "#142A1C", padding: "48px 60px", display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "40px", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#E08A2C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Mission</p>
          <p style={{ fontSize: "17px", color: "#EFE7D3", lineHeight: 1.7, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            "To bring honest, chemical-free food from our farm to your family — and to share the knowledge of organic farming with every farmer around us."
          </p>
        </div>
        <div style={{ background: "#ffffff18", height: "80px" }} />
        <div>
          <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#E08A2C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Location</p>
          <p style={{ fontSize: "15px", color: "#AEBBB0", lineHeight: 1.8 }}>
            Dhani-Dabda Walli, Vill. Kirarod<br />
            Via Pragpura, Teh. Paota<br />
            Dist. Kotputli-Behroad, Raj. — 303107
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: "#1F3D2B", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "0 60px" }}>
        {[
          { val: "5+", lbl: "Years of Organic Farming" },
          { val: "500+", lbl: "Happy Customers" },
          { val: "10+", lbl: "Desi Cows" },
          { val: "4+", lbl: "Awards Received" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "32px 10px", borderRight: i < 3 ? "1px solid #ffffff18" : "none" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#D4A017", fontWeight: "600" }}>{s.val}</div>
            <div style={{ fontSize: "13px", color: "#AEBBB0", marginTop: "6px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <section style={{ padding: "90px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "14px" }}>/ Our Story</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "40px", color: "#1F3D2B", marginBottom: "24px", fontWeight: "600", lineHeight: 1.15 }}>
              From a small plot<br />to a trusted farm.
            </h2>
            <p style={{ fontSize: "16px", color: "#3C4A3F", lineHeight: 1.75, marginBottom: "18px" }}>
              It started in 2019 with 2 acres of land, 3 desi cows, and a simple belief —
              that farming with nature, not against it, produces better food and a better life.
            </p>
            <p style={{ fontSize: "16px", color: "#3C4A3F", lineHeight: 1.75, marginBottom: "18px" }}>
              Over the years, we grew — more cows, more crops, more families we could serve.
              Today, Laxmi Jaivik Farming supplies organic vegetables, A2 milk, seedlings,
              and vermicompost to 500+ households across Kotputli-Behroad district.
            </p>
            <p style={{ fontSize: "16px", color: "#3C4A3F", lineHeight: 1.75 }}>
              We received a government award for organic farming excellence in 2022.
              But our proudest achievement? Every customer who tastes the difference.
            </p>
          </div>
          {/* Timeline */}
          <div>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "28px", alignItems: "flex-start" }}>
                <div style={{ minWidth: "52px", textAlign: "center" }}>
                  <div style={{ background: i === timeline.length - 1 ? "#1F3D2B" : "#EFE7D3", border: "2px solid #1F3D2B", borderRadius: "6px", padding: "5px 8px", fontFamily: "monospace", fontSize: "12px", fontWeight: "700", color: i === timeline.length - 1 ? "#D4A017" : "#1F3D2B" }}>
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && <div style={{ width: "2px", height: "20px", background: "#1F3D2B30", margin: "0 auto" }} />}
                </div>
                <p style={{ fontSize: "14px", color: "#3C4A3F", lineHeight: 1.6, paddingTop: "4px" }}>{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#EFE7D3", padding: "80px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "14px" }}>/ What We Stand For</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#1F3D2B", marginBottom: "44px", fontWeight: "600" }}>Our core values</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "22px" }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "14px", padding: "32px 24px", border: "1px solid #1F3D2B15" }}>
                <div style={{ fontSize: "30px", marginBottom: "16px" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#1F3D2B", marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#5C6B5F", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 60px", background: "#F6F1E4" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "14px" }}>/ The People</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#1F3D2B", marginBottom: "44px", fontWeight: "600" }}>Meet the team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
            {team.map((m, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "14px", padding: "34px 26px", textAlign: "center", border: "1px solid #1F3D2B15" }}>
                <div style={{ fontSize: "48px", marginBottom: "14px" }}>{m.emoji}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#1F3D2B", marginBottom: "4px" }}>{m.name}</h3>
                <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#E08A2C", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px" }}>{m.role}</p>
                <p style={{ fontSize: "14px", color: "#5C6B5F", lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ background: "#1F3D2B", padding: "70px 60px", textAlign: "center" }}>
        <p style={{ fontFamily: "monospace", fontSize: "12px", color: "#D4A017", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>/ Recognition</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", color: "#F6F1E4", marginBottom: "14px" }}>Government Certified & Awarded</h2>
        <p style={{ color: "#AEBBB0", fontSize: "16px", maxWidth: "500px", margin: "0 auto 36px" }}>
          Our organic farming practices have been recognized and awarded by the Rajasthan state government.
        </p>
        <div style={{ display: "inline-flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
          {["🏆 Organic Farming Award 2022", "✅ Certified Organic Farm", "🌿 Rajasthan Govt. Recognized"].map((a, i) => (
            <div key={i} style={{ background: "#142A1C", border: "1px solid #D4A01730", borderRadius: "10px", padding: "16px 26px", color: "#D4A017", fontSize: "15px", fontWeight: "600" }}>
              {a}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;