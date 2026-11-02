import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registration successful!");
      navigate("/login");

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="brand">✦ TaskFlow</div>

        <div className="visual-content">
          <span className="visual-tag">A FRESH START</span>
          <h1>Your goals deserve a plan.</h1>
          <p>
            Create your free account and bring all your
            tasks, plans, and ideas together.
          </p>
          <div className="visual-art">✦</div>
          <div className="visual-caption">
            Small steps. Big achievements.
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form">
          <div className="mobile-brand">✦ TaskFlow</div>

          <span className="welcome">GET STARTED</span>
          <h2>Create your account</h2>
          <p className="subtitle">
            Join TaskFlow and organize your day.
          </p>

          <form onSubmit={handleRegister}>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />

            <label htmlFor="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Enter password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={6}
              required
            />

            {message && <p>{message}</p>}

            <button
              className="auth-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
              <span>→</span>
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 