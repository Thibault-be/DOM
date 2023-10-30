const students = ["Danté", "Killian", "Monday", "Josué",  "Thibault", "Luis",
     "Sieglinde", "Kelsey", "Thierry", "Jonasi", "Becca"];

//randomise the students list
for (let i = students.length -1; i > 0; i--) { 
  let j = Math.floor(Math.random() * (i+1));
  let k = students[i];
  students[i] = students[j];
  students[j] = k;
}

function randomColor(){
  let min = 0;
  let max = 255;
  let R = Math.floor(Math.random() * (max - min + 1)) + min;
  let B = Math.floor(Math.random() * (max - min + 1)) + min;
  let G = Math.floor(Math.random() * (max - min + 1)) + min;
  
  let color = `rgb(${R}, ${G},${B})`
  
  //  // calculate the relative luminance. > 0.5 is light; <0.5 is dark
  luminance = 0.2126 * (R / 255) + 0.7152 * (G / 255) + 0.0722 * (B / 255)
  console.log(`L is ${luminance}`)

  return colorAndLuminance = [color, luminance]  
};

const newSection = document.createElement("section");

//loop through the array
for (let i = 0; i < students.length; i++){
  let name = students[i];
  const pLearner = document.createElement("p");

  let backgroundColor = randomColor()

  console.log(backgroundColor);
  pLearner.style.backgroundColor = backgroundColor[0];

  if (backgroundColor[1] >=0.5){
    pLearner.style.color = "black"
  }else{
    pLearner.style.color = "white"
  }

  pLearner.textContent = name;
  newSection.appendChild(pLearner);
};

article = document.querySelector("article");
article.appendChild(newSection);


