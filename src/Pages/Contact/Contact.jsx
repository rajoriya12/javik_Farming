import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", mobile: "", village: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const products = [
    "Organic Vegetables",
    "A2 Milk (Daily Subscription)",
    "Desi Ghee",
    "Vegetable Nursery / Seedlings",
    "Vermicompost",
    "Other / General Query",
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = () => {
    const text = `Hello Laxmi Jaivik Farming! 🌿\n\nName: ${form.name}\nMobile: ${form.mobile}\nVillage/City: ${form.village}\nInterested In: ${form.product}\nMessage: ${form.message}`;
    window.open(`https://wa.me/+919667612626?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  const info = [
    { icon: "📍", label: "Address", value: "Dhani-Dabda Walli, Vill. Kirarod,\nVia Pragpura, Teh. Paota,\nDist. Kotputli-Behroad, Raj. — 303107" },
    { icon: "📞", label: "Phone / WhatsApp", value: "+91-9667612626" },
    { icon: "⏰", label: "Farm Hours", value: "Every Day\n7:00 AM – 7:00 PM" },
    { icon: "🚚", label: "Delivery Area", value: "Kotputli, Pragpura, Kirarod\n& Surrounding Villages" },
  ];

  const faqs = [
    { q: "Do you deliver to my area?", a: "We deliver across Kotputli-Behroad district. WhatsApp us your location and we'll confirm." },
    { q: "How fresh is the A2 milk?", a: "Our cows are milked at 5am daily. Milk is bottled and delivered by 8am — same morning." },
    { q: "Can I visit your farm?", a: "Yes! Farm visits are welcome. WhatsApp us to schedule a time." },
    { q: "Do you take bulk orders for vermicompost?", a: "Absolutely — we handle bulk orders for farmers. WhatsApp us for pricing." },
    { q: "What is the minimum order for seedlings?", a: "No minimum for home gardens. For farmers, bulk packs of 500+ available at special rates." },
  ];

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#F6F1E4", minHeight: "100vh", color: "#1B2118" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1F3D2B 55%, #2E5C3E 100%)",
        padding: "80px 60px 70px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(212,160,23,0.07)", pointerEvents: "none" }} />
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#E08A2C", marginBottom: "18px", textTransform: "uppercase" }}>
          / Contact Us
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "60px", fontWeight: "600", color: "#F6F1E4", lineHeight: 1.04, marginBottom: "20px" }}>
          Let's talk<br /><em style={{ color: "#D4A017", fontStyle: "italic" }}>fresh food.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "#B7C2B9", maxWidth: "500px", lineHeight: 1.7 }}>
          Whether you want to order, ask a question, or visit the farm —
          we're just a WhatsApp away.
        </p>
      </section>

      {/* Quick Contact Buttons */}
      <div style={{ background: "#142A1C", padding: "30px 60px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="https://wa.me/9667612626"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#fff", padding: "13px 26px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>
          💬 WhatsApp Now
        </a>
        <a href="tel:+919667612626"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#1F3D2B", border: "1.5px solid #D4A017", color: "#D4A017", padding: "13px 26px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>
          📞 Call Us
        </a>
        <a href="https://maps.google.com/?q=Kirarod+Pragpura+Kotputli+Rajasthan"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#1F3D2B", border: "1.5px solid #ffffff25", color: "#AEBBB0", padding: "13px 26px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>
          📍 Get Directions
        </a>
      </div>

      {/* Main Grid */}
      <section style={{ padding: "80px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "60px" }}>

          {/* Left: Info */}
          <div>
            <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "14px" }}>/ Contact Info</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#1F3D2B", marginBottom: "36px", fontWeight: "600" }}>Find us, reach us</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {info.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid #1F3D2B15" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#E08A2C", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</p>
                    <p style={{ fontSize: "14px", color: "#3C4A3F", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ background: "#DCE9D8", borderRadius: "14px", height: "220px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid #1F3D2B20" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🗺️</div>
              <p style={{ fontSize: "14px", color: "#1F3D2B", fontWeight: "600", marginBottom: "8px" }}>Kirarod, Pragpura, Kotputli</p>
              <a href="https://maps.google.com/?q=Kirarod+Pragpura+Kotputli+Rajasthan"
                style={{ fontSize: "13px", color: "#E08A2C", fontWeight: "700", textDecoration: "none" }}>
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "14px" }}>/ Send an Inquiry</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#1F3D2B", marginBottom: "10px", fontWeight: "600" }}>Order or ask us anything</h2>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "30px" }}>Fill this form and click Send — it'll open WhatsApp with your message ready.</p>

            {submitted ? (
              <div style={{ background: "#DCE9D8", border: "2px solid #1F3D2B30", borderRadius: "14px", padding: "40px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#1F3D2B", marginBottom: "10px" }}>WhatsApp opened!</h3>
                <p style={{ fontSize: "15px", color: "#5C6B5F", marginBottom: "20px" }}>Your message is ready to send. Just hit "Send" on WhatsApp.</p>
                <button onClick={() => setSubmitted(false)}
                  style={{ background: "#1F3D2B", color: "#D4A017", border: "none", padding: "12px 24px", borderRadius: "8px", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Name */}
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: "11px", color: "#1F3D2B", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "7px" }}>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Ramesh Sharma"
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #1F3D2B25", borderRadius: "8px", fontSize: "15px", fontFamily: "inherit", outline: "none", background: "#fff", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1F3D2B"}
                    onBlur={e => e.target.style.borderColor = "#1F3D2B25"}
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: "11px", color: "#1F3D2B", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "7px" }}>Mobile Number *</label>
                  <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="+91-XXXXXXXXXX" type="tel"
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #1F3D2B25", borderRadius: "8px", fontSize: "15px", fontFamily: "inherit", outline: "none", background: "#fff", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1F3D2B"}
                    onBlur={e => e.target.style.borderColor = "#1F3D2B25"}
                  />
                </div>

                {/* Village */}
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: "11px", color: "#1F3D2B", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "7px" }}>Village / City</label>
                  <input name="village" value={form.village} onChange={handleChange} placeholder="e.g. Kotputli, Pragpura..."
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #1F3D2B25", borderRadius: "8px", fontSize: "15px", fontFamily: "inherit", outline: "none", background: "#fff", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1F3D2B"}
                    onBlur={e => e.target.style.borderColor = "#1F3D2B25"}
                  />
                </div>

                {/* Product */}
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: "11px", color: "#1F3D2B", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "7px" }}>Interested In</label>
                  <select name="product" value={form.product} onChange={handleChange}
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #1F3D2B25", borderRadius: "8px", fontSize: "15px", fontFamily: "inherit", outline: "none", background: "#fff", boxSizing: "border-box", color: form.product ? "#1B2118" : "#888" }}>
                    <option value="">-- Select a product --</option>
                    {products.map((p, i) => <option key={i} value={p}>{p}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: "11px", color: "#1F3D2B", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "7px" }}>Message / Query</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us what you need, quantity, delivery area, or any questions..."
                    rows={4}
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #1F3D2B25", borderRadius: "8px", fontSize: "15px", fontFamily: "inherit", outline: "none", background: "#fff", resize: "vertical", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1F3D2B"}
                    onBlur={e => e.target.style.borderColor = "#1F3D2B25"}
                  />
                </div>

                <button onClick={handleWhatsApp}
                  disabled={!form.name || !form.mobile}
                  style={{
                    background: form.name && form.mobile ? "#25D366" : "#ccc",
                    color: "#fff",
                    border: "none",
                    padding: "16px 28px",
                    borderRadius: "8px",
                    fontWeight: "700",
                    fontSize: "16px",
                    cursor: form.name && form.mobile ? "pointer" : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "background 0.2s",
                  }}>
                  💬 Send via WhatsApp
                </button>
                <p style={{ fontSize: "12px", color: "#888", textAlign: "center" }}>This will open WhatsApp with your message pre-filled.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#EFE7D3", padding: "70px 60px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#B5562E", textTransform: "uppercase", marginBottom: "14px" }}>/ FAQ</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#1F3D2B", marginBottom: "36px", fontWeight: "600" }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "22px 24px", border: "1px solid #1F3D2B12" }}>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#1F3D2B", marginBottom: "8px" }}>Q: {faq.q}</h4>
                <p style={{ fontSize: "14px", color: "#5C6B5F", lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#1F3D2B", padding: "60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#F6F1E4", marginBottom: "12px" }}>Still have questions?</h2>
        <p style={{ color: "#AEBBB0", fontSize: "16px", marginBottom: "28px" }}>We reply on WhatsApp within minutes during farm hours.</p>
        <a href="https://wa.me/9667612626"
          style={{ background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "8px", fontWeight: "700", fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
          💬 Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Contact;