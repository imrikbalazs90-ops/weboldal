fetch(window.location.origin + '/components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;
})
.catch(error => console.error("Navbar load error:", error));

fetch('/components/navbar.html')
.then(response => response.text())
.then(data => {

document.getElementById("navbar").innerHTML = data;

/* aktív menü */

const links = document.querySelectorAll(".nav-link");
const current = window.location.pathname;

links.forEach(link => {

if (current.includes(link.getAttribute("href"))) {

link.classList.add("active");

}

});

});