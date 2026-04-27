import React, { useState } from "react";
import "./contact.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github2.png";

const API_URL = process.env.REACT_APP_API_URL || "";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Make sure the server is running.");
    }
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <div className="contactLeft">
          <h1 className="contactPageTitle">Get in Touch</h1>
          <p className="subtitle">I'd like to hear from you!</p>
          <p className="contactDesc">
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>
          <div className="emailRow">
            <span>✉</span>
            <p>ompjamun@gmail.com</p>
          </div>
          <div className="links">
            <a
              href="https://github.com/JAYAMUGUNTHA22"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" className="socialIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayamuguntha-p-4a39352ab/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="socialIcon" />
            </a>
          </div>
        </div>

        <div className="contactRight">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="row">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  className="name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  className="name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label>Email *</label>
            <input
              type="email"
              className="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Message</label>
            <textarea
              className="msg"
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {status === "error" && (
              <p className="contactFormError">{errorMsg}</p>
            )}
            {status === "success" && (
              <p className="contactFormSuccess">Message sent! I'll get back soon.</p>
            )}
            <button
              type="submit"
              className="submitBtn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
