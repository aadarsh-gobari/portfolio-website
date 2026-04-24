const projects = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "Built an end-to-end business intelligence solution using SQL and Power BI to track sales KPIs across product lines and regions. Developed DAX measures, calculated columns, and drill-through reports enabling management to identify revenue trends and make faster data-driven decisions.",
    stack: ["SQL", "Power BI", "DAX", "Data Visualization"],
    github: "https://github.com/aadarsh-gobari",
    highlight: true,
  },
  {
    title: "Cancer Prediction using Naïve Bayes",
    description:
      "Developed a supervised ML model to predict cancer diagnoses from clinical datasets, achieving ~85% accuracy. Applied feature engineering, EDA, and model evaluation (precision, recall, ROC-AUC) using Scikit-learn.",
    stack: ["Python", "Scikit-learn", "EDA", "Feature Engineering"],
    github: "https://github.com/aadarsh-gobari/cancer-prediction-naive-bayes",
  },
  {
    title: "Image Classification using CNN",
    description:
      "Designed and trained a Convolutional Neural Network (CNN) using TensorFlow and Keras for multi-class image classification. Achieved ~92% validation accuracy through architecture tuning and data augmentation.",
    stack: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    github: "https://github.com/aadarsh-gobari/image-classification-cnn",
  },
  {
    title: "IoT Smart Home Monitoring System",
    description:
      "Built a real-time data pipeline for IoT sensor data using Python, AWS Lambda, and S3. Automated ingestion, transformation, and storage of device telemetry — enabling live monitoring and alerting for smart home devices.",
    stack: ["Python", "AWS Lambda", "AWS S3", "Data Pipelines"],
    github: "https://github.com/aadarsh-gobari",
  },
];

const Projects = () => {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <h2>Projects</h2>
      <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.25rem", marginBottom: "2rem" }}>
        End-to-end projects spanning ML, data engineering, and BI
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {projects.map((proj) => (
          <div key={proj.title} style={{
            background: "#fff",
            border: proj.highlight ? "2px solid #0a66c2" : "1px solid #e8e8e8",
            borderRadius: "10px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}>
            {proj.highlight && (
              <span style={{ fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0a66c2" }}>
                ★ Featured
              </span>
            )}

            <h3 style={{ margin: 0, fontSize: "1rem", color: "#111" }}>{proj.title}</h3>

            <p style={{ margin: 0, fontSize: "0.9rem", color: "#555", lineHeight: "1.65" }}>
              {proj.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {proj.stack.map((s) => (
                <span key={s} style={{
                  background: "#f4f4f4",
                  color: "#444",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  padding: "3px 9px",
                  borderRadius: "5px",
                  border: "1px solid #e0e0e0",
                }}>
                  {s}
                </span>
              ))}
            </div>

            <a href={proj.github} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem", marginTop: "auto" }}>
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
