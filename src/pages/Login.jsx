import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="brand">✦ TaskFlow</div>
        <div className="visual-content">
          <span className="visual-tag">YOUR SPACE TO ACHIEVE</span>
          <h1>Make time for what matters.</h1>
          <p>
            Organize your work, focus on your goals,
            and make every day count.
          </p>
          <div className="visual-art">✓</div>
          <div className="visual-caption">
            Plan smarter. Get more done.
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form">
          <div className="mobile-brand">✦ TaskFlow</div>
          <span className="welcome">WELCOME BACK</span>
          <h2>Sign in to your account</h2>
          <p className="subtitle">
            Your tasks are waiting for you.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <div className="password-label">
              <label htmlFor="password">Password</label>
              <a href="#forgot">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="auth-button" type="submit">
              Sign In <span>→</span>
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}