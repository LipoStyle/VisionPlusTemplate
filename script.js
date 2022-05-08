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
// creating and appending
// creating imgURL
function imgURL(props){
  return React.createElement(
    "img",
    {src: props.url},
    null
  );
}
// creating nameParagraph
function nameOfGlass(props){
  return React.createElement(
    "p",
    null,
    props.name
  );
}
// creating colorParagraph
function colorOfGlass(props){
  return React.createElement(
    "p",
    null,
    props.color
  );
}
// creating sizeParagraph
function sizeOfGlass(props){
  return React.createElement(
    "p",
    null,
    props.size
  );
}
// creating the div for theese atributes
function createDiv(name,color,size){
 return React.createElement(
   "div",
   {class: "itemInformation"},
   nameOfGlass(name),
   colorOfGlass(color),
   sizeOfGlass(size)
 );
}
  // craete itemDiv
function createItem(url, name, color, size){
  return React.createElement(
    "div",
    {class: "item"},
    React.createElement(imgURL, {src:url}),
    createDiv(name,color, size)
  );
}
function createItems(){
  return React.createElement(
    "div",
    {class: "items"},
    createItem("img/glasses1.jpg", 514336, "Green", "32m"),
    createItem("img/glasses1.jpg", 614126, "Yellow", "45m"),
    createItem("img/glasses1.jpg", 425336, "Red", "22m"),
  );
}

ReactDOM.render(
  createItems(),
  document.querySelector(".items")
);
console.log(imgURL);