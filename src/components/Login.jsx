import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles.css";
import styles from "./Dashboard.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  // navbar
  const Navbar = () => (
    <nav className={styles.navbar}>
      <h1>Analytics Dashboard</h1>
    </nav>
  );

  // footer
  const Footer = () => (
    <footer className={styles.footer}>
      &copy; 2025, All Rights Reserved.
    </footer>
  );

  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [otpSent, timer]);

  // send Otp
  const sendOtp = async () => {
    if (!email) {
      alert("Please enter an email");
      return;
    }

    // 6 Digit Otp
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setOtpSent(true);
    setTimer(30);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      // alert("EmailJS credentials are missing. Check your .env file.");
      return;
    }

    emailjs
      .send(serviceID, templateID, { to_email: email, otp: newOtp }, publicKey)
      .then(() => {
        alert(`OTP has been sent to ${email}`);
      })
      .catch((error) => {
        // console.error("EmailJS Error:", error);
        alert("Failed to send OTP. Try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="mainbody">
      <Navbar />
      <div className="login-container">
        <div className="outercard">
          <div className="sideby">
            {!otpSent ? (
              <div className="email-container">
                <h2 style={{ color: "white" }}>Sign In</h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail"
                  required
                />
                <br />
                <button onClick={sendOtp}>Send OTP</button>
              </div>
            ) : (
              <div className="otp-container">
                <h2
                  style={{
                    color: "white",
                    margin: "10px auto",
                    textAlign: "center",
                  }}
                >
                  Enter OTP sent to Email
                </h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="OTP"
                    required
                  />
                  <br />
                  {timer > 0 ? (
                    <p className="timer-text">Resend OTP in {timer} sec</p>
                  ) : (
                    <button
                      type="button"
                      className="resendbtn"
                      onClick={sendOtp}
                      style={{
                        display: "block",
                        margin: "10px auto",
                        fontSize: "12px",
                        padding: "5px 8px",
                      }}
                    >
                      Resend OTP
                    </button>
                  )}
                  <br />
                  <button
                    type="submit"
                    className="validate-btn"
                    style={{ display: "block", margin: "10px auto" }}
                  >
                    Validate
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="sideby1">
            <h3>Web application with Analytics dashboard</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
