
// - Create a system so that when a user clicks on a generated square an alert pops-up 
// with the color of that square


//Start Thibault created functions
let randomColor = () =>{
  const min = 0;
  const max = 255;
  let R = Math.floor(Math.random() * (max - min + 1)) + min;
  let G = Math.floor(Math.random() * (max - min + 1)) + min;
  let B = Math.floor(Math.random() * (max - min + 1)) + min;

  let randomColor = `rgb(${R},${G},${B})`;
  return randomColor;
};

const deleteLog = () => {
  const ul = document.querySelector("ul");
  let numberOfChildren = ul.children.length;
  
  while (numberOfChildren > 0){
    ul.removeChild(ul.firstElementChild); 
    numberOfChildren = ul.children.length;
  };
};

const newBackgroundColor = () => {
  let bgColor = randomColor();
  body.style.backgroundColor = bgColor;

  const newDiv = document.createElement("li");
  const time = getElapsedTime()
  const textLog = `[${time}] Spacebar was pressed`;
  
  newDiv.textContent = textLog;
  const ul = document.querySelector("ul");
  ul.appendChild(newDiv)
}

const eraseSquares = () => {
  const generatedSquares = document.querySelector(".displayedsquare-wrapper");
  let numberOfSquares = generatedSquares.children.length;

  while (numberOfSquares > 0){
    generatedSquares.removeChild(generatedSquares.firstChild);
    numberOfSquares = generatedSquares.children.length;
  }
};

//end Thibault created functions

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  //console.log(e.target.classList[1])
  //console.log(getElapsedTime())
  const color = e.target.classList[1];
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", `displayedsquare ${color}`);
  const displayedWrapper = document.querySelector(".displayedsquare-wrapper")
  displayedWrapper.appendChild(newDiv);
  const ul = document.querySelector("ul");
  const liItem = document.createElement("li");
  const time = getElapsedTime()
  const textLog = `[${time}] Created a new ${color} square.`;
  liItem.textContent = textLog;
  ul.appendChild(liItem);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
  if(event.code === "Space"){
    newBackgroundColor();
  }else if (event.code ===  "KeyL"){
    deleteLog()
  }else if (event.code === "KeyS"){
    eraseSquares();
  };
});

body.addEventListener("click", (event) => {
  if (event.target.classList[0] === "displayedsquare"){
    let color = event.target.classList[1]
    alert(color);
  }
});

