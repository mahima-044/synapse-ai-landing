"use client";

export default function Logos() {
  const logos = [
    { name: "SLACK", icon: "💬" },
    { name: "GITHUB", icon: "🐙" },
    { name: "STRIPE", icon: "💳" },
    { name: "FIGMA", icon: "📐" },
    { name: "SALESFORCE", icon: "☁️" },
    { name: "VERCEL", icon: "▲" },
    { name: "JIRA", icon: "🔷" },
    { name: "DISCORD", icon: "👾" }
  ];

  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-title tech-font">INTEGRATES WITH YOUR ENTIRE STACK</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Double list to create seamless infinite loop */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div className="marquee-item" key={idx}>
              <span className="logo-icon">{logo.icon}</span>
              <span className="logo-name tech-font">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          background-color: var(--color-bg-alt);
          padding: var(--space-md) 0;
          border-top: 1px solid rgba(155, 144, 120, 0.08);
          border-bottom: 1px solid rgba(155, 144, 120, 0.08);
          overflow: hidden;
        }

        .marquee-title {
          text-align: center;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          letter-spacing: 0.25em;
          margin-bottom: var(--space-md);
          opacity: 0.8;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 60px;
          animation: marquee 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0.55;
          filter: grayscale(1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .marquee-item:hover {
          opacity: 1;
          filter: grayscale(0);
          color: var(--color-accent);
          transform: scale(1.05);
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .logo-name {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }
      `}</style>
    </section>
  );
}
