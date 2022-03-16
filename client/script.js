const searchBtn = document.querySelector("#search");
const randomBtn = document.querySelector("#random");
const searchBar = document.querySelector("#searchBar");

const takeMeToMyResults = function (e) {
  e.preventDefault();
  const userInput = searchBar.value;
  fetch(`http://localhost:3000/${userInput}`)
    .then((resp) => resp.json())    
    .then((data) => {
      if (userInput === ""){
        window.open('http://localhost:3000')
      } else {
        window.open(data.link, '_self')
      }
    }) 
};

const randomResults = function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/random")
    .then((resp) => resp.json())
    .then((data) => window.open(data.link, '_self'));
}

searchBtn.addEventListener("click", takeMeToMyResults);
randomBtn.addEventListener("click", randomResults)
