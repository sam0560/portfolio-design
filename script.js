addEventListener("load", ()=>{
let typingEffect = new Typed(".multiText", {
    strings : ["Samuel Mensah Boafo ", "a Frontend Developer"],
    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500,
})
})



// navigation bar 
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false'){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true'){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
    console.log(visibility);
}) 