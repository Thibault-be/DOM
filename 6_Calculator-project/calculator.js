/***************************************
start of creation of buttons and display
****************************************/

//arrays to create the buttons
const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators =["plus","minus","multiply","divide"];
const comma = ["comma"]
const cBtn = ["C"]
const equal = ["equal"];
const negative = ["negative"];

//grab <main> to append all newly created elements
const mainElement = document.querySelector("main");

//function to create the buttons
const createSpecialButtons = (array, arrayName) =>{
  array.forEach(button =>{
    const newBtn = document.createElement("button");
    const className = `btn-${button.toString()} ${arrayName}`
    newBtn.setAttribute("class", className);
    let specialButtonTextContent = textContentSpecial(button);
    newBtn.textContent = specialButtonTextContent;
    mainElement.appendChild(newBtn);
  });
};

//function to determin textContent of the button
const textContentSpecial = (buttonName) =>{
  switch (buttonName){
    case "plus": return "+"
    case "negative": return "+/-"
    case "minus": return "-"
    case "divide": return "/"
    case "multiply": return "*"
    case "comma": return "."
    case "equal": return "="
    default: return buttonName
  };
};

//run the function on all arrays to create the buttons
createSpecialButtons(numbers, "number");
createSpecialButtons(operators, "operator");
createSpecialButtons(comma, "comma");
createSpecialButtons(cBtn, "cBtn");
createSpecialButtons(equal, "equals");
createSpecialButtons(negative, "negative");

//make a display for the calculator
const screen = document.createElement("div");
screen.setAttribute("class", "screen");
mainElement.appendChild(screen);
const display = document.createElement("div");
display.setAttribute("class", "display");
mainElement.insertBefore(display, mainElement.firstElementChild);

/***************************************
end of creation of buttons and display
****************************************/


/*Elements and variables available throughout script 
****************************************************/
const screenElement = document.querySelector(".display");
//keep track of the last button that was clicked
let lastPressed = "";



/*add eventlisteners to all the buttons
***************************************/

//select all numbers and add eventlistener
const digits = document.querySelectorAll(".number");
digits.forEach(digit =>{
  digit.addEventListener("click", () =>{
    digitEnter(digit.textContent);
  });
});

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach(btn =>{
  btn.addEventListener("click", () =>{
    let string = screenElement.textContent;
    let lastChar = string.charAt(string.length-1);
    lastPressed = "";
    
    switch (lastChar){

      case ".":{
        break
      }
      case "+":
      case "-":
      case "/":
      case "*":{
        screenElement.textContent = `${deleteOneCharacter(string)}${btn.textContent}`;
        break;
      }
      default:{
        screenElement.textContent = string + btn.textContent;
        break;
      } 
    }
  })
});

//delete button removes one character off the display
const cDeleteBtn = document.querySelector(".cBtn");
cDeleteBtn.addEventListener("click", () =>{
  if(lastPressed === "="){
    screenElement.textContent = "";
  }else{
    screenElement.textContent = deleteOneCharacter(screenElement.textContent);
  }
});

const commaBtn = document.querySelector(".comma");
commaBtn.addEventListener("click", () =>{
  let comma = addComma();
});

const negativeBtn = document.querySelector(".negative");
negativeBtn.addEventListener("click", () =>{
  let makeNegativeResult = makeNegative() 
});

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () =>{
  let result = computeResult(screenElement.textContent);
  lastPressed = "="
  screenElement.textContent = result;
});



/* Functions to handle input from the buttons
*********************************************/

//what is shown on the display when a digit is entered?
 const digitEnter = (digit) =>{
   let screenContent = screenElement.textContent;
   let digitScreenValue = digitCheckScreenValue(screenContent, digit)
   screenElement.textContent = digitScreenValue;
};

const digitCheckScreenValue = (string, digit) =>{
  if (lastPressed === "="){
    lastPressed = "";
    return digit;
  }else{
    let lastChar = string.charAt(string.length-1);

    switch (lastChar){
    case "": {
      return digit;
    };
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "*":
    case "/":
    case "-":
    case ".":  {
      if(string === "0"){
        return digit;
      }else{
        string += digit;
        return string;
      };
    };    
    }
  }
};

function deleteOneCharacter(string){
  let stringArray = Array.from(string);
  let poppedArray = stringArray.pop();
  string = stringArray.join("");
  return string;

};

function computeResult(str){
  return Function('return ' + str)()
}

function addComma(){
  
if (lastPressed != "="){
  let string = screenElement.textContent;
  let lastChar = string.charAt(string.length-1);

  //can't have two commas in one operand

  //split the string in several values.
  commaArray = string.split(/[+\-*\/]/);
  
  // on the last item of the array, check if we can add a comma
  let lastCommaArrayItem = commaArray[commaArray.length-1];

  let commaPresent = lastCommaArrayItem.indexOf(".");
  console.log(commaPresent)
  if (commaPresent === -1){
    string += ".";
    screenElement.textContent = string;
  }
}

  // let string = screenElement.textContent;
  // let lastChar = string.charAt(string.length-1);

  // //can't have two commas in one operand

  // //split the string in several values.
  // commaArray = string.split(/[+\-*\/]/);
  
  // // on the last item of the array, check if we can add a comma
  // let lastCommaArrayItem = commaArray[commaArray.length-1];

  // let commaPresent = lastCommaArrayItem.indexOf(".");
  // console.log(commaPresent)
  // if (commaPresent === -1){
  //   string += ".";
  //   screenElement.textContent = string;
  // }
};


function makeNegative(){

  //only to work as very first character, or right after operator
  
  if(lastPressed=== "="){
    lastPressed = "";
    screenElement.textContent = "-"
  }else{
    let string = screenElement.textContent;
  let lastChar = string.charAt(string.length-1);
  

  if (string.length === 1 && lastChar === "-"){
    console.log(string.length)
    console.log("hallo")
    screenElement.textContent = ""
  }else {
    switch (lastChar){
      case "+":
      case "-":
      case "*":
      case "/":{
        let penultimateChar = string.charAt(string.length-2);
        console.log("penultimate", penultimateChar)
        switch(penultimateChar){
          case "+":
          case "-":
          case "*":
          case "/":{
            break;
          }default: {
            string += "-"
            screenElement.textContent = string;
          }
          
        }

      };
      case ".":{
        break
      }
      case "":{
        screenElement.textContent = "-";
        break
      }
    }
  }

  }

  
  
};