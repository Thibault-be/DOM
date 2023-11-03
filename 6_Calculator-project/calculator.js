const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators =["plus","minus","multiply","divide", "C", "equal", "negative", "comma"];

const mainElement = document.querySelector("main");


const createButtons = (array, arrayName) =>{
  array.forEach(button =>{
    const newBtn = document.createElement("button");
    const className = `number${button.toString()} ${arrayName}`
    newBtn.setAttribute("class", className);
    newBtn.textContent = button;
    mainElement.appendChild(newBtn);
  });
};
createButtons(numbers, "number");
createButtons(operators, "operator");

const screen = document.createElement("div");
screen.setAttribute("class", "screen");
mainElement.appendChild(screen);


