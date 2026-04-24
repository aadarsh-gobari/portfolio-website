import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Education = () => (
  <section style={{ padding: "4rem 2rem" }}>
    <h2>Education</h2>

    <div style={{ marginTop: "1.5rem", borderLeft: "3px solid #0a66c2", paddingLeft: "1.25rem", marginBottom: "1.75rem" }}>
      <h3 style={{ margin: 0, fontSize: "1.05rem", color: "#111" }}>
        Master of Science — Information Technology &amp; Management (Advanced IT)
      </h3>
      <p style={{ margin: "0.2rem 0 0", fontWeight: "600", color: "#0a66c2" }}>Florida Atlantic University</p>
      <p style={{ margin: "0.1rem 0 0", color: "#888", fontSize: "0.9rem" }}>Boca Raton, FL &nbsp;·&nbsp; May 2025</p>
      <p style={{ marginTop: "0.5rem", color: "#555", fontSize: "0.9rem" }}>
        Focused on advanced data systems, cloud computing, machine learning, and IT management.
      </p>
    </div>

    <div style={{ borderLeft: "3px solid #ddd", paddingLeft: "1.25rem" }}>
      <h3 style={{ margin: 0, fontSize: "1.05rem", color: "#111" }}>
        Bachelor of Technology — Computer Science &amp; Engineering
      </h3>
      <p style={{ margin: "0.2rem 0 0", fontWeight: "600", color: "#555" }}>DIT University</p>
      <p style={{ margin: "0.1rem 0 0", color: "#888", fontSize: "0.9rem" }}>Dehradun, India &nbsp;·&nbsp; June 2021</p>
    </div>
  </section>
);

const Certifications = () => (
  <section className="alt-bg" style={{ padding: "3rem 2rem", backgroundColor: "#f9f9f9" }}>
    <h2>Certifications</h2>
    <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
      <li>🏅 <strong>Machine Learning using Python</strong> — IBM</li>
      <li>🏅 <strong>Python Programming</strong> — Grade A</li>
      <li>🏅 <strong>Android App Development</strong></li>
    </ul>
  </section>
);

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
