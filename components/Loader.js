"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "SYNAPSE AI v0.1.0-beta initialized...",
    "Connecting core neural workflow engines...",
    "Mounting distributed edge containers...",
    "Binding Forsythia accent layer...",
    "Synapse AI fully charged. Ready to automate."
  ];

  useEffect(() => {
    // Quick progress loading simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 800); // Wait a bit before hiding
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 20 && logIndex === 0) setLogIndex(1);
    else if (progress > 45 && logIndex === 1) setLogIndex(2);
    else if (progress > 70 && logIndex === 2) setLogIndex(3);
    else if (progress > 95 && logIndex === 3) setLogIndex(4);
  }, [progress, logIndex]);

  if (!visible) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="logo-section">
          {/* Glowing Synapse Logo Icon */}
          <svg className="glowing-logo" viewBox="0 0 100 100" width="70" height="70">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffc801" />
                <stop offset="100%" stopColor="#ff9932" />
              </linearGradient>
            </defs>
            <path
              d="M30,50 Q40,30 50,50 T70,50"
              fill="none"
              stroke="url(#logo-gradient)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="30" cy="50" r="5" fill="#ff9932" className="pulse-dot" />
            <circle cx="50" cy="50" r="5" fill="#ffc801" className="pulse-dot" />
            <circle cx="70" cy="50" r="5" fill="#ff9932" className="pulse-dot" />
          </svg>
          <h1 className="loader-title tech-font">SYNAPSE AI</h1>
        </div>

        {/* Progress Bar Container */}
        <div className="progress-wrapper">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text tech-font">
            <span>{progress}%</span>
          </div>
        </div>

        {/* Terminal Logs */}
        <div className="terminal-logs-wrapper">
          <p className="terminal-log tech-font">&gt; {logs[logIndex]}</p>
        </div>
      </div>

      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0b1326;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fade-out-anim 0.5s ease 1.1s forwards;
        }

        .loader-content {
          width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .logo-section {
          margin-bottom: var(--space-md);
        }

        .glowing-logo {
          filter: drop-shadow(0 0 8px rgba(255, 200, 1, 0.6));
          animation: rotate-pulse 2.5s infinite ease-in-out;
        }

        .loader-title {
          font-size: 1.5rem;
          color: var(--color-text);
          letter-spacing: 0.15em;
          margin-top: 10px;
        }

        .progress-wrapper {
          width: 100%;
          margin-bottom: var(--space-md);
        }

        .progress-bar-track {
          width: 100%;
          height: 4px;
          background: rgba(155, 144, 120, 0.1);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          border-radius: var(--radius-full);
          transition: width 0.1s linear;
        }

        .progress-text {
          font-size: 0.85rem;
          color: var(--color-accent);
          display: flex;
          justify-content: flex-end;
        }

        .terminal-logs-wrapper {
          height: 24px;
          overflow: hidden;
        }

        .terminal-log {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          opacity: 0.95;
          animation: terminal-flicker 0.15s ease infinite alternate;
        }

        @keyframes rotate-pulse {
          0%, 100% {
            transform: scale(0.98);
            filter: drop-shadow(0 0 8px rgba(255, 200, 1, 0.4));
          }
          50% {
            transform: scale(1.03);
            filter: drop-shadow(0 0 16px rgba(255, 200, 1, 0.7));
          }
        }

        @keyframes terminal-flicker {
          0% { opacity: 0.93; }
          100% { opacity: 1; }
        }

        @keyframes fade-out-anim {
          to {
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
