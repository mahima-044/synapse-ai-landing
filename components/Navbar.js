"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#" className="nav-logo tech-font no-underline">
          <svg className="logo-svg" viewBox="0 0 100 100" width="32" height="32">
            <path
              d="M30,50 Q40,30 50,50 T70,50"
              fill="none"
              stroke="#ffc801"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
          SYNAPSE<span className="accent-dot">.AI</span>
        </a>

        {/* Links */}
        <div className="nav-links">
          <a href="#features" className="nav-link underline-grow no-underline">Features</a>
          <a href="#timeline" className="nav-link underline-grow no-underline">Timeline</a>
          <a href="#pricing" className="nav-link underline-grow no-underline">Pricing</a>
          <a href="#testimonials" className="nav-link underline-grow no-underline">Testimonials</a>
          <a href="#faq" className="nav-link underline-grow no-underline">FAQ</a>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <a href="#pricing" className="btn btn-ghost tech-font no-underline">Live Demo</a>
          <a href="#cta" className="btn btn-primary tech-font no-underline">Start Free</a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: rgba(11, 19, 38, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(155, 144, 120, 0.15);
          padding: 12px 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px var(--space-md);
          transition: all 0.3s ease;
        }

        .navbar.scrolled .navbar-container {
          padding: 8px var(--space-md);
        }

        .nav-logo {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .logo-svg {
          filter: drop-shadow(0 0 4px var(--color-accent));
        }

        .accent-dot {
          color: var(--color-accent);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .nav-link {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          transition: color 0.25s ease;
        }

        .nav-link:hover {
          color: var(--color-text);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .nav-actions .btn {
          padding: 8px 16px;
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Hide on mobile simple nav */
          }
        }
      `}</style>
    </nav>
  );
}
