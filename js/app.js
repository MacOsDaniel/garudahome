/* ==========================================================
   GARUDA HOME
   Alpha 0.2

   app.js

   Animaciones
   Navegación
   Interacciones
==========================================================*/

"use strict";

/*=========================================================
 Utilidades
=========================================================*/

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);

/*=========================================================
 Navbar dinámica
=========================================================*/

const nav = $("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40){

        nav.style.background = "rgba(6,10,18,.96)";

        nav.style.boxShadow =
            "0 12px 30px rgba(0,0,0,.35)";

        nav.style.borderBottom =
            "1px solid rgba(212,175,55,.22)";

    }
    else{

        nav.style.background =
            "rgba(11,15,25,.82)";

        nav.style.boxShadow = "none";

        nav.style.borderBottom =
            "1px solid rgba(212,175,55,.15)";

    }

});

/*=========================================================
 Fade In
=========================================================*/

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.18

}

);

$$("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/*=========================================================
 Smooth Scroll
=========================================================*/

$$('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(!target) return;

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/*=========================================================
 Hero
=========================================================*/

const heroLogo=$(".hero-logo");

window.addEventListener("mousemove",(e)=>{

if(window.innerWidth<900) return;

const x=(e.clientX-window.innerWidth/2)/120;

const y=(e.clientY-window.innerHeight/2)/120;

heroLogo.style.transform=

`translate(${x}px,${y}px)`;

});

/*=========================================================
 Tarjetas
=========================================================*/

$$(".feature-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rx=-(y-rect.height/2)/18;

const ry=(x-rect.width/2)/18;

card.style.transform=

`perspective(900px)
 rotateX(${rx}deg)
 rotateY(${ry}deg)
 translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0)";

});

});

/*=========================================================
 Animación botón
=========================================================*/

$$(".cta-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.04)"

},

{

transform:"scale(1)"

}

],{

duration:400

});

});

});

/*=========================================================
 Mensaje Consola
=========================================================*/

console.clear();

console.log(

"%cGARUDA HOME",

"font-size:28px;font-weight:bold;color:#D4AF37;"

);

console.log(

"%cAlpha 0.2",

"font-size:14px;color:white;"

);

console.log(

"%cEl lugar donde comienza tu próxima historia.",

"font-size:13px;color:#94A3B8;"

);
