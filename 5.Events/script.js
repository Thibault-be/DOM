//## Exercises

// Open the [script.js](./script.js) file and edit it, so that:
// - Everytime the user clicks on one of the action squares
//   - Create a new `<div>` with a class `.displayedsquare` and the corresponding clicked color 
//      in the div above (`.displayedsquare-wrapper`)
//   - Create a new `<li>` in the log below to state when the action was done
// ![It should look like this](../assets/event-exercise.gif)


// - Add an event listener on the document `<body>`, listening for the `keypress` event. (hint: [have a look at this](https://keycode.info/))
//   - When the `spacebar` is hit randomly change the background color of the whole page
//   - Log when the `spacebar` is used the same way you used for the generated squares.
//   - When the <key>l</key> key is pressed the log gets deleted (erases the generated `<li>`s). 
//    Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over 
//    changes), so a while loop might be a good choice instead.

//   - When the <key>s</key> key is pressed the squares get deleted (erases the generated squares)
// - Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square


//Start Thibault created functions
let randomColor = () =>{
  const min = 0;
  const max = 255;
  let R = Math.floor(Math.random() * (max - min + 1)) + min;
  let G = Math.floor(Math.random() * (max - min + 1)) + min;
  let B = Math.floor(Math.random() * (max - min + 1)) + min;

  let randomColor = `rgb(${R},${G},${B})`;
  return randomColor;
}

const deleteLog = () => {
  const ul = document.querySelector("ul");
  let numberOfChildren = ul.children.length;
  
  while (numberOfChildren > 0){
    ul.removeChild(ul.firstElementChild); 
    numberOfChildren = ul.children.length;
    console.log(numberOfChildren);
  }
}

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
  const body = document.querySelector("body");

}

//end Thibault created functions

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
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
  //console.log(event);
  if(event.code === "Space"){
    newBackgroundColor();
  }else if (event.code ===  "KeyL"){
    deleteLog()
  }else if (event.code === "KeyS"){
    eraseSquares();
  };
});


