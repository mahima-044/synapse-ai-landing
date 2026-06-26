"use client";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Synapse AI automated our entire compliance checklist and edge routing before our lead engineer's coffee got cold. It is pure technical magic.",
      author: "Alex Cristache",
      role: "Lead Platform Architect, MP025",
      initials: "AC",
      gradient: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)"
    },
    {
      quote: "We switched from complex yaml configs to Synapse. Our developer setup time dropped from 3 days to literally 90 seconds. The bento dashboard is incredible.",
      author: "Sarah Jenkins",
      role: "VP of Engineering, VeloFlow",
      initials: "SJ",
      gradient: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-highlight) 100%)"
    },
    {
      quote: "Dynamic currency checks, zero-latency webhook pipelines, and responsive accordions on mobile. Synapse is built for modern engineering aesthetics.",
      author: "Vikram Mehta",
      role: "CTO, CloudScale",
      initials: "VM",
      gradient: "linear-gradient(135deg, var(--color-highlight) 0%, var(--color-accent) 100%)"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="radial-glow glow-testimonials-left"></div>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="label-mono">VALIDATED METRICS</span>
          <h2 className="section-title">Approved by Architects</h2>
          <p className="section-subtitle">
            See how lead builders and platform engineers leverage Synapse AI to run zero-maintenance automation stacks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <div className="testimonial-card glass-panel" key={idx}>
              {/* Rating stars */}
              <div className="stars-row">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>

              {/* Quote */}
              <p className="testimonial-quote">"{test.quote}"</p>

              {/* Author Footer */}
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: test.gradient }}>
                  <span className="tech-font">{test.initials}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name tech-font">{test.author}</h4>
                  <span className="author-role">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background-color: var(--color-bg);
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
          opacity: 0.12;
          pointer-events: none;
          z-index: 1;
        }

        .glow-testimonials-left {
          top: 40%;
          left: -150px;
          background: var(--color-secondary);
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

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
          position: relative;
          z-index: 5;
        }

        .testimonial-card {
          background: rgba(23, 31, 51, 0.55);
          border-left: 2.5px solid var(--color-accent);
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-lg);
          min-height: 280px;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-left-color: var(--color-secondary);
        }

        .stars-row {
          color: var(--color-accent);
          font-size: 1.15rem;
          margin-bottom: var(--space-sm);
        }

        .testimonial-quote {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: var(--space-lg);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid rgba(155, 144, 120, 0.08);
          padding-top: var(--space-md);
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-bg);
          font-size: 0.85rem;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.9rem;
          color: var(--color-text);
          font-weight: 600;
        }

        .author-role {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
            gap: var(--space-lg);
          }
        }
      `}</style>
    </section>
  );
}
