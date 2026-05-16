"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {

const [rings,setRings]=useState([]);

const desktop=[
{count:12,radius:80},
{count:18,radius:140},
{count:28,radius:210},
{count:36,radius:290},
{count:46,radius:370},
{count:58,radius:450},
];

const mobile=[
{count:12,radius:55},
{count:18,radius:95},
{count:28,radius:135},
{count:36,radius:175},
{count:46,radius:220},
{count:58,radius:265},
];


useEffect(()=>{

const resize=()=>{

setRings(
window.innerWidth < 700
? mobile
: desktop
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



const pfps=[];

for(let i=3062;i<=3259;i++){

pfps.push(
`/images/IMG_${i}.jpg`
);

}


let idx=0;


return(

<main className="page">

{/* TITLE */}

<aside className="hero">

<h1>
Ritual
<br/>
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
width={90}
height={90}
alt=""
priority
className="logo"
/>

</div>



{rings.map((ring,r)=>(

<div
key={r}
className="ring"

style={{

width:ring.radius*2,
height:ring.radius*2

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

loading="lazy"

className="avatar"

onError={(e)=>{

e.currentTarget.style.display=
"none";

}}

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

min-height:120vh;

overflow-y:auto;
overflow-x:hidden;

padding:
px 0;
padding-left:50px;

display:flex;

position:relative;

background:
linear-gradient(
180deg,
#b695f5,
#8f4be2,
#511986
);
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



/* TITLE */

.hero{

position:absolute;

left:50px;
top:50%;

transform:
translateY(-50%);

z-index:10;
}


.hero h1{

font-size:
clamp(
60px,
8vw,
100px
);

line-height:.9;

margin:0;

font-weight:700;

color:white;
}



/* MAP */

.map{

flex:1;

display:flex;

justify-content:center;
align-items:center;

min-height:
1100px;

position:relative;
}



/* KEEP YOUR CENTER */

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



/* RINGS */

.ring{

position:absolute;

left:50%;
top:50%;

transform:
translate(-50%,-50%);



border-radius:50%;
}



/* AVATAR */

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

transition:.2s;
}


.avatar:hover{

transform:
scale(1.08);

}



/* MOBILE */

@media(max-width:700px){

.page{

padding-top:50px;
}


.hero{

top:35px;
left:0;

width:100%;

display:flex;
justify-content:center;

transform:none;
}


.hero h1{

font-size:40px;

text-align:center;
}


.map{

min-height:
800px;
}


.avatar{

width:18px;
height:18px;

border-width:1px;
}


.logo{

width:42px!important;
height:42px!important;
}

}

`}</style>

</main>

)

}