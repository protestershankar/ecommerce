const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.text}>
        Welcome to our platform. We aim to provide a smooth and reliable
        shopping experience with high-quality products and user-friendly
        features.
      </p>

      <p style={styles.text}>
        This project is built using modern web technologies like React and Vite,
        focusing on performance, scalability, and clean UI design.
      </p>

      <p style={styles.text}>
        Our goal is to continuously improve the platform while keeping the user
        experience simple and efficient.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};

export default About;
