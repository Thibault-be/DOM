// - Modify the [script.js](./script.js) to create a new `<section>`
//  with a random background-color for each learner in your group.
//  This section should contain a paragraph with the name of the learner.
//  Those sections should be appended in the `<article>`
// - If the background is dark the text should be white, 
// if the background is light the text should be black
// - Find a way so that everytime you load the page the order of the 
// elements changes!


const students = ["Danté", "Killian", "Monday", "Josué", "Thibault", "Luis"]

function randomColor(){
  let min = 0;
  let max = 255;
  let R = Math.floor(Math.random() * (max - min + 1)) + min;
  let B = Math.floor(Math.random() * (max - min + 1)) + min;
  let G = Math.floor(Math.random() * (max - min + 1)) + min;
  
  let color = `rgb(${R}, ${G},${B})`
  return color;
};



const newSection = document.createElement("section");

//loop through the array
for (let i = 0; i < students.length; i++){
  let name = students[i];
  const pLearner = document.createElement("p");

  let backgroundColor = randomColor()
  console.log(backgroundColor);
  pLearner.style.backgroundColor = backgroundColor;

  pLearner.textContent = name;
  newSection.appendChild(pLearner);
};

article = document.querySelector("article");
article.appendChild(newSection);



// section -> paragraph (name)


