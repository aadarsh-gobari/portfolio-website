const Projects = () => {
  return (
    <section  className="alt-bg" style={{ padding: "4rem", backgroundColor: "#f9f9f9" }}>
      <h2>Projects</h2>

      {/* Project 1 */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Cancer Prediction using Machine Learning</h3>
        <p>
          Built a machine learning model to predict cancer outcomes using
          clinical datasets. Performed data cleaning, exploratory data analysis,
          feature engineering, and model evaluation.
        </p>
        <p>
          <strong>Tech:</strong> Python, Pandas, Scikit-learn, EDA
        </p>
        <a
          href="https://github.com/aadarsh-gobari/cancer-prediction-naive-bayes"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 2 */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Image Classification using CNN</h3>
        <p>
          Designed and trained a convolutional neural network (CNN) for image
          classification tasks. Applied data augmentation and achieved high
          validation accuracy.
        </p>
        <p>
          <strong>Tech:</strong> TensorFlow, Keras, Deep Learning
        </p>
        <a
          href="https://github.com/aadarsh-gobari/image-classification-cnn"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 3 */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Sales Analytics Dashboard</h3>
        <p>
          Developed interactive dashboards to analyze sales performance and
          trends. Created KPIs and DAX measures to support business decision
          making.
        </p>
        <p>
          <strong>Tech:</strong> SQL, Power BI, Data Visualization
        </p>
        <a
          href="https://github.com/aadarsh-gobari"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 4 */}
      <div style={{ marginTop: "2rem" }}>
        <h3>IoT Smart Home Monitoring System</h3>
        <p>
          Built a cloud-based monitoring system for IoT sensor data with real-time
          processing and storage using AWS services.
        </p>
        <p>
          <strong>Tech:</strong> Python, AWS Lambda, S3, Cloud Computing
        </p>
        <a
          href="https://github.com/aadarsh-gobari"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
