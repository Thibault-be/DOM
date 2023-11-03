const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators =["plus","minus","multiply","divide", "comma"];
const others = ["C", "negative" , "equal"]

const mainElement = document.querySelector("main");


const createButtons = (array, arrayName) =>{
  array.forEach(button =>{
    const newBtn = document.createElement("button");
    const className = `btn-${button.toString()} ${arrayName}`
    newBtn.setAttribute("class", className);
    newBtn.textContent = button;
    mainElement.appendChild(newBtn);
  });
};
createButtons(numbers, "number");
createButtons(operators, "operator");
createButtons(others, "others")

const screen = document.createElement("div");
screen.setAttribute("class", "screen");
mainElement.appendChild(screen);


const display = document.createElement("div");
display.setAttribute("class", "display");
mainElement.insertBefore(display, mainElement.firstElementChild);

//available throughout script
const screenElement = document.querySelector(".display");

//select all numbers and add eventlistener
const digits = document.querySelectorAll(".number");
digits.forEach(digit =>{
  digit.addEventListener("click", () =>{
    displayValue(digit.textContent);
  });
});


 const displayValue = (key) =>{
  
   //concatenate current content with new key

  //edge cases:
  // no two operators after each other
  // negative number only if empty or after operator
  // comma only after integer
    
   screenContent = screenElement.textContent;

   let screenValue = checkScreenValue(screenContent)
}

const checkScreenValue = (string) =>{
  let lastChar = string.charAt(string.length-1);


  switch (lastChar){
   case (""): {
    

   };
     break
   case ([0-9]): console.log("hallo");
     break
  }
}