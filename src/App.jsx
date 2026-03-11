export default function App() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{fontFamily:"Arial, sans-serif"}}>

      {/* NAVIGATION */}
      <nav style={{
        background:"#4b2a63",
        color:"white",
        padding:"15px 30px",
        display:"flex",
        justifyContent:"space-between",
        position:"sticky",
        top:0
      }}>
        <strong>Rise Up & Shine</strong>

        <div style={{display:"flex",gap:"20px"}}>
          <button onClick={()=>scrollTo("home")} style={navBtn}>Home</button>
          <button onClick={()=>scrollTo("coaching")} style={navBtn}>Coaching</button>
          <button onClick={()=>scrollTo("blog")} style={navBtn}>Blog</button>
          <button onClick={()=>scrollTo("testimonials")} style={navBtn}>Stories</button>
          <button onClick={()=>scrollTo("prayer")} style={navBtn}>Prayer</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home"
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize:"cover",
          backgroundPosition:"center",
          color:"white",
          padding:"180px 20px",
          textAlign:"center"
        }}
      >
        <div style={{
          background:"rgba(0,0,0,0.45)",
          padding:"40px",
          display:"inline-block",
          borderRadius:"10px"
        }}>
          <h1 style={{fontSize:"48px"}}>Rise Up & Shine Ministry</h1>
          <p style={{fontSize:"22px"}}>Faith. Healing. Freedom.</p>
          <p>You’ve carried others. Now it's time to care for you.</p>

          <button style={ctaBtn}>Book Coaching Session</button>
        </div>
      </section>

      {/* COACHING */}
      <section id="coaching" style={sectionStyle}>
        <h2>Faith Coaching</h2>
        <p style={textStyle}>
          Personalized faith-centered coaching to help women process emotional
          exhaustion, rebuild boundaries, and rediscover purpose.
        </p>

        <button style={ctaBtn}>Schedule Coaching</button>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{...sectionStyle,background:"#f4f4f4"}}>
        <h2>Stories of Healing</h2>

        <div style={cardContainer}>
          <div style={card}>
            <p>"This ministry helped me rediscover my voice and my faith."</p>
            <strong>— Sarah</strong>
          </div>

          <div style={card}>
            <p>"I finally learned how to set healthy boundaries."</p>
            <strong>— Michelle</strong>
          </div>

          <div style={card}>
            <p>"I felt seen, heard, and spiritually renewed."</p>
            <strong>— Danielle</strong>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={sectionStyle}>
        <h2>Healing Resources</h2>

        <div style={cardContainer}>
          <div style={card}>
            <h3>Recovering From Emotional Burnout</h3>
            <p>Practical steps to rebuild your emotional strength.</p>
          </div>

          <div style={card}>
            <h3>Setting Boundaries Without Guilt</h3>
            <p>How faith and boundaries work together for healing.</p>
          </div>

          <div style={card}>
            <h3>Rediscovering Your Identity</h3>
            <p>Letting go of who you had to be and becoming who God created.</p>
          </div>
        </div>
      </section>

      {/* PRAYER */}
      <section id="prayer" style={{...sectionStyle,background:"#f4f4f4"}}>
        <h2>Submit a Prayer Request</h2>

        <form style={{maxWidth:"400px",margin:"auto"}}>
          <input placeholder="Name" style={inputStyle}/>
          <input placeholder="Email" style={inputStyle}/>
          <textarea placeholder="Prayer Request" style={inputStyle}/>
          <button style={ctaBtn}>Send Prayer</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{
        background:"#4b2a63",
        color:"white",
        textAlign:"center",
        padding:"30px"
      }}>
        <p>© Rise Up & Shine Ministry</p>
      </footer>

    </div>
  )
}

/* STYLES */

const navBtn = {
  background:"none",
  border:"none",
  color:"white",
  cursor:"pointer",
  fontSize:"14px"
}

const sectionStyle = {
  padding:"80px 20px",
  textAlign:"center"
}

const textStyle = {
  maxWidth:"700px",
  margin:"20px auto"
}

const cardContainer = {
  display:"flex",
  justifyContent:"center",
  gap:"30px",
  flexWrap:"wrap",
  marginTop:"30px"
}

const card = {
  maxWidth:"250px",
  background:"white",
  padding:"20px",
  borderRadius:"10px",
  boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}

const inputStyle = {
  width:"100%",
  padding:"10px",
  margin:"10px 0"
}

const ctaBtn = {
  background:"#4b2a63",
  color:"white",
  padding:"12px 25px",
  border:"none",
  marginTop:"20px",
  cursor:"pointer"
}
