"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

  const pfps = [];

  for(let i=3062;i<=3259;i++){
    pfps.push(`/images/IMG_${i}.jpg`);
  }

  const desktopRings = [
    { count:10, radius:65 },
    { count:18, radius:120 },
    { count:28, radius:185 },
    { count:36, radius:250 },
    { count:46, radius:320 },
    { count:55, radius:390 },
  ];

  const mobileRings = [
    { count:10, radius:45 },
    { count:18, radius:80 },
    { count:28, radius:115 },
    { count:36, radius:145 },
    { count:46, radius:178 },
    { count:55, radius:210 },
  ];

  const [rings,setRings]=useState(desktopRings);

  useEffect(()=>{

    const resize=()=>{

      setRings(
        window.innerWidth < 700
        ? mobileRings
        : desktopRings
      );

    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    return()=>window.removeEventListener(
      "resize",
      resize
    );

  },[]);


let idx=0;


return(

<main className="page">

{/* TITLE */}

<aside className="hero">

<h1 className="title">

Ritty
<br/>
Fams

</h1>

</aside>



{/* MAP */}

<section className="map">

<div className="center">

<Image
src="/ritty-logo.png"
width={80}
height={80}
alt=""
priority
className="logo"
/>

</div>



{rings.map((ring,ringIndex)=>(

<div
key={ringIndex}
className="ring"

style={{

width:
ring.radius*2,

height:
ring.radius*2

}}
>

{

Array.from({
length:ring.count
}).map((_,i)=>{

if(idx>=pfps.length)
return null;

const img=
pfps[idx++];

const angle=
(360/ring.count)*i;

return(

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
className="avatar"
/>

</div>

)

})

}

</div>

))}

</section>



<style jsx>{`

.page{

min-height:100vh;

overflow-y:auto;
overflow-x:hidden;

padding-top:80px;   /* desktop */
padding-bottom:80px;   /* desktop */

background:
linear-gradient(
180deg,
#b695f5,
#8f4be2,
#511986
);

position:relative;
display:flex;
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
90px 90px;

opacity:.12;
}



/* TITLE */

.hero{

position:absolute;

left:60px;
top:50%;

transform:
translateY(-50%);

z-index:20;
}


.title{

margin:0;

font-size:
clamp(
52px,
8vw,
100px
);

font-weight:700;

line-height:.9;

letter-spacing:
-2px;

color:white;

text-shadow:
0 10px 30px
rgba(
0,
0,
0,
.15
);

}



/* MAP */

.map{

flex:1;

display:flex;
justify-content:center;
align-items:center;

min-height:100vh;

position:relative;
}



.center{

position:absolute;

left:50%;
top:53%;

transform:
translate(-25%,-50%);

z-index:50;
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

border-radius:50%;

border:
1px solid rgba(
255,
255,
255,
.06
);
}



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
3px solid white;

transition:.2s;
}


.avatar:hover{

transform:
scale(1.1);

}



/* MOBILE */

@media(max-width:700px){

.hero{

top:40px;
left:0;

width:100%;

transform:none;

display:flex;
justify-content:center;
}


.title{

font-size:42px;

text-align:center;
}


.avatar{

width:16px;
height:16px;

border-width:1px;
}


.logo{

width:40px!important;
height:40px!important;
}

}

`}</style>

</main>

)

}