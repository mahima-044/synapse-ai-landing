"use client";

export default function FAQ() {
  const faqs = [
    {
      q: "How does Synapse AI automate workflows?",
      a: "Synapse captures inbound webhooks, chron pulses, or API triggers and feeds them into our neural flow orchestrator. Using containerized agent pods, it executes steps concurrently, fetches dependencies, and returns payloads without server overhead."
    },
    {
      q: "What integrations are supported out of the box?",
      a: "We support major code platforms (GitHub, GitLab), workspace hubs (Slack, Discord, Microsoft Teams), cloud CDNs (Vercel, AWS Edge, Netlify), and transactional payment gateways (Stripe, PayPal, Razorpay) natively."
    },
    {
      q: "Can we self-host Synapse on our own secure VPC?",
      a: "Yes. Our Enterprise plan includes a Docker-compose pack and Kubernetes Helm charts to run Synapse AI entirely on-premise, satisfying strict local compliance frameworks (HIPAA, SOC-2, GDPR)."
    },
    {
      q: "How is the 20% annual discount applied?",
      a: "The discount is calculated dynamically by multiplying the base price by 12 (months) and applying a 20% deduction (formula: price * 12 * 0.8). You pay upfront for the year and gain continuous access with zero price inflation."
    }
  ];

  return (
    <section id="faq" className="faq-section bg-grid-pattern">
      <div className="radial-glow glow-faq-right"></div>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="label-mono">SUPPORT PROTOCOLS</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find technical specifications, deployment rules, and billing details regarding the Synapse network.
          </p>
        </div>

        {/* FAQ Grid / Accordions */}
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <details className="faq-item glass-panel" key={idx}>
              <summary className="faq-question tech-font">
                <span>{faq.q}</span>
                <span className="faq-chevron">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background-color: var(--color-bg-alt);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .radial-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: var(--radius-full);
          filter: blur(150px);
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
        }

        .glow-faq-right {
          bottom: 10%;
          right: -150px;
          background: var(--color-highlight);
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

        /* FAQ List */
        .faq-list {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          position: relative;
          z-index: 5;
        }

        .faq-item {
          background: rgba(23, 31, 51, 0.5);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item[open] {
          background: rgba(23, 31, 51, 0.8);
          border-color: rgba(255, 200, 1, 0.2);
        }

        .faq-question {
          list-style: none;
          padding: 20px 24px;
          font-size: 1rem;
          color: var(--color-text);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          outline: none;
          user-select: none;
        }

        /* Hide default marker in details */
        .faq-question::-webkit-details-marker {
          display: none;
        }

        .faq-chevron {
          color: var(--color-accent);
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-item[open] .faq-chevron {
          transform: rotate(180deg);
          color: var(--color-secondary);
        }

        .faq-answer {
          padding: 0 24px 20px 24px;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          border-top: 1px solid transparent;
          animation: slide-down 0.25s ease-out;
        }

        .faq-item[open] .faq-answer {
          border-top-color: rgba(155, 144, 120, 0.08);
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
