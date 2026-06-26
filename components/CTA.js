"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="cta" className="cta-section bg-grid-pattern">
      <div className="radial-glow glow-cta-bg"></div>

      <div className="container cta-container">
        <div className="cta-content glass-panel animated-border">
          <span className="label-mono">IMMEDIATE DEPLOYMENT</span>
          <h2 className="cta-title tech-font">
            Ready to Automate <br />
            <span className="gradient-text">Before Coffee Gets Cold?</span>
          </h2>
          <p className="cta-desc">
            Deploy your first core neural workflow in under 3 minutes. No credit card required. Free tier includes 1,000 executions monthly.
          </p>

          {!submitted ? (
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                className="input-field cta-input tech-font"
                placeholder="ENTER YOUR DEVELOPER EMAIL..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary tech-font glow-primary no-underline">
                Start Free
              </button>
            </form>
          ) : (
            <div className="cta-success tech-font animate-blur-reveal">
              <span className="success-icon">✓</span> ACCESS PROTOCOL REQUESTED. CHECK YOUR INBOX.
            </div>
          )}

          <div className="cta-stats-row">
            <div className="cta-stat">
              <span className="num tech-font">14.2k</span>
              <span className="lbl">Active Containers</span>
            </div>
            <div className="cta-stat">
              <span className="num tech-font">&lt; 12ms</span>
              <span className="lbl">Average Propagation</span>
            </div>
            <div className="cta-stat">
              <span className="num tech-font">99.99%</span>
              <span className="lbl">Platform SLA</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background-color: var(--color-bg);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          background-size: 30px 30px;
          animation: grid-move-anim 20s linear infinite;
        }

        .radial-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: var(--radius-full);
          filter: blur(200px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 1;
        }

        .glow-cta-bg {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
        }

        .cta-container {
          position: relative;
          z-index: 5;
          max-width: 900px;
        }

        .cta-content {
          background: rgba(11, 19, 38, 0.85);
          padding: 60px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: var(--radius-lg);
        }

        .cta-title {
          font-size: 2.5rem;
          line-height: 1.2;
          color: var(--color-text);
          margin-top: var(--space-sm);
          margin-bottom: var(--space-md);
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 10px rgba(255, 200, 1, 0.1));
        }

        .cta-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .cta-form {
          display: flex;
          width: 100%;
          max-width: 520px;
          gap: 12px;
          margin-bottom: var(--space-xl);
        }

        .cta-input {
          flex-grow: 1;
          text-transform: uppercase;
        }

        .cta-success {
          font-size: 0.9rem;
          color: var(--color-highlight-bright);
          border: 1px solid var(--color-highlight);
          background: var(--color-highlight-bg);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          margin-bottom: var(--space-xl);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .success-icon {
          font-weight: 700;
        }

        .cta-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          width: 100%;
          border-top: 1px solid rgba(155, 144, 120, 0.1);
          padding-top: var(--space-lg);
        }

        .cta-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-stat .num {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .cta-stat .lbl {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 4px;
        }

        @keyframes grid-move-anim {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 60px 60px;
          }
        }

        @media (max-width: 768px) {
          .cta-content {
            padding: 40px 20px;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-form {
            flex-direction: column;
            gap: 12px;
          }

          .cta-stats-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
