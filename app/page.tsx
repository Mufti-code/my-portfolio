export default function Home() {
  return (
    <main
      style={{
        padding: "60px",
        fontFamily: "sans-serif",
        maxWidth: "1000px",
        margin: "auto",
        lineHeight: "1.6",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "44px" }}>Maulana Al Mufti 🚀</h1>
        <p style={{ fontSize: "20px" }}>
          Full Stack Developer | React | Next.js | Node.js | Laravel
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: "60px" }}>
        <h2>About Me</h2>
        <p>
          Saya seorang Full Stack Developer yang fokus membangun web modern
          menggunakan React, Next.js, Node.js, dan Laravel. Saya suka membuat
          aplikasi yang cepat, scalable, dan user friendly.
        </p>
      </section>

      {/* TECH STACK */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Tech Stack</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Laravel",
            "MySQL",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              style={{
                background: "#eee",
                padding: "8px 12px",
                borderRadius: "6px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>AI Tools Website</h3>
            <p>Website kumpulan tools AI untuk produktivitas.</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Developer Portfolio</h3>
            <p>Portfolio developer menggunakan Next.js.</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Admin Dashboard</h3>
            <p>Dashboard admin untuk manajemen data.</p>
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <section style={{ marginBottom: "60px" }}>
        <h2>GitHub</h2>

        <a href="https://github.com/Mufti-code">
          github.com/Mufti-code
        </a>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>

        <p>Email: maulana3al0mufti@gmail.com</p>
        <p>WhatsApp: 082218292014</p>
      </section>
    </main>
  );
}