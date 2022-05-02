// here we make the clickevent for dropdown menu
const toggleButton = document.querySelector(".toggleButton");
const navBarLinks = document.querySelector(".navigationBar")
// adding event
toggleButton.addEventListener("click", ()=>{
  navBarLinks.classList.toggle("active");
});
// adding a class to the filter section for gender ul
const addingClickToGender = document.querySelectorAll("#gender ul li");
addingClickToGender.forEach(item => item.addEventListener("click", function toggleFilter(e){
  if(item.classList.contains("negate")){
    console.log("1");
    item.classList.remove("negate");
  }
  else {
    console.log("2");
    item.classList.add("negate");
  }
}));

// adding a class to the filter section for sub-gender ul
const addingClickToSubGender = document.querySelectorAll("#sub-gender ul li");
addingClickToSubGender.forEach(item => item.addEventListener("click", function toggleFilter(e){
  if(item.classList.contains("negate")){
    console.log("1");
    item.classList.remove("negate");
  }
  else {
    console.log("2");
    item.classList.add("negate");
  }
}));

// table of the content
var glasses = [
  {
    imgLink:"test",
    genderFilter:"Test1",
    subGenderFilter:"Test3",
    code:"test2",
    color:"red"
  }
]
console.log(glasses)