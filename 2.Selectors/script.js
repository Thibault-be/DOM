let importantClass = document.querySelectorAll(".important");

// console.log(importantClass);

importantClass.forEach(element => {
  element.setAttribute("title", "this is an important item");
  // console.log(element);
}); 


let images = document.querySelectorAll("img");

for(const img of images){
  if(img.getAttribute("class") !== "important"){
    img.style.display = "none";
  };
};

const paragraphs = document.querySelectorAll("p");

for(const p of paragraphs){
  const pClass = p.getAttribute("class");
  const content = p.textContent;

  if (pClass === null){
    console.log(content)
    
    //assign random color
    let min = 0;
    let max = 255;
    let R = Math.floor(Math.random() * (max - min + 1)) + min;
    let G = Math.floor(Math.random() * (max - min + 1)) + min;
    let B = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(R);
    console.log(G);
    console.log(B);

    p.style.color = `rgb(${R},${G},${B})`;

  }else{
    console.log(`the content is: ${content}. My class is: ${pClass}`);
  }
};



// - Give each of the paragraph a random text color (different for each one) 
// UNLESS it has a class then leave it as it is.
