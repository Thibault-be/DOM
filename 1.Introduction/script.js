let title = document.querySelector("title");

title.textContent = "Modifying the DOM";

let body = document.querySelector("body");
body.style.backgroundColor = "#FF69B4";





numberOfChildren = body.childElementCount;
console.log(numberOfChildren);


for (const child of body.children){
  console.log(child)
};
