"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [rings, setRings] = useState([]);

  const desktop = [
    { count: 12, radius: 80 },
    { count: 18, radius: 140 },
    { count: 28, radius: 210 },
    { count: 36, radius: 290 },
    { count: 46, radius: 370 },
    { count: 58, radius: 450 },
  ];

  const mobile = [
    { count: 12, radius: 55 },
    { count: 18, radius: 95 },
    { count: 28, radius: 135 },
    { count: 36, radius: 175 },
    { count: 46, radius: 220 },
    { count: 58, radius: 265 },
  ];

  useEffect(() => {
    const update = () =>
      setRings(window.innerWidth < 700 ? mobile : desktop);

    update();

    window.addEventListener("resize", update);

    return () =>
      window.removeEventListener("resize", update);
  }, []);

  const pfps = [];

  for (let i = 3062; i <= 3259; i++) {
    pfps.push(`/images/IMG_${i}.jpg`);
  }

  let idx = 0;

  return (
    <main className="page">

      <aside className="hero">

        <h1>
          Ritty
          <br />
          Fams
        </h1>

      </aside>



      <section className="map">

        {/* CENTER */}

        <div className="center">

          <Image
            src="/ritty-logo.png"
            width={90}
            height={90}
            alt=""
            priority
            className="logo"
          />

        </div>



        {rings.map((ring, ringIndex) => (

          <div
            key={ringIndex}
            className={`ring ${
              ringIndex % 2
              ? "reverse"
              : ""
            }`}
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
            }}
          >

            {Array.from({
              length:ring.count
            }).map((_,i)=>{

              if(idx >= pfps.length)
                return null;

              const img =
              pfps[idx++];

              const angle =
              (360/ring.count)*i;

              return (

                <div
                  key={i}
                  className="avatarWrap"

                  style={{

transform:
`
rotate(${angle}deg)
translate(${ring.radius}px)
rotate(-${angle}deg)
`

                  }}
                >

                  <img
                    src={img}

                    onError={(e)=>{

e.currentTarget.src =
"/default-avatar.png";

                    }}

                    className="avatar"
                  />

                </div>

              );

            })}

          </div>

        ))}

      </section>



<style jsx>{`

.page{

min-height:120vh;

overflow:auto;

background:
linear-gradient(
180deg,
#b695f5,
#8f4be2,
#511986
);

display:flex;

position:relative;

padding:
80px 0;
}



/* stars */

.page:before{

content:"";

position:absolute;
inset:0;

background:
radial-gradient(
white 1px,
transparent 1px
);

background-size:
80px 80px;

opacity:.12;
}



/* title */

.hero{

position:absolute;

left:60px;
top:50%;

transform:
translateY(-50%);

z-index:20;
}


.hero h1{

font-size:
clamp(
52px,
8vw,
100px
);

margin:0;

line-height:.9;

color:white;
}



/* map */

.map{

flex:1;

display:flex;
justify-content:center;
align-items:center;

position:relative;

min-height:1000px;
}



/* exact center */

.center{

position:absolute;

left:50%;
top:52%;

transform:
translate(-32%,-50%);

z-index:100;
}


.logo{

border-radius:50%;
}



/* rings */

.ring{

position:absolute;

left:50%;
top:50%;

transform:
translate(-50%,-50%);

border:
1px solid rgba(
255,
255,
255,
.06
);

border-radius:50%;

animation:
spin 120s linear infinite;
}










/* avatars */

.avatarWrap{

position:absolute;

left:50%;
top:50%;
}


.avatar{

width:52px;
height:52px;

border-radius:50%;

object-fit:cover;

border:
2px solid white;

background:white;
}



/* mobile */

@media(max-width:700px){

.hero{

top:20px;
left:0;

width:100%;

display:flex;
justify-content:center;

transform:none;
}


.hero h1{

font-size:42px;
text-align:center;
}


.avatar{

width:18px;
height:18px;
}


.logo{

width:42px!important;
height:42px!important;
}

}

`}</style>

    </main>
  );
}