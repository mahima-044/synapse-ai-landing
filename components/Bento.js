"use client";
import { useState, useEffect } from "react";

export default function Bento() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const features = [
    {
      title: "Recursive AI Workflows",
      subtitle: "Autonomous Logic Maps",
      desc: "Build self-healing, recursive loops that optimize themselves over time. Deploy 1,000+ nodes in a single deployment with zero latency penalties.",
      type: "workflows",
      cmd: "npm install @synapse/recursive-engine"
    },
    {
      title: "Real-time Metrics",
      subtitle: "Telemetry Analytics",
      desc: "Visualise throughput, latency, and tokens in high-resolution dashboards.",
      type: "metrics"
    },
    {
      title: "Robust API",
      subtitle: "Zero-latency Endpoints",
      desc: "REST, GraphQL, and gRPC endpoints.",
      type: "api"
    },
    {
      title: "Team Sync",
      subtitle: "State-wide Action Logs",
      desc: "Multi-tenant collaboration tools.",
      type: "team"
    }
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "workflows":
        return (
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="bento-icon-svg">
            <circle cx="12" cy="12" r="3" fill="var(--color-accent)" />
            <line x1="12" y1="12" x2="6" y2="6" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="12" y1="12" x2="18" y2="6" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="12" y1="12" x2="6" y2="18" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="12" y1="12" x2="18" y2="18" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="12" y1="12" x2="12" y2="4" stroke="var(--color-accent)" strokeWidth="2" />
            <circle cx="6" cy="6" r="2.5" fill="#0b1326" stroke="var(--color-accent)" strokeWidth="2" />
            <circle cx="18" cy="6" r="2.5" fill="#0b1326" stroke="var(--color-accent)" strokeWidth="2" />
            <circle cx="6" cy="18" r="2.5" fill="#0b1326" stroke="var(--color-accent)" strokeWidth="2" />
            <circle cx="18" cy="18" r="2.5" fill="#0b1326" stroke="var(--color-accent)" strokeWidth="2" />
            <circle cx="12" cy="4" r="2.5" fill="#0b1326" stroke="var(--color-accent)" strokeWidth="2" />
          </svg>
        );
      case "metrics":
        return (
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="bento-icon-svg">
            <path d="M3 18 L8 13 L13 16 L21 8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8 H21 V12" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="13" cy="13" r="4.5" stroke="var(--color-accent)" strokeWidth="2" fill="#171f33" />
            <line x1="16.5" y1="16.5" x2="20.5" y2="20.5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "api":
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="bento-icon-svg">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="var(--color-accent)" strokeWidth="2" />
            <path d="M7 9 L10 12 L7 15" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="15" x2="16" y2="15" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "team":
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-accent)" strokeWidth="2" className="bento-icon-svg">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="bento-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title tech-font">Engineered for Precision</h2>
          <p className="section-subtitle">
            A modular ecosystem designed to handle complex logic, massive throughput, and developer sanity.
          </p>
        </div>

        {/* Desktop Bento Grid */}
        {!isMobile && (
          <div className="bento-grid">
            {/* Left Card: Recursive AI Workflows */}
            <div className="bento-card card-workflows glass-panel animated-border">
              <div className="card-top-content">
                <div className="icon-container">
                  {renderIcon("workflows")}
                </div>
                <h3 className="card-title tech-font">{features[0].title}</h3>
                <p className="card-desc">{features[0].desc}</p>
              </div>
              <div className="card-bottom-content">
                <div className="divider-line"></div>
                <code className="card-code tech-font">{features[0].cmd}</code>
              </div>
            </div>

            {/* Right Side Column Container */}
            <div className="right-cards-container">
              {/* Top Right Card: Real-time Metrics */}
              <div className="bento-card card-metrics glass-panel animated-border">
                <div className="metrics-text-side">
                  <h3 className="card-title tech-font">{features[1].title}</h3>
                  <p className="card-desc">{features[1].desc}</p>
                </div>
                <div className="metrics-icon-side">
                  {renderIcon("metrics")}
                </div>
              </div>

              {/* Bottom Right Row */}
              <div className="bottom-row-container">
                {/* Robust API */}
                <div className="bento-card card-small glass-panel animated-border">
                  <div className="icon-container-small">
                    {renderIcon("api")}
                  </div>
                  <h3 className="card-title-small tech-font">{features[2].title}</h3>
                  <p className="card-desc-small">{features[2].desc}</p>
                </div>

                {/* Team Sync */}
                <div className="bento-card card-small glass-panel animated-border">
                  <div className="icon-container-small">
                    {renderIcon("team")}
                  </div>
                  <h3 className="card-title-small tech-font">{features[3].title}</h3>
                  <p className="card-desc-small">{features[3].desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Accordion */}
        {isMobile && (
          <div className="mobile-accordion">
            {features.map((feature, idx) => (
              <div
                className={`accordion-tab glass-panel ${activeAccordion === idx ? "active" : ""}`}
                key={idx}
                onClick={() => setActiveAccordion(idx)}
              >
                <div className="accordion-header">
                  <h3 className="accordion-title tech-font">{feature.title}</h3>
                  <span className="chevron-icon">{activeAccordion === idx ? "−" : "+"}</span>
                </div>
                <div className="accordion-content">
                  <p className="accordion-desc">{feature.desc}</p>
                  {feature.cmd && (
                    <div className="accordion-code-wrapper">
                      <code className="card-code tech-font">{feature.cmd}</code>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .bento-section {
          background-color: var(--color-bg);
          padding: 100px 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }

        .section-title {
          font-size: 2.25rem;
          color: var(--color-text);
          margin-top: 8px;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Desktop Bento Grid */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-card {
          background: rgba(23, 31, 51, 0.45);
          border: 1px solid rgba(155, 144, 120, 0.1);
          border-radius: var(--radius-lg);
          padding: 32px;
          transition: all 0.3s ease;
        }

        .bento-card:hover {
          border-color: rgba(255, 200, 1, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 200, 1, 0.05);
        }

        /* Left Card: Recursive AI Workflows */
        .card-workflows {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 380px;
        }

        .icon-container {
          margin-bottom: 24px;
        }

        .card-title {
          font-size: 1.85rem;
          color: var(--color-text);
          margin-bottom: 16px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 480px;
        }

        .divider-line {
          height: 1px;
          background: rgba(155, 144, 120, 0.12);
          margin-top: 32px;
          margin-bottom: 20px;
          width: 100%;
        }

        .card-code {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          opacity: 0.7;
          letter-spacing: 0.05em;
        }

        /* Right Side Column Container */
        .right-cards-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        /* Top Right Card: Metrics */
        .card-metrics {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 175px;
          gap: 24px;
        }

        .metrics-text-side {
          flex: 1;
        }

        .metrics-icon-side {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 200, 1, 0.05);
          border: 1px solid rgba(255, 200, 1, 0.1);
        }

        /* Bottom Row Column Container */
        .bottom-row-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }

        /* Small Cards (API & Team) */
        .card-small {
          min-height: 185px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .icon-container-small {
          margin-bottom: 16px;
        }

        .card-title-small {
          font-size: 1.15rem;
          color: var(--color-text);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .card-desc-small {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Mobile Accordion Styles */
        .mobile-accordion {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .accordion-tab {
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
        }

        .accordion-header {
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(23, 31, 51, 0.4);
        }

        .accordion-title {
          font-size: 1.05rem;
          color: var(--color-text);
        }

        .chevron-icon {
          font-size: 1.25rem;
          color: var(--color-accent);
        }

        .accordion-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0 20px;
        }

        .accordion-tab.active .accordion-content {
          max-height: 350px;
          opacity: 1;
          padding: 16px 20px 24px 20px;
          border-top: 1px solid rgba(155, 144, 120, 0.08);
        }

        .accordion-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .accordion-code-wrapper {
          margin-top: 12px;
          padding: 8px 12px;
          background: rgba(6, 14, 32, 0.4);
          border: 1px solid rgba(155, 144, 120, 0.08);
          border-radius: var(--radius-sm);
        }

        .bento-icon-svg {
          filter: drop-shadow(0 0 6px rgba(255, 200, 1, 0.3));
        }
      `}</style>
    </section>
  );
}
