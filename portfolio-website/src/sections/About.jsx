const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Synaptech Labs",
    location: "Remote, USA",
    period: "Sep 2023 – May 2025",
    type: "Internship",
    bullets: [
      "Analyzed large datasets using Python and SQL to identify trends and support business decisions",
      "Designed and maintained interactive dashboards using Tableau and Power BI for stakeholders",
      "Performed data cleaning, EDA, and statistical analysis using Pandas, NumPy, and Scikit-learn",
      "Developed ETL pipelines to automate data ingestion and transformation on AWS S3 and Lambda",
      "Built and evaluated ML models (classification, clustering) with Scikit-learn and TensorFlow",
      "Deployed ML models via Flask-based REST APIs for integration with business applications",
    ],
    stack: "Python · SQL · Pandas · NumPy · Scikit-learn · TensorFlow · Tableau · Power BI · AWS (S3, Lambda) · Flask · Git",
  },
  {
    title: "Data Analyst",
    company: "Cognizant",
    location: "India",
    period: "Jul 2019 – Jun 2023",
    type: "Full-time",
    bullets: [
      "Extracted, transformed, and loaded data from multiple sources using SQL and Python for business reporting",
      "Designed and optimized complex SQL queries, stored procedures, and views for analytical reporting",
      "Built Power BI dashboards and Excel reports to track KPIs and operational metrics for management",
      "Conducted root cause analysis and data quality audits, reducing reporting errors by 30%",
      "Collaborated with business stakeholders to translate requirements into scalable data solutions",
    ],
    stack: "Python · SQL · PostgreSQL · MySQL · Power BI · Excel · Pandas · AWS (EC2, S3) · Git",
  },
  {
    title: "Data Analyst Intern",
    company: "Juggernaut Solutions",
    location: "India",
    period: "Jan 2018 – Jun 2019",
    type: "Internship",
    bullets: [
      "Collected, cleaned, and analyzed data from internal systems using Python and Excel",
      "Wrote SQL queries to extract and summarize data for weekly business reports",
      "Created visualizations and charts in Excel and Google Sheets to support team decision-making",
    ],
    stack: "Python · SQL · MySQL · Excel · Google Sheets · Git",
  },
];

const tagStyle = (color) => ({
  display: "inline-block",
  fontSize: "0.72rem",
  fontWeight: "600",
  letterSpacing: "0.05em",
  padding: "2px 10px",
  borderRadius: "20px",
  marginLeft: "0.5rem",
  background: color === "blue" ? "#e8f0fb" : "#f0f0f0",
  color: color === "blue" ? "#0a66c2" : "#666",
});

const About = () => {
  return (
    <>
      {/* ABOUT */}
      <section className="alt-bg" style={{ padding: "4rem 2rem", backgroundColor: "#f9f9f9" }}>
        <h2>About Me</h2>

        <p style={{ maxWidth: "800px", marginTop: "1rem" }}>
          I'm a <strong>Data &amp; AI Engineer</strong> with 5+ years of experience across the full data stack —
          building pipelines, training models, and delivering insights that drive decisions. My work spans
          data engineering, machine learning, analytics, and BI visualization across the United States and India.
        </p>

        <p style={{ maxWidth: "800px", marginTop: "1rem" }}>
          I specialize in Python, SQL, Power BI, Tableau, Scikit-learn, and AWS. I'm equally comfortable
          writing ETL pipelines as I am building dashboards or tuning ML models — which means I can
          contribute across teams without requiring hand-offs.
        </p>

        <p style={{ maxWidth: "800px", marginTop: "1rem" }}>
          Most recently, I completed my <strong>MS in Information Technology &amp; Management (Advanced IT)</strong> at
          Florida Atlantic University (May 2025), deepening my expertise in data systems, cloud infrastructure,
          and AI applications.
        </p>

        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Python", "SQL", "Machine Learning", "Data Engineering", "Power BI", "Tableau", "AWS", "ETL", "EDA", "Scikit-learn", "TensorFlow"].map((s) => (
            <span key={s} style={{ background: "#e8f0fb", color: "#0a66c2", fontSize: "0.8rem", fontWeight: "600", padding: "4px 12px", borderRadius: "20px" }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ padding: "4rem 2rem" }}>
        <h2>Experience</h2>
        <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.25rem", marginBottom: "2rem" }}>
          5+ years total &nbsp;·&nbsp; 2+ years in the USA
        </p>

        {experiences.map((exp, i) => (
          <div key={i} style={{
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: i < experiences.length - 1 ? "1px solid #eee" : "none",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.25rem" }}>
              <h3 style={{ margin: 0, color: "#111", fontSize: "1.1rem" }}>{exp.title}</h3>
              <span style={tagStyle("blue")}>{exp.type}</span>
            </div>

            <p style={{ margin: "0.2rem 0 0", fontWeight: "600", color: "#0a66c2", fontSize: "0.95rem" }}>
              {exp.company}
              <span style={{ fontWeight: "400", color: "#888", marginLeft: "0.5rem" }}>· {exp.location} · {exp.period}</span>
            </p>

            <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", listStyle: "disc" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ color: "#444", fontSize: "0.95rem", marginBottom: "0.35rem", lineHeight: "1.6" }}>{b}</li>
              ))}
            </ul>

            <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "#888" }}>
              <strong style={{ color: "#555" }}>Stack:</strong> {exp.stack}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
