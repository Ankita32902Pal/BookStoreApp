import React from "react";

const Contact = () => {
  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
    },
    container: {
      backgroundColor: "#fff",
      padding: "30px 40px",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "15px",
      fontSize: "14px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "14px",
      resize: "none",
    },
    button: {
      marginTop: "15px",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form style={styles.form}>
          <label style={styles.label}>
            Name:
            <input type="text" placeholder="Enter your name" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Email:
            <input type="email" placeholder="Enter your email" required style={styles.input} />
          </label>
          <label style={styles.label}>
            Message:
            <textarea placeholder="Type your message" required style={styles.textarea}></textarea>
          </label>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;