/* ================= SCROLL TOP ================= */

function scrollTopSmooth(){
window.scrollTo({top:0,behavior:'smooth'});
}

/* ================= PAGE TRANSITION ================= */

document.addEventListener("DOMContentLoaded",()=>{

const links=document.querySelectorAll("a[href]");

links.forEach(link=>{

const url=link.getAttribute("href");

/* csak belső oldalak */

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
},350);

});
}

});

/* belépő animáció */

document.body.classList.add("page-enter");

});
