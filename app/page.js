"use client";
import Image from "next/image";

export default function Home() {
  const pfps = [];
  for (let i = 3062; i <= 3259; i++) pfps.push(`/images/IMG_${i}.jpg`);

  // Make sure the innermost ring radius leaves a clear spot for a 54px logo (with a little buffer)
  const rings = [
    { count: 10, radius: 65 },
    { count: 18, radius: 120 },
    { count: 28, radius: 183 },
    { count: 36, radius: 250 },
    { count: 46, radius: 315 },
    { count: 55, radius: 380 },
  ];

  let idx = 0;

  return (
    <main className="page">
      {/* LEFT PANEL */}
      <aside className="hero">
        <h1>Ritty Map</h1>
        <p>
          198 builders <br />
          one ecosystem
        </p>
        <button>198+ Members</button>
      </aside>

      {/* AVATAR RINGS & CENTERED LOGO */}
      <section className="map">
        {/* Center logo */}
        <div className="center-logo">
          <Image
            src="/ritty-logo.png"
            width={54}
            height={54}
            alt="Ritty Logo"
            className="logo"
            priority
          />
        </div>
        {/* Avatar rings */}
        {rings.map((ring, ringIndex) => (
          <div
            key={ringIndex}
            className="ring"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
            }}
          >
            {Array.from({ length: ring.count }).map((_, i) => {
              if (idx >= pfps.length) return null;
              const img = pfps[idx++];
              const angle = (360 / ring.count) * i;
              return (
                <div
                  key={i}
                  className="avatarWrap"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translate(${ring.radius}px)
                      rotate(${-angle}deg)
                    `,
                  }}
                >
                  <img src={img} className="avatar" alt="avatar" />
                </div>
              );
            })}
          </div>
        ))}
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: flex-start;
          background: linear-gradient(180deg, #b695f5 0%, #9756e2 90%, #511986 100%);
          position: relative;
          overflow-x: hidden;
        }
        .hero {
          width: 370px;
          min-width: 260px;
          max-width: 400px;
          margin-top: 65px;
          margin-left: 64px;
          padding: 32px 18px 32px 28px;
          color: #fff;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 4px 24px rgba(90, 21, 150, 0.07);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero h1 {
          margin: 0 0 18px 0;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
        }
        .hero p {
          margin: 0 0 30px 0;
          opacity: 0.92;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.6;
        }
        .hero button {
          font-size: 18px;
          font-weight: 500;
          border: none;
          padding: 17px 55px;
          border-radius: 24px;
          background: linear-gradient(90deg, #d2b5fa 0%, #ce71ff 100%);
          color: #fff;
          box-shadow: 0 2px 12px #bb7cf644;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .hero button:hover {
          background: linear-gradient(90deg, #e7d6ff 0%, #e292ff 100%);
          transform: scale(1.04);
        }
        .map {
          flex: 1;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
        }
        .center-logo {
          position: absolute;
          left: 50%;
          top: 53%;
          transform: translate(-15%, -50%);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo {
          width: 60px !important;
          height: 64px !important;
          border-radius: 50%;
          background: none;
          box-shadow: none;
          padding: 0;
        }
        .ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2.5px solid rgba(255, 255, 255, 0.045);
        }
        .avatarWrap {
          position: absolute;
          left: 50%;
          top: 50%;
        }
        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 1px 8px 0 #39248033;
          background: #f7f6fa;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .avatar:hover {
          transform: scale(1.13);
          box-shadow: 0 5px 40px 10px #b287e6;
          z-index: 22;
        }
        @media (max-width: 1100px) {
          .hero {
            margin-left: 14px;
            width: 215px;
            padding: 22px 8px 22px 14px;
          }
          .hero h1 {
            font-size: 22px;
          }
          .hero button {
            font-size: 14px;
            padding: 11px 32px;
          }
          .avatar {
            width: 30px;
            height: 30px;
          }
        }
        @media (max-width: 700px) {
          .page {
            flex-direction: column;
          }
          .hero {
            width: 100%;
            max-width: none;
            margin: 12px auto 0 auto;
            border-radius: 14px;
          }
          .map {
            min-height: 360px;
          }
          .ring {
            border-width: 1.5px;
          }
          .avatar {
            width: 18px;
            height: 18px;
          }
          .logo {
            width: 22px !important;
            height: 22px !important;
          }
        }
      `}</style>
    </main>
  );
}