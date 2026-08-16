"use client";

export default function Home() {
  return (
    <>
      <div className="sun"></div>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      <div className="bird bird1">
        <svg viewBox="0 0 24 12" fill="none">
          <path d="M1 6C4 1 8 1 12 6C16 1 20 1 23 6" stroke="#f2fbf9" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="bird bird2">
        <svg viewBox="0 0 24 12" fill="none">
          <path d="M1 6C4 1 8 1 12 6C16 1 20 1 23 6" stroke="#f2fbf9" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="bird bird3">
        <svg viewBox="0 0 24 12" fill="none">
          <path d="M1 6C4 1 8 1 12 6C16 1 20 1 23 6" stroke="#f2fbf9" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="plate">
        <span className="dot"></span>ZoGo Realtor &middot; New Home Base
      </div>

      <div className="stage">
        <h1>
          We are
          <br />
          coming <span>soon!</span>
        </h1>
        <p className="sub">
          We&apos;re building a friendlier way to find your next home. Packing boxes, painting walls,
          hammering the last few nails — hang tight, the front door opens shortly.
        </p>
      </div>

      <div className="scene">
        <svg className="house-float" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg">
          <g className="smoke">
            <circle cx="208" cy="58" r="5" fill="#f2fbf9" opacity="0.7" />
            <circle cx="208" cy="58" r="5" fill="#f2fbf9" opacity="0.7" />
            <circle cx="208" cy="58" r="5" fill="#f2fbf9" opacity="0.7" />
          </g>
          <rect x="196" y="60" width="24" height="40" rx="3" fill="#0c5c60" />
          <polygon points="140,26 26,104 254,104" fill="#ff8a65" />
          <polygon points="140,26 26,104 46,104" fill="#ff9d7f" />
          <rect x="46" y="104" width="188" height="100" rx="8" fill="#eafffb" />
          <rect x="122" y="146" width="36" height="58" rx="6" fill="#0c5c60" />
          <circle cx="150" cy="176" r="2.6" fill="#ffd66b" />
          <rect x="66" y="128" width="34" height="34" rx="6" fill="#2bc4b8" />
          <rect x="180" y="128" width="34" height="34" rx="6" fill="#2bc4b8" />
          <line x1="83" y1="128" x2="83" y2="162" stroke="#eafffb" strokeWidth="3" />
          <line x1="66" y1="145" x2="100" y2="145" stroke="#eafffb" strokeWidth="3" />
          <line x1="197" y1="128" x2="197" y2="162" stroke="#eafffb" strokeWidth="3" />
          <line x1="180" y1="145" x2="214" y2="145" stroke="#eafffb" strokeWidth="3" />
          <circle cx="44" cy="198" r="16" fill="#14828a" />
          <circle cx="60" cy="204" r="12" fill="#14828a" />
          <g className="sign">
            <rect x="236" y="150" width="4" height="54" fill="#8a5a2b" />
            <rect x="220" y="150" width="52" height="26" rx="4" fill="#ffd66b" />
            <text x="246" y="168" fontFamily="Baloo 2, cursive" fontSize="11" fontWeight="700" fill="#053b3f" textAnchor="middle">
              SOON
            </text>
          </g>
        </svg>
      </div>
      <div className="ground"></div>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input id="email" type="email" placeholder="you@email.com" required />
        <button type="submit">Notify Me 🔑</button>
      </form>
      <p className="note">No spam, promise — just a knock when the door opens.</p>

      <footer>
        <a href="#">Instagram</a>
        <div className="sep"></div>
        <a href="#">Facebook</a>
        <div className="sep"></div>
        <a href="#">Contact</a>
      </footer>

      <style jsx global>{`
        :root {
          --teal-deep: #053b3f;
          --teal: #0c5c60;
          --teal-mid: #14828a;
          --teal-bright: #2bc4b8;
          --teal-glow: #7fe9dc;
          --cream: #f2fbf9;
          --coral: #ff8a65;
          --sun: #ffd66b;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }

        html,
        body {
          height: 100%;
        }

        body {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background: linear-gradient(180deg, var(--teal-deep) 0%, var(--teal) 45%, var(--teal-mid) 100%);
          font-family: "Poppins", sans-serif;
          color: var(--cream);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 20px 40px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
        }

        /* ---------- Sky decor ---------- */
        .sun {
          position: absolute;
          top: 36px;
          right: 8%;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, var(--sun), #f4b942 70%);
          box-shadow: 0 0 40px 10px rgba(255, 214, 107, 0.35);
          animation: spin 18s linear infinite;
          z-index: 0;
        }
        .sun::before {
          content: "";
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          background: repeating-conic-gradient(var(--sun) 0deg 4deg, transparent 4deg 18deg);
          opacity: 0.35;
          z-index: -1;
        }

        .cloud {
          position: absolute;
          background: var(--cream);
          border-radius: 50px;
          opacity: 0.9;
          z-index: 0;
        }
        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: var(--cream);
          border-radius: 50%;
        }
        .cloud1 {
          top: 70px;
          left: -180px;
          width: 110px;
          height: 34px;
          animation: drift 26s linear infinite;
        }
        .cloud1::before {
          width: 50px;
          height: 50px;
          top: -24px;
          left: 14px;
        }
        .cloud1::after {
          width: 36px;
          height: 36px;
          top: -16px;
          left: 60px;
        }

        .cloud2 {
          top: 150px;
          left: -220px;
          width: 80px;
          height: 26px;
          opacity: 0.55;
          animation: drift 34s linear infinite;
          animation-delay: -10s;
        }
        .cloud2::before {
          width: 36px;
          height: 36px;
          top: -16px;
          left: 10px;
        }
        .cloud2::after {
          width: 26px;
          height: 26px;
          top: -11px;
          left: 44px;
        }

        .cloud3 {
          top: 40px;
          left: -260px;
          width: 60px;
          height: 20px;
          opacity: 0.4;
          animation: drift 20s linear infinite;
          animation-delay: -4s;
        }
        .cloud3::before {
          width: 28px;
          height: 28px;
          top: -12px;
          left: 6px;
        }
        .cloud3::after {
          width: 20px;
          height: 20px;
          top: -8px;
          left: 32px;
        }

        .bird {
          position: absolute;
          width: 22px;
          height: 10px;
          z-index: 0;
          animation: fly 14s linear infinite;
        }
        .bird svg {
          width: 100%;
          height: 100%;
        }
        .bird1 {
          top: 110px;
          animation-delay: 0s;
        }
        .bird2 {
          top: 90px;
          animation-delay: -5s;
          transform: scale(0.7);
        }
        .bird3 {
          top: 140px;
          animation-delay: -9s;
          transform: scale(0.85);
        }

        /* ---------- Header plate ---------- */
        .plate {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1.5px dashed rgba(242, 251, 249, 0.4);
          border-radius: 999px;
          padding: 7px 18px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--teal-glow);
          background: rgba(242, 251, 249, 0.06);
          margin-top: 18px;
          opacity: 0;
          animation: riseIn 0.7s ease-out 0.1s forwards;
        }
        .plate .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--coral);
          animation: pulse 1.8s ease-in-out infinite;
        }

        /* ---------- Hero text ---------- */
        .stage {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 720px;
          margin-top: 14px;
        }

        h1 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: clamp(32px, 7vw, 60px);
          line-height: 1.05;
          color: var(--cream);
          opacity: 0;
          animation: riseIn 0.8s ease-out 0.25s forwards;
        }
        h1 span {
          color: var(--sun);
          display: inline-block;
          animation: wiggle 2.6s ease-in-out infinite;
        }

        .sub {
          max-width: 460px;
          margin: 16px auto 0;
          font-size: 15.5px;
          line-height: 1.7;
          color: rgba(242, 251, 249, 0.8);
          opacity: 0;
          animation: riseIn 0.8s ease-out 0.4s forwards;
        }

        /* ---------- House illustration ---------- */
        .scene {
          position: relative;
          width: 280px;
          max-width: 80vw;
          margin: 26px auto 6px;
          opacity: 0;
          animation: riseIn 0.9s ease-out 0.55s forwards;
        }
        .house-float {
          animation: floaty 4s ease-in-out infinite;
        }

        .smoke circle {
          animation: smoke 3.2s ease-in infinite;
        }
        .smoke circle:nth-child(2) {
          animation-delay: 1s;
        }
        .smoke circle:nth-child(3) {
          animation-delay: 2s;
        }

        .sign {
          transform-origin: 78% 92%;
          animation: swing 3s ease-in-out infinite;
        }

        .ground {
          width: 100%;
          max-width: 560px;
          height: 26px;
          margin-top: -6px;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.18), transparent 70%);
          opacity: 0;
          animation: riseIn 0.9s ease-out 0.6s forwards;
        }

        /* ---------- Form ---------- */
        form {
          position: relative;
          z-index: 2;
          margin: 18px auto 0;
          display: flex;
          max-width: 400px;
          width: 100%;
          gap: 10px;
          opacity: 0;
          animation: riseIn 0.8s ease-out 0.85s forwards;
        }
        input[type="email"] {
          flex: 1;
          padding: 14px 16px;
          border-radius: 30px;
          border: 2px solid rgba(242, 251, 249, 0.25);
          background: rgba(242, 251, 249, 0.08);
          color: var(--cream);
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        input[type="email"]::placeholder {
          color: rgba(242, 251, 249, 0.5);
        }
        input[type="email"]:focus {
          border-color: var(--teal-glow);
          background: rgba(242, 251, 249, 0.14);
        }
        input[type="email"]:focus-visible {
          outline: 2px solid var(--sun);
          outline-offset: 2px;
        }

        button {
          padding: 14px 24px;
          border-radius: 30px;
          border: none;
          background: var(--coral);
          color: #2a1608;
          font-family: "Baloo 2", cursive;
          font-weight: 700;
          font-size: 14.5px;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.2s ease;
          white-space: nowrap;
        }
        button:hover {
          transform: translateY(-2px) scale(1.03);
          background: #ff9d7f;
        }
        button:focus-visible {
          outline: 2px solid var(--sun);
          outline-offset: 2px;
        }

        .note {
          position: relative;
          z-index: 2;
          margin-top: 12px;
          font-size: 12px;
          color: rgba(242, 251, 249, 0.55);
          opacity: 0;
          animation: riseIn 0.8s ease-out 1s forwards;
        }

        footer {
          position: relative;
          z-index: 2;
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: rgba(242, 251, 249, 0.5);
          opacity: 0;
          animation: riseIn 0.8s ease-out 1.15s forwards;
        }
        footer a {
          color: rgba(242, 251, 249, 0.7);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        footer a:hover {
          color: var(--sun);
          border-color: var(--sun);
        }
        .sep {
          width: 1px;
          height: 12px;
          background: rgba(242, 251, 249, 0.25);
        }

        /* ---------- Keyframes ---------- */
        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 138, 101, 0.55);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(255, 138, 101, 0);
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }
        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes smoke {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-46px) scale(1.3);
            opacity: 0;
          }
        }
        @keyframes swing {
          0%,
          100% {
            transform: rotate(-6deg);
          }
          50% {
            transform: rotate(6deg);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes drift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(100vw + 300px));
          }
        }
        @keyframes fly {
          0% {
            left: -40px;
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-14px) scale(1);
          }
          100% {
            left: calc(100% + 40px);
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 480px) {
          form {
            flex-direction: column;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}