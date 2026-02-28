async function loadComponent(id,file){
const el=document.getElementById(id);
if(!el) return;

const res=await fetch(file);
el.innerHTML=await res.text();
}

document.addEventListener("DOMContentLoaded",()=>{

loadComponent("navbar-placeholder","components/navbar.html");
loadComponent("footer-placeholder","components/footer.html");

});
