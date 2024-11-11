const themeColour = document.querySelector('#theme-icon');

themeColour.onclick = () =>{
    themeColour.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}
const signin = document.querySelector('.butsignin')
const loginForm = document.querySelector('.login-form-container')
const closeBtn = document.getElementById('close')
signin.onclick = () =>{
    loginForm.classList.add('active')

}


closeBtn.onclick = () => {
    loginForm.classList.remove('active')
    
}




// Responsiveness 
let navbar = document.querySelector(".navbar")
let menuIcon = document.getElementById("menu-icon")
menuIcon.onclick = () =>{
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x")
} 
window.onscroll = () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x")
}
