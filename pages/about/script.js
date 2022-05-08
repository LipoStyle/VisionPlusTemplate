// here we make the clickevent for dropdown menu
const toggleButton = document.querySelector(".toggleButton");
const navBarLinks = document.querySelector(".navigationBar")
// adding event
toggleButton.addEventListener("click", ()=>{
  navBarLinks.classList.toggle("active");
});