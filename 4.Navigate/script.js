/*
## Exercises

Modify the [script.js](./script.js), do not create any new nodes!

- Select the last child of the `<ol>` tag and put it at the beginning of the list
- Move the `<h2>` of the third section in the second one and vice-versa
- Delete the last section from the DOM, we don't need it anyways

*/


const ol = document.querySelector("ol");
const lastChild = ol.lastElementChild;
ol.removeChild(lastChild);
ol.insertBefore(lastChild, ol.firstElementChild);


const h2List = document.querySelectorAll("h2");
const sectionList = document.querySelectorAll("section");


sectionList[1].insertBefore(h2List[2], sectionList[1].firstElementChild);
sectionList[2].insertBefore(h2List[1], sectionList[2].firstElementChild);


sectionList[2].removeChild(h2List[1]);
