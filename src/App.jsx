export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

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

      {/* ABOUT SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Helping Women Rise from Emotional Exhaustion</h2>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Rise Up & Shine Ministry helps women who feel emotionally tired,
          spiritually overwhelmed, and stretched thin by life. Through
          faith-based coaching, speaking engagements, and healing workshops,
          women rediscover identity, boundaries, and purpose.
        </p>
      </section>

      {/* SERVICES */}
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2>Ways We Can Work Together</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "30px"
          }}
        >
          <div style={{ maxWidth: "250px" }}>
            <h3>Faith Coaching</h3>
            <p>
              One-on-one guidance helping women process emotions,
              strengthen faith, and rebuild healthy boundaries.
            </p>
          </div>

          <div style={{ maxWidth: "250px" }}>
            <h3>Healing Workshops</h3>
            <p>
              Transformational workshops designed to guide women through
              emotional healing and spiritual growth.
            </p>
          </div>

          <div style={{ maxWidth: "250px" }}>
            <h3>Speaking Engagements</h3>
            <p>
              Powerful messages for churches, conferences, and women's
              events focused on restoration and hope.
            </p>
          </div>
        </div>
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
