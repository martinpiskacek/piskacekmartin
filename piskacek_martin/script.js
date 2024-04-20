// ZMĚNA BARVY HLAVIČKY PO SCROLLOVÁNÍ
function changeColor(){
    let navbar = document.querySelector("nav");
    let scrollValue = window.scrollY;
    if(scrollValue < 1){
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }
}

window.addEventListener("scroll", changeColor);


// PO KLIKNUTÍ NA ODKAZ V HLAVIČCE - SCROLL DO DANÉ SEKCE
let galerieScrollGoal = document.querySelector(".galerie").offsetTop - 120;
let oMneScrollGoal = document.querySelector(".o-mne").offsetTop - 120;
let kontaktScrollGoal = document.querySelector(".kontakt").offsetTop - 120;

let galerieBtn = document.querySelector("#galerie-btn");
let oMneBtn = document.querySelector("#o-mne-btn");
let kontaktBtn = document.querySelector("#kontakt-btn");


galerieBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: galerieScrollGoal,
        behavior: "smooth"
    })
})

oMneBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: oMneScrollGoal,
        behavior: "smooth"
    })
})

kontaktBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: kontaktScrollGoal,
        behavior: "smooth"
    })
})


// PO KLIKNUTÍ NA ŠIPKU - SKOK DO SEKCE GALERIE
let arrowDown = document.querySelector(".fa-chevron-down");
arrowDown.addEventListener("click", () => {
    window.scrollTo({
        top: galerieScrollGoal,
        behavior: "smooth"
    })
})
