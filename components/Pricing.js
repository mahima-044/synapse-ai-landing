"use client";
import { useState } from "react";

export default function Pricing() {
  const [currency, setCurrency] = useState("usd"); // usd, eur, inr
  const [billing, setBilling] = useState("monthly"); // monthly, annual

  const PRICING_MATRIX = {
    starter: {
      usd: 100,
      eur: 95,
      inr: 7999,
      name: "Starter",
      description: "For developers & automated creators.",
      features: [
        "Up to 10,000 runs / month",
        "3 active workflow logic maps",
        "15-minute cron triggers",
        "Discord support integrations"
      ]
    },
    pro: {
      usd: 250,
      eur: 235,
      inr: 19999,
      name: "Professional",
      description: "For scaling teams and complex engines.",
      features: [
        "Up to 150,000 runs / month",
        "Unlimited active logic maps",
        "Instant webhook triggers (< 2ms)",
        "Collaborative shared workspace",
        "Priority Slack sync support"
      ]
    }
  };

  const currencySymbols = {
    usd: "$",
    eur: "€",
    inr: "₹"
  };

  const calculatePrice = (basePrice) => {
    if (billing === "monthly") {
      return {
        amount: basePrice,
        period: "/ month"
      };
    } else {
      // Annual calculation: basePrice * 12 * 0.8
      const totalAnnual = basePrice * 12 * 0.8;
      const monthlyEquivalent = totalAnnual / 12;
      return {
        amount: Math.round(monthlyEquivalent),
        period: "/ month",
        extra: `Billed annually (${currencySymbols[currency]}${Math.round(totalAnnual)}/yr)`
      };
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="radial-glow glow-pricing-center"></div>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="label-mono">TRANSPARENT SCALE</span>
          <h2 className="section-title">Scale Without Limits.</h2>
          <p className="section-subtitle">
            Start free, then upgrade as your triggers expand. 20% discount on annual subscriptions calculated dynamically.
          </p>
        </div>

        {/* State Controls */}
        <div className="pricing-controls">
          {/* Currency selectors */}
          <div className="toggle-group currency-toggle-group">
            <button
              className={`toggle-btn tech-font ${currency === "usd" ? "active" : ""}`}
              onClick={() => setCurrency("usd")}
            >
              USD
            </button>
            <button
              className={`toggle-btn tech-font ${currency === "eur" ? "active" : ""}`}
              onClick={() => setCurrency("eur")}
            >
              EUR
            </button>
            <button
              className={`toggle-btn tech-font ${currency === "inr" ? "active" : ""}`}
              onClick={() => setCurrency("inr")}
            >
              INR
            </button>
          </div>

          {/* Billing Cycle selector */}
          <div className="toggle-group billing-toggle-group">
            <button
              className={`toggle-btn tech-font ${billing === "monthly" ? "active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn tech-font ${billing === "annual" ? "active" : ""}`}
              onClick={() => setBilling("annual")}
            >
              Annual <span className="discount-tag tech-font">20% OFF</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {/* Plan 1: Starter */}
          {(() => {
            const priceInfo = calculatePrice(PRICING_MATRIX.starter[currency]);
            return (
              <div className="pricing-card glass-panel">
                <div className="plan-header">
                  <h3 className="plan-name tech-font">{PRICING_MATRIX.starter.name}</h3>
                  <p className="plan-desc">{PRICING_MATRIX.starter.description}</p>
                </div>
                <div className="price-wrapper">
                  <div className="price-main">
                    <span className="currency-symbol tech-font">{currencySymbols[currency]}</span>
                    <span className="price-amount tech-font">{priceInfo.amount}</span>
                    <span className="price-period">{priceInfo.period}</span>
                  </div>
                  {priceInfo.extra && <p className="price-extra tech-font">{priceInfo.extra}</p>}
                </div>
                <ul className="plan-features">
                  {PRICING_MATRIX.starter.features.map((feat, idx) => (
                    <li className="feat-item" key={idx}>
                      <span className="check-icon">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className="btn btn-ghost tech-font full-width-btn no-underline">Get Started</a>
              </div>
            );
          })()}

          {/* Plan 2: Pro (Best Value) */}
          {(() => {
            const priceInfo = calculatePrice(PRICING_MATRIX.pro[currency]);
            return (
              <div className="pricing-card glass-panel pro-card animated-border">
                <div className="popular-badge tech-font">POPULAR INTEGRATOR</div>
                <div className="plan-header">
                  <h3 className="plan-name tech-font">{PRICING_MATRIX.pro.name}</h3>
                  <p className="plan-desc">{PRICING_MATRIX.pro.description}</p>
                </div>
                <div className="price-wrapper">
                  <div className="price-main">
                    <span className="currency-symbol tech-font">{currencySymbols[currency]}</span>
                    <span className="price-amount tech-font">{priceInfo.amount}</span>
                    <span className="price-period">{priceInfo.period}</span>
                  </div>
                  {priceInfo.extra && <p className="price-extra tech-font">{priceInfo.extra}</p>}
                </div>
                <ul className="plan-features">
                  {PRICING_MATRIX.pro.features.map((feat, idx) => (
                    <li className="feat-item" key={idx}>
                      <span className="check-icon check-orange">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className="btn btn-primary tech-font full-width-btn glow-primary no-underline">Deploy Pro</a>
              </div>
            );
          })()}

          {/* Plan 3: Enterprise */}
          <div className="pricing-card glass-panel">
            <div className="plan-header">
              <h3 className="plan-name tech-font">Enterprise</h3>
              <p className="plan-desc">For massive infrastructure & high security limits.</p>
            </div>
            <div className="price-wrapper">
              <div className="price-main">
                <span className="price-amount tech-font">Custom</span>
              </div>
              <p className="price-extra tech-font">SLA & dedicated cluster pods</p>
            </div>
            <ul className="plan-features">
              <li className="feat-item"><span className="check-icon">✓</span> Multi-million executions / mo</li>
              <li className="feat-item"><span className="check-icon">✓</span> Dedicated database clustering</li>
              <li className="feat-item"><span className="check-icon">✓</span> Custom compliance (HIPAA, SOC2)</li>
              <li className="feat-item"><span className="check-icon">✓</span> 24/7 dedicated support team</li>
            </ul>
            <a href="#cta" className="btn btn-ghost tech-font full-width-btn no-underline">Contact Sales</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background-color: var(--color-bg);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .radial-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: var(--radius-full);
          filter: blur(160px);
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
        }

        .glow-pricing-center {
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-accent);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-xl);
          position: relative;
          z-index: 5;
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

        /* Controls styling */
        .pricing-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
          position: relative;
          z-index: 5;
          flex-wrap: wrap;
        }

        .toggle-group {
          background: rgba(11, 19, 38, 0.85);
          border: 1px solid rgba(155, 144, 120, 0.15);
          padding: 4px;
          border-radius: var(--radius-md);
          display: flex;
        }

        .toggle-btn {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          padding: 8px 16px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .toggle-btn.active {
          background: var(--color-card-bright);
          color: var(--color-accent);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .discount-tag {
          font-size: 8px;
          background: var(--color-secondary);
          color: var(--color-bg);
          padding: 2px 6px;
          border-radius: var(--radius-full);
          font-weight: 700;
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
          position: relative;
          z-index: 5;
          align-items: stretch;
        }

        .pricing-card {
          background: rgba(23, 31, 51, 0.55);
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          border-radius: var(--radius-lg);
        }

        .pro-card {
          background: rgba(23, 31, 51, 0.85);
          border-color: rgba(255, 200, 1, 0.25);
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.6);
          position: relative;
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
          color: var(--color-bg);
          font-size: 9px;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
          box-shadow: 0 0 15px rgba(255, 200, 1, 0.4);
        }

        .plan-header {
          margin-bottom: var(--space-md);
        }

        .plan-name {
          font-size: 1.5rem;
          color: var(--color-text);
          margin-bottom: 6px;
        }

        .plan-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        .price-wrapper {
          margin-bottom: var(--space-lg);
          min-height: 70px;
        }

        .price-main {
          display: flex;
          align-items: baseline;
          color: var(--color-text);
        }

        .currency-symbol {
          font-size: 1.5rem;
          color: var(--color-accent);
          font-weight: 600;
          margin-right: 2px;
        }

        .price-amount {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
        }

        .price-period {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-left: 6px;
        }

        .price-extra {
          font-size: 0.7rem;
          color: var(--color-secondary-dim);
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        .plan-features {
          list-style: none;
          margin-bottom: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .feat-item {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .check-icon {
          color: var(--color-accent);
          font-weight: 700;
        }

        .check-orange {
          color: var(--color-secondary);
        }

        .full-width-btn {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .pricing-grid {
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
