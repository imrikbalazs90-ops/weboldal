/* ================= SCROLL TOP ================= */

function scrollTopSmooth(){
window.scrollTo({top:0,behavior:'smooth'});
}

/* ================= PAGE TRANSITION ================= */

document.addEventListener("DOMContentLoaded",()=>{

document.body.classList.add("page-enter");

document.querySelectorAll("a[href]").forEach(link=>{

const url = link.getAttribute("href");

if(
url &&
!url.startsWith("#") &&
!url.startsWith("http")
){
link.addEventListener("click",function(e){
e.preventDefault();
document.body.classList.add("page-leave");

setTimeout(()=>{
window.location.href=url;
},300);
});
}

});

/* ================= ACTIVE MENU FIX ================= */

const path = window.location.pathname;

document.querySelectorAll("nav a").forEach(link=>{

const href = link.getAttribute("href");

if(
path.endsWith(href) ||
(path.endsWith("/") && href==="index.html")
){
link.classList.add("active");
}

});

});
/* ===== AUTO COMPONENT LOADER ===== */

async function loadComponent(id, file){
const el = document.getElementById(id);
if(!el) return;

const res = await fetch(file);
const html = await res.text();
el.innerHTML = html;
}

document.addEventListener("DOMContentLoaded",()=>{

loadComponent("navbar-placeholder","components/navbar.html");
loadComponent("footer-placeholder","components/footer.html");

});
