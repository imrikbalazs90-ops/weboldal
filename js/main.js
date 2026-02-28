/* ================= COMPONENT LOADER ================= */

async function loadComponent(id,file){
const el=document.getElementById(id);
if(!el) return;

const res=await fetch(file);
el.innerHTML=await res.text();

initNavbar(); // navbar után indul
}

document.addEventListener("DOMContentLoaded",()=>{

loadComponent("navbar-placeholder","components/navbar.html");
loadComponent("footer-placeholder","components/footer.html");

});

/* ================= PRO NAVBAR ================= */

function initNavbar(){

const navbar=document.getElementById("navbar");
if(!navbar) return;

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

/* háttér sötétítés */
navbar.classList.toggle("scrolled",current>80);

/* hide / show */
if(current>lastScroll && current>120){
navbar.style.transform="translateY(-100%)";
}else{
navbar.style.transform="translateY(0)";
}

lastScroll=current;

});

/* ===== ACTIVE MENU ===== */

const path=window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#navbar a").forEach(link=>{

if(link.getAttribute("href")===path){
link.classList.add("active");
}

});

}
