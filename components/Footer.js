"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Left Col */}
        <div className="footer-brand-section">
          <a href="#" className="footer-logo tech-font">
            <svg viewBox="0 0 100 100" width="24" height="24">
              <path
                d="M30,50 Q40,30 50,50 T70,50"
                fill="none"
                stroke="#ffc801"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
            SYNAPSE<span className="accent-dot no-underline">.AI</span>
          </a>
          <p className="footer-tagline">"Automate every workflow before coffee gets cold."</p>
          <div className="status-badge-container">
            <span className="badge badge-success tech-font">
              <span className="status-ping"></span> ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>

        {/* Right Col links */}
        <div className="footer-links-grid">
          <div className="footer-link-col">
            <h4 className="link-title tech-font">Resource</h4>
            <a href="#features" className="footer-link underline-grow no-underline">Features</a>
            <a href="#timeline" className="footer-link underline-grow no-underline">Timeline</a>
            <a href="#pricing" className="footer-link underline-grow no-underline">Pricing</a>
          </div>
          <div className="footer-link-col">
            <h4 className="link-title tech-font">Connect</h4>
            <a href="https://github.com" className="footer-link underline-grow no-underline" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" className="footer-link underline-grow no-underline" target="_blank" rel="noreferrer">Twitter</a>
            <a href="#faq" className="footer-link underline-grow no-underline no-underline">Status</a>
          </div>
          <div className="footer-link-col">
            <h4 className="link-title tech-font">Legal</h4>
            <a href="#" className="footer-link underline-grow no-underline">Privacy Policy</a>
            <a href="#" className="footer-link underline-grow no-underline">Terms of Service</a>
            <a href="#" className="footer-link underline-grow no-underline">Security Policy</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copy-text tech-font">&copy; {new Date().getFullYear()} SYNAPSE AI INC. ALL RIGHTS RESERVED.</p>
          <p className="architecture-text tech-font">BUILT BY ARCHITECTS FOR DEVELOPERS</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-bg-alt);
          border-top: 1px solid rgba(155, 144, 120, 0.1);
          padding-top: 80px;
          position: relative;
          z-index: 5;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          padding-bottom: 60px;
          gap: 40px;
        }

        .footer-brand-section {
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
        }

        .accent-dot {
          color: var(--color-accent);
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .status-badge-container {
          margin-top: 4px;
        }

        .status-ping {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: var(--color-highlight-bright);
          border-radius: var(--radius-full);
          margin-right: 6px;
          box-shadow: 0 0 8px var(--color-highlight-bright);
          animation: status-pulse 1.8s infinite ease-in-out;
        }

        /* Links Grid */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }

        .footer-link-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .link-title {
          font-size: 0.75rem;
          color: var(--color-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .footer-link {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          width: max-content;
          transition: color 0.25s ease;
        }

        .footer-link:hover {
          color: var(--color-text);
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(155, 144, 120, 0.05);
          padding: 24px 0;
          background-color: var(--color-bg);
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.7rem;
          color: var(--color-outline);
          letter-spacing: 0.05em;
        }

        @keyframes status-pulse {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
            box-shadow: 0 0 12px var(--color-highlight-bright);
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 40px;
          }

          .footer-links-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .footer-bottom-container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
