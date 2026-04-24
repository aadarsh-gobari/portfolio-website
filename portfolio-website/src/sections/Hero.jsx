const Hero = () => {
  return (
    <section style={{ padding: "5rem 2rem 3rem", borderBottom: "1px solid #e8e8e8" }}>
      <p style={{ fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.12em", color: "#0a66c2", textTransform: "uppercase", marginBottom: "0.75rem" }}>
        Available for Full-Time Roles · F-1 OPT · Miami, FL
      </p>

      <h1 style={{ fontSize: "3.2rem", fontWeight: "700", lineHeight: "1.15", color: "#111", marginBottom: "0.75rem" }}>
        Aadarsh Gobari
      </h1>

      <h2 style={{ fontSize: "1.25rem", fontWeight: "500", color: "#444", marginBottom: "1.25rem", lineHeight: "1.5" }}>
        Data &amp; AI Engineer &nbsp;·&nbsp; Machine Learning &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; Data Engineering &nbsp;·&nbsp; Analytics
      </h2>

      <p style={{ maxWidth: "680px", color: "#555", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "0.75rem" }}>
        5+ years turning raw data into decisions — from building ETL pipelines and training ML models
        to designing BI dashboards and surfacing insights. I work across the full data stack so teams
        don't have to choose between an analyst, a scientist, and an engineer.
      </p>

      <p style={{ maxWidth: "680px", color: "#555", fontSize: "1.0rem", lineHeight: "1.75", marginBottom: "2rem" }}>
        MS in Information Technology &amp; Management · Florida Atlantic University, May 2025
      </p>

      <div className="button-group">
        <a href="https://github.com/aadarsh-gobari" target="_blank" rel="noreferrer" className="primary">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/aadarsh-gobari" target="_blank" rel="noreferrer" className="secondary">
          LinkedIn
        </a>
        <a href="/portfolio-website/Aadarsh_Gobari_Resume.pdf" target="_blank" rel="noreferrer" className="secondary">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
