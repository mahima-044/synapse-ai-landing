"use client";

export default function Timeline() {
  const steps = [
    {
      num: "01",
      title: "Trigger Event",
      subtitle: "Webhook or Cron pulse",
      desc: "A developer pushes a Git commit, a user completes a Stripe checkout, or a chron daemon sends a payload. Captured by Synapse edge listeners in < 2ms.",
      tag: "INBOUND"
    },
    {
      num: "02",
      title: "Synthesize Flow",
      subtitle: "Synapse AI Planning Matrix",
      desc: "Our neural workflow engine parses the triggers, determines dependencies, spins up isolated node containers, and plans the parallel execution paths.",
      tag: "COGNITIVE"
    },
    {
      num: "03",
      title: "Optimize Caches",
      subtitle: "Pre-heat index buffers",
      desc: "Query buffers are loaded, global states are reconciled, and database indexes pre-heat to avoid cold boots. Logic paths are optimized dynamically.",
      tag: "PERFORMANCE"
    },
    {
      num: "04",
      title: "Edge Deploy",
      subtitle: "Sync global servers",
      desc: "Static builds, SSR engines, and security keys sync to edge node clusters worldwide. Redundancy checks run automatically.",
      tag: "COMPILING"
    },
    {
      num: "05",
      title: "Broadcast Payloads",
      subtitle: "Integrate & notify",
      desc: "Slack webhooks fire with telemetry updates, database states resolve, dashboards reload, and email digests are scheduled. Before your coffee gets cold.",
      tag: "OUTBOUND"
    }
  ];

  return (
    <section id="timeline" className="timeline-section bg-grid-pattern">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="label-mono">CHRONOLOGICAL PROTOCOL</span>
          <h2 className="section-title">The Automation Timeline</h2>
          <p className="section-subtitle">
            See exactly how Synapse processes inputs, optimizes execution, and deploys final deliverables step-by-step.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="timeline-container">
          <div className="timeline-track-line"></div>

          {steps.map((step, idx) => (
            <div className="timeline-node-card" key={idx}>
              {/* Outer Indicator */}
              <div className="node-indicator-wrapper">
                <div className={`node-pulse-circle color-glow-${idx % 3}`}>
                  <span className="node-num tech-font">{step.num}</span>
                </div>
              </div>

              {/* Text Card */}
              <div className="node-text-panel glass-panel">
                <div className="node-header">
                  <div className="title-block">
                    <h3 className="node-title tech-font">{step.title}</h3>
                    <span className="node-subtitle">{step.subtitle}</span>
                  </div>
                  <span className="node-badge badge badge-success tech-font">{step.tag}</span>
                </div>
                <p className="node-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          background-color: var(--color-bg-alt);
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
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Timeline layout */
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* Vertical tracking line */
        .timeline-track-line {
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 30px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--color-accent) 0%,
            var(--color-secondary) 50%,
            var(--color-highlight) 100%
          );
          opacity: 0.25;
          z-index: 1;
        }

        .timeline-node-card {
          display: flex;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .node-indicator-wrapper {
          flex-shrink: 0;
          width: 62px;
          display: flex;
          justify-content: center;
        }

        .node-pulse-circle {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-full);
          background: var(--color-bg);
          border: 2px solid var(--color-outline);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s ease;
        }

        .node-pulse-circle::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-full);
          border: 1px solid inherit;
          opacity: 0;
          transform: scale(1.2);
          transition: all 0.4s ease;
        }

        .node-num {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text);
        }

        /* Glow modifiers */
        .color-glow-0 {
          border-color: var(--color-accent);
          box-shadow: 0 0 15px rgba(255, 200, 1, 0.15);
        }
        .color-glow-0::after {
          border-color: var(--color-accent);
          animation: node-ping 2.5s infinite ease-out;
        }

        .color-glow-1 {
          border-color: var(--color-secondary);
          box-shadow: 0 0 15px rgba(255, 153, 50, 0.15);
        }
        .color-glow-1::after {
          border-color: var(--color-secondary);
          animation: node-ping 2.5s infinite ease-out 0.8s;
        }

        .color-glow-2 {
          border-color: var(--color-highlight);
          box-shadow: 0 0 15px rgba(31, 111, 100, 0.15);
        }
        .color-glow-2::after {
          border-color: var(--color-highlight);
          animation: node-ping 2.5s infinite ease-out 1.6s;
        }

        .node-text-panel {
          flex-grow: 1;
          background: rgba(23, 31, 51, 0.6);
          padding: 24px;
        }

        .node-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 16px;
        }

        .node-title {
          font-size: 1.25rem;
          color: var(--color-text);
        }

        .node-subtitle {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        .node-badge {
          font-size: 10px;
          border-color: rgba(155, 144, 120, 0.3);
          color: var(--color-text);
        }

        .node-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @keyframes node-ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .timeline-track-line {
            left: 20px;
          }

          .timeline-node-card {
            gap: 20px;
          }

          .node-indicator-wrapper {
            width: 42px;
          }

          .node-pulse-circle {
            width: 40px;
            height: 40px;
          }

          .node-num {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
