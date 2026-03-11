export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

      {/* NAVIGATION */}
      <nav
        style={{
          backgroundColor: "#4b2a63",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          Rise Up & Shine
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Coaching</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Speaking</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Blog</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Prayer</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 20px",
          textAlign: "center",
          color: "white"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            display: "inline-block",
            padding: "40px",
            borderRadius: "8px"
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            Rise Up & Shine Ministry
          </h1>

          <p style={{ fontSize: "22px", margin: "10px 0" }}>
            Faith. Healing. Freedom.
          </p>

          <p style={{ fontSize: "18px" }}>
            You've carried others. Now it's time to care for you.
          </p>
        </div>
      </header>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Helping Women Rise from Emotional Exhaustion</h2>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Rise Up & Shine Ministry helps women who feel emotionally tired,
          spiritually overwhelmed, and stretched thin by life. Through
          faith-based coaching, speaking engagements, and healing workshops,
          women rediscover identity, boundaries, and purpose.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#4b2a63",
          color: "white",
          textAlign: "center",
          padding: "30px"
        }}
      >
        <p>© Rise Up & Shine Ministry</p>
      </footer>

    </div>
  )
}
