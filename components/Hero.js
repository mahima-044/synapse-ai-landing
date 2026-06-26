"use client";

export default function Hero() {
  return (
    <header className="hero bg-grid-pattern">
      {/* Background Lights */}
      <div className="radial-glow glow-top-left"></div>
      <div className="radial-glow glow-bottom-right"></div>

      <div className="container hero-container">
        {/* Intro Tag */}
        <div className="hero-badge animate-blur-reveal">
          <span className="badge badge-success tech-font">AI Powered Workflow Platform</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title animate-fade-up">
          Automate <br />
          <span className="gradient-text">Everything.</span>
          <span className="mobile-break"><br /></span>
          Scale <br />
          <span className="highlight-text">Without Limits.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-subtitle animate-fade-up">
          "Automate every workflow before coffee gets cold." <br />
          <span className="tech-desc">One Platform. Infinite Possibilities. Core engine powered by Synapse neural matrices.</span>
        </p>

        {/* Actions */}
        <div className="hero-actions animate-fade-up">
          <a href="#cta" className="btn btn-primary tech-font glow-primary no-underline">Start Free</a>
          <a href="#pricing" className="btn btn-secondary tech-font no-underline">Live Demo</a>
        </div>

        {/* Floating Dashboard Wrapper */}
        <div className="dashboard-perspective-wrapper">
          <div className="dashboard-container">
            {/* Top Toolbar (Window controls) */}
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-tab tech-font">synapse-core-daemon.sh</div>
              <div className="window-empty"></div>
            </div>

            {/* Content Area */}
            <div className="dashboard-content">
              {/* Card 1: Node Router */}
              <div className="dash-card dash-card-1 animate-float">
                <div className="dash-card-header">
                  <span className="label-mono">NEURAL ROUTER</span>
                  <div className="status-indicator"></div>
                </div>
                <div className="dash-card-body">
                  <div className="router-node">
                    <img src="/public/assets/cog-8-tooth.svg" alt="Gear" className="animate-rotate cog-icon" style={{ display: 'none' }} />
                    {/* Fallback inline SVG if public folder load delay */}
                    <svg className="animate-rotate cog-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div className="node-stats">
                      <div className="stat-row"><span className="tag font-bold">STATUS:</span> <span className="val color-ok">ACTIVE</span></div>
                      <div className="stat-row"><span className="tag font-bold">THREADS:</span> <span className="val">1,402/s</span></div>
                    </div>
                  </div>
                  <div className="terminal-screen font-bold">
                    <p className="line-active">&gt; RUNNING OPTIMIZER...</p>
                    <p className="line-muted">&gt; MEMORY BUFFER pre_heat=true</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Metrics */}
              <div className="dash-card dash-card-2 animate-float-delayed">
                <div className="dash-card-header">
                  <span className="label-mono">LIVE PERFORMANCE</span>
                  <span className="badge badge-success">99.8%</span>
                </div>
                <div className="dash-card-body">
                  <div className="metrics-grid">
                    <div className="metric-box">
                      <span className="metric-lbl">LATENCY</span>
                      <span className="metric-val">12ms</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-lbl">REDUNDANCY</span>
                      <span className="metric-val">0.00%</span>
                    </div>
                  </div>
                  <div className="graph-container">
                    <svg className="mini-chart" viewBox="0 0 200 60" width="100%" height="60">
                      <defs>
                        <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255, 153, 50, 0.4)" />
                          <stop offset="100%" stopColor="rgba(255, 153, 50, 0)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 Q25,35 50,45 T100,20 T150,30 T200,10 L200,60 L0,60 Z"
                        fill="url(#chart-grad)"
                      />
                      <path
                        d="M0,50 Q25,35 50,45 T100,20 T150,30 T200,10"
                        fill="none"
                        stroke="#ff9932"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="200" cy="10" r="4" fill="#ffc801" className="ping-dot" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3: Neural Link Connections */}
              <div className="dash-card dash-card-3 animate-float">
                <div className="dash-card-header">
                  <span className="label-mono">INTEGRATIONS DOCK</span>
                </div>
                <div className="dash-card-body flex-col">
                  <div className="integrations-flow">
                    <div className="connector-circle glow-circle">
                      <span className="tech-font">AI</span>
                    </div>
                    <div className="connector-wire">
                      <svg width="100" height="20" viewBox="0 0 100 20">
                        <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,200,1,0.2)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="0" y1="10" x2="100" y2="10" stroke="#ffc801" strokeWidth="2.5" strokeDasharray="15,45" className="dash-flow" />
                      </svg>
                    </div>
                    <div className="connector-circle glow-circle-orange">
                      <span className="tech-font">API</span>
                    </div>
                  </div>
                  <div className="connection-list">
                    <div className="conn-row"><span className="lbl">WEBHOOKS:</span><span className="status green">OK</span></div>
                    <div className="conn-row"><span className="lbl">WEB SOCKETS:</span><span className="status orange">LISTENING</span></div>
                  </div>
                </div>
              </div>

              {/* Animated Neural Flow Pathway Background */}
              <svg className="neural-backplane" viewBox="0 0 800 350" fill="none">
                <path d="M 150 150 L 300 220 L 500 120 L 650 200" stroke="rgba(255, 200, 1, 0.08)" strokeWidth="3" />
                <path d="M 150 150 L 300 220 L 500 120 L 650 200" stroke="#ffc801" strokeWidth="3.5" strokeDasharray="30 180" className="neural-flow-dash" />

                <path d="M 120 280 L 280 120 L 450 280" stroke="rgba(255, 153, 50, 0.08)" strokeWidth="2" />
                <path d="M 120 280 L 280 120 L 450 280" stroke="#ff9932" strokeWidth="2.5" strokeDasharray="40 220" className="neural-flow-dash-rev" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding-top: 160px;
          padding-bottom: 120px;
          background-color: var(--color-bg);
          overflow: hidden;
        }

        .radial-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: var(--radius-full);
          filter: blur(150px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
        }

        .glow-top-left {
          top: -100px;
          left: -100px;
          background: var(--color-accent);
        }

        .glow-bottom-right {
          bottom: -150px;
          right: -100px;
          background: var(--color-secondary);
        }

        .hero-container {
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          margin-bottom: var(--space-md);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          color: var(--color-text);
          margin-bottom: var(--space-md);
          letter-spacing: -0.03em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 10px rgba(255, 200, 1, 0.15));
        }

        .highlight-text {
          color: var(--color-highlight-bright);
          text-shadow: 0 0 15px rgba(147, 221, 207, 0.1);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text);
          margin-bottom: var(--space-lg);
          max-width: 720px;
          line-height: 1.6;
        }

        .tech-desc {
          display: block;
          font-size: 0.95rem;
          margin-top: 8px;
          color: var(--color-text-muted);
          font-family: var(--font-headers);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }

        .mobile-break {
          display: none;
        }

        /* Dashboard Container & 3D tilt styles */
        .dashboard-perspective-wrapper {
          width: 100%;
          max-width: 900px;
          perspective: 1200px;
          margin: 0 auto;
        }

        .dashboard-container {
          width: 100%;
          background: rgba(23, 31, 51, 0.75);
          border: 1px solid rgba(155, 144, 120, 0.2);
          border-radius: var(--radius-lg);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px 5px rgba(255, 200, 1, 0.03);
          transform: rotateX(12deg) rotateY(-6deg) rotateZ(1deg);
          transform-style: preserve-3d;
          overflow: hidden;
          transition: transform 0.5s ease;
        }

        .dashboard-container:hover {
          transform: rotateX(8deg) rotateY(-3deg) rotateZ(0deg);
        }

        .window-header {
          background: rgba(11, 19, 38, 0.9);
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(155, 144, 120, 0.15);
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: var(--radius-full);
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .window-tab {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: rgba(23, 31, 51, 0.6);
          padding: 4px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(155, 144, 120, 0.1);
          letter-spacing: 0.05em;
        }
        .window-empty {
          width: 48px;
        }

        .dashboard-content {
          position: relative;
          padding: var(--space-md);
          min-height: 380px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--space-md);
          z-index: 2;
        }

        /* Floating Dashboard Cards */
        .dash-card {
          background: rgba(11, 19, 38, 0.85);
          border: 1px solid rgba(155, 144, 120, 0.15);
          border-radius: var(--radius-md);
          padding: 16px;
          backdrop-filter: blur(8px);
          z-index: 10;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }

        .dash-card:hover {
          border-color: rgba(255, 200, 1, 0.4);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), 0 0 15px 0px rgba(255, 200, 1, 0.08);
        }

        .dash-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          border-bottom: 1px solid rgba(155, 144, 120, 0.08);
          padding-bottom: 8px;
        }

        .dash-card-1 {
          grid-column: 1;
          grid-row: 1;
        }

        .dash-card-2 {
          grid-column: 2;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dash-card-3 {
          grid-column: 1;
          grid-row: 2;
        }

        /* Card Content Styles */
        .router-node {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .cog-icon {
          color: var(--color-accent);
          filter: drop-shadow(0 0 6px rgba(255, 200, 1, 0.4));
        }

        .node-stats {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-family: var(--font-headers);
        }

        .stat-row {
          margin-bottom: 4px;
        }

        .color-ok {
          color: var(--color-highlight-bright);
        }

        .terminal-screen {
          background: rgba(6, 14, 32, 0.95);
          border: 1px solid rgba(155, 144, 120, 0.1);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          font-size: 0.7rem;
        }

        .line-active {
          color: var(--color-accent);
        }

        .line-muted {
          color: var(--color-text-muted);
          opacity: 0.6;
          margin-top: 4px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }

        .metric-box {
          background: rgba(23, 31, 51, 0.5);
          border: 1px solid rgba(155, 144, 120, 0.08);
          border-radius: var(--radius-sm);
          padding: 8px;
          text-align: center;
        }

        .metric-lbl {
          display: block;
          font-size: 0.65rem;
          color: var(--color-text-muted);
          margin-bottom: 4px;
        }

        .metric-val {
          font-family: var(--font-headers);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .graph-container {
          background: rgba(6, 14, 32, 0.6);
          border-radius: var(--radius-sm);
          padding: 8px;
          border: 1px solid rgba(155, 144, 120, 0.05);
        }

        .mini-chart {
          overflow: visible;
        }

        .ping-dot {
          animation: pulse-glow 1.5s infinite ease-in-out;
        }

        .flex-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .integrations-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 0;
        }

        .connector-circle {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid var(--color-accent);
          color: var(--color-accent);
          background: rgba(255, 200, 1, 0.08);
        }

        .connector-circle-orange {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid var(--color-secondary);
          color: var(--color-secondary);
          background: rgba(255, 153, 50, 0.08);
        }

        .glow-circle {
          box-shadow: 0 0 12px rgba(255, 200, 1, 0.2);
        }

        .glow-circle-orange {
          box-shadow: 0 0 12px rgba(255, 153, 50, 0.2);
        }

        .dash-flow {
          animation: dash-move 3s linear infinite;
        }

        @keyframes dash-move {
          to {
            stroke-dashoffset: -60;
          }
        }

        .connection-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.7rem;
        }

        .conn-row {
          display: flex;
          justify-content: space-between;
        }

        .status {
          font-family: var(--font-headers);
          font-weight: 600;
        }
        .status.green { color: var(--color-highlight-bright); }
        .status.orange { color: var(--color-secondary); }

        /* Neural Wire Grid Background */
        .neural-backplane {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .neural-flow-dash {
          animation: dash-move-large 12s linear infinite;
        }

        .neural-flow-dash-rev {
          animation: dash-move-large-rev 10s linear infinite;
        }

        @keyframes dash-move-large {
          to {
            stroke-dashoffset: -210;
          }
        }

        @keyframes dash-move-large-rev {
          to {
            stroke-dashoffset: 260;
          }
        }

        /* Responsive overrides */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
            padding-bottom: 60px;
          }

          .hero-title {
            font-size: 2.2rem;
            line-height: 1.2;
          }

          .mobile-break {
            display: inline;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .dashboard-content {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .dash-card-2 {
            grid-column: 1;
            grid-row: auto;
          }
          
          .dash-card-3 {
            grid-column: 1;
            grid-row: auto;
          }

          .dashboard-container {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
        }
      `}</style>
    </header>
  );
}
