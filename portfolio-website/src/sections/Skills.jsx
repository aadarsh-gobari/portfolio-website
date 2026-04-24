const skillGroups = [
  {
    category: "Core Languages",
    skills: ["Python", "SQL", "R", "JavaScript", "Java", "C/C++"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Feature Engineering", "Model Deployment", "Cross-Validation"],
  },
  {
    category: "Data Engineering & Analytics",
    skills: ["ETL", "Data Pipelines", "EDA", "Pandas", "NumPy", "PySpark (Basic)", "Databricks"],
  },
  {
    category: "BI & Visualization",
    skills: ["Power BI", "Tableau", "DAX", "Excel", "Data Storytelling"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS S3", "AWS Lambda", "AWS EC2", "Docker", "Git", "Linux", "Flask", "REST APIs"],
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "Statistical Analysis", "Business Intelligence"],
  },
];

const Skills = () => {
  return (
    <section className="alt-bg" style={{ padding: "4rem 2rem", backgroundColor: "#f9f9f9" }}>
      <h2>Skills</h2>
      <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.25rem", marginBottom: "2rem" }}>
        Full-stack data capabilities — engineering, science, analytics, and BI
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {skillGroups.map((group) => (
          <div key={group.category} style={{
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
          }}>
            <p style={{ fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0a66c2", marginBottom: "0.75rem" }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {group.skills.map((skill) => (
                <span key={skill} style={{
                  background: "#f4f4f4",
                  color: "#333",
                  fontSize: "0.82rem",
                  fontWeight: "500",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
