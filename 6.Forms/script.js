let firstName = document.querySelector("#firstname");
const displayFirstName = document.querySelector("#display-firstname");
  firstName.addEventListener("keyup", (event) =>{
  displayFirstName.textContent = firstName.value;
});


const age = document.querySelector("#age");
age.addEventListener("keyup", (event) =>{
  const truth = document.querySelector("#a-hard-truth");
  if (age.value >= 18){    
    console.log(truth);
    truth.style.visibility = "visible";
  }else{
    truth.style.visibility = "hidden";
  };
});


const pwd = document.querySelector("#pwd");
pwd.addEventListener("keyup", (event) => {
  if(pwd.value.length < 6){
    pwd.style.color = "red"
  }else{
    pwd.style.color = "green"
  }
});

const pwdConfirm = document.querySelector("#pwd-confirm");
pwdConfirm.addEventListener("keyup", (event) =>{
  if (pwdConfirm.value != pwd.value){
    pwdConfirm.style.color = "red"
  }else{
    pwdConfirm.style.color = "green"
  }
});

const mode = document.querySelector("#toggle-darkmode");
mode.addEventListener("change", (event) =>{
  
  console.log(event)
  let body = document.querySelector("body");
  if(event.target.value === "dark"){
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }else{
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});