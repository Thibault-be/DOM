const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators =["plus","minus","multiply","divide"];
const comma = ["comma"]
const cBtn = ["C"]
const equal = ["equal"];
const negative = ["negative"];

const mainElement = document.querySelector("main");


// const createSpecialButtons = (array, arrayName) =>{
//   array.forEach(button =>{
//     const newBtn = document.createElement("button");
//     const className = `btn-${button.toString()} ${arrayName}`
//     newBtn.setAttribute("class", className);
//     newBtn.textContent = button;
//     mainElement.appendChild(newBtn);
//   });
// };

const createSpecialButtons = (array, arrayName) =>{
  array.forEach(button =>{
    const newBtn = document.createElement("button");
    //const className = `${button} ${arrayName}`;
    const className = `btn-${button.toString()} ${arrayName}`
    newBtn.setAttribute("class", className);

    let specialButtonTextContent = textContentSpecial(button);
    newBtn.textContent = specialButtonTextContent;
    mainElement.appendChild(newBtn);
  });
};

const textContentSpecial = (buttonName) =>{

  switch (buttonName){
    case "plus": return "+"

    case "negative":
    case "minus": return "-"
    
    case "divide": return "/"
    
    case "multiply": return "*"
    
    case "comma": return "."
    
    case "equal": return "="

    default: return buttonName

  }


}

createSpecialButtons(numbers, "number");
createSpecialButtons(operators, "operator");
createSpecialButtons(comma, "comma");
createSpecialButtons(cBtn, "cBtn");
createSpecialButtons(equal, "equals");
createSpecialButtons(negative, "negative");


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

    digitEnter(digit.textContent);
  });
});

//what is shown on the display when a digit is entered?
 const digitEnter = (digit) =>{

      
   screenContent = screenElement.textContent;
   let digitScreenValue = digitCheckScreenValue(screenContent, digit)
   screenElement.textContent = digitScreenValue;
};
const digitCheckScreenValue = (string, digit) =>{
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
   case "-":  {
    if(string === "0"){
      return digit;
    }else{
      string += digit;
      return string;
    };
   };    
  }
};

function deleteOneCharacter(string){
  let stringArray = Array.from(string);
  let poppedArray = stringArray.pop();
  string = stringArray.join("");
  return string;

};

//delete button removes one character off the display
const cDeleteBtn = document.querySelector(".cBtn");
cDeleteBtn.addEventListener("click", () =>{

    screenElement.textContent = deleteOneCharacter(screenElement.textContent);
  });

//for operations with negative values 
////////WILL FAIL WHEN LAST CHARACTER IS AN OPERATOR
const negativeBtn = document.querySelector(".negative");
negativeBtn.addEventListener("click", () =>{
  let string = screenElement.textContent;
  let lastChar = string.charAt(string.length-1);
  
  switch(lastChar){
    case "":{
      screenElement.textContent = "-"
      break
    };
    case ".":{
      break
    };
    case "-":
    case "+":
    case "*":
    case "/":{
      string += "-"
    };

    
  }
  

});


const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach(btn =>{
  btn.addEventListener("click", () =>{
    let string = screenElement.textContent;
    let lastChar = string.charAt(string.length-1);
    
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



const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () =>{
  screenElement.textContent = computeResult(screenElement.textContent);
});

///make array with result and what is to be displayed
function computeResult(str){
  return Function('return ' + str)()
};

// nul mag niet na operator tenzij daarna een komma komt

//switchcase for last char can go in separate function
// also obtain textContent of display can go in a separate function