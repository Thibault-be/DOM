
const menu = [
  {
    dish: "Spaghetti Bolognese",
    description: "The classic pasta with tomato sauce, minced beef, and parmesan cheese",
    country: "Italian",
    type: "pasta",
    vegetarian: "no",
    calories: "500",
    price: "18",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Margherita Pizza",
    description: "A traditional Italian pizza with tomato, mozzarella, and basil",
    country: "Italian",
    type: "pizza",
    vegetarian: "yes",
    calories: "650",
    price: "14",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Chicken Tikka Masala",
    description: "Tender chicken in a creamy tomato sauce with Indian spices",
    country: "Indian",
    type: "curry",
    vegetarian: "no",
    calories: "550",
    price: "20",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Sushi Platter",
    description: "Assorted sushi rolls with fresh seafood and rice",
    country: "Japanese",
    type: "sushi",
    vegetarian: "no",
    calories: "400",
    price: "24",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Caesar Salad",
    description: "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing",
    country: "American",
    type: "salad",
    vegetarian: "no",
    calories: "320",
    price: "12",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Burger",
    description: "A classic beef burger with lettuce, tomato, and cheese",
    country: "American",
    type: "burger",
    vegetarian: "no",
    calories: "600",
    price: "10",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Pad Thai",
    description: "Stir-fried rice noodles with tofu, shrimp, peanuts, and lime",
    country: "Thai",
    type: "noodles",
    vegetarian: "no",
    calories: "450",
    price: "15",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Miso Soup",
    description: "A traditional Japanese soup made with miso paste and seaweed",
    country: "Japanese",
    type: "soup",
    vegetarian: "yes",
    calories: "80",
    price: "8",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Steak Frites",
    description: "Grilled steak with French fries and a side salad",
    country: "French",
    type: "steak",
    vegetarian: "no",
    calories: "700",
    price: "28",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Chicken Alfredo",
    description: "Creamy pasta with grilled chicken, garlic, and Parmesan cheese",
    country: "Italian",
    type: "pasta",
    vegetarian: "no",
    calories: "550",
    price: "16",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Vegetable Stir-Fry",
    description: "A medley of fresh vegetables stir-fried in a savory sauce",
    country: "Chinese",
    type: "stir-fry",
    vegetarian: "yes",
    calories: "400",
    price: "12",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Fish Tacos",
    description: "Crispy fish in soft tortillas with coleslaw and salsa",
    country: "Mexican",
    type: "tacos",
    vegetarian: "no",
    calories: "450",
    price: "14",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Vegetarian Lasagna",
    description: "Layers of pasta, ricotta, and vegetables baked in marinara sauce",
    country: "Italian",
    type: "pasta",
    vegetarian: "yes",
    calories: "480",
    price: "17",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "BBQ Ribs",
    description: "Slow-cooked barbecue ribs served with coleslaw and baked beans",
    country: "American",
    type: "ribs",
    vegetarian: "no",
    calories: "750",
    price: "22",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
    country: "Italian",
    type: "salad",
    vegetarian: "yes",
    calories: "280",
    price: "10",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Shrimp Scampi",
    description: "Garlic shrimp sautéed in white wine and butter served over pasta",
    country: "Italian",
    type: "seafood",
    vegetarian: "no",
    calories: "520",
    price: "20",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Vegetable Curry",
    description: "A flavorful curry with a variety of vegetables and spices",
    country: "Indian",
    type: "curry",
    vegetarian: "yes",
    calories: "400",
    price: "16",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Clam Chowder",
    description: "Creamy soup with clams, potatoes, and bacon",
    country: "American",
    type: "soup",
    vegetarian: "no",
    calories: "350",
    price: "13",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Beef Tacos",
    description: "Tasty beef tacos with salsa, guacamole, and cheese",
    country: "Mexican",
    type: "tacos",
    vegetarian: "no",
    calories: "460",
    price: "12",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Hawaiian Pizza",
    description: "Pizza with ham, pineapple, and mozzarella cheese",
    country: "Italian",
    type: "pizza",
    vegetarian: "no",
    calories: "600",
    price: "15",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Garden Salad",
    description: "A fresh salad with mixed greens, vegetables, and vinaigrette",
    country: "American",
    type: "salad",
    vegetarian: "yes",
    calories: "180",
    price: "9",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Penne Alla Vodka",
    description: "Penne pasta in a creamy tomato vodka sauce",
    country: "Italian",
    type: "pasta",
    vegetarian: "no",
    calories: "550",
    price: "19",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Chicken Shawarma",
    description: "Marinated chicken with garlic sauce, served in pita bread",
    country: "Middle Eastern",
    type: "sandwich",
    vegetarian: "no",
    calories: "420",
    price: "12",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Lobster Bisque",
    description: "Creamy lobster soup with sherry and herbs",
    country: "French",
    type: "soup",
    vegetarian: "no",
    calories: "350",
    price: "26",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, roasted in a tandoor",
    country: "Indian",
    type: "grill",
    vegetarian: "no",
    calories: "480",
    price: "17",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Mushroom Risotto",
    description: "Creamy risotto with mushrooms, onions, and parmesan cheese",
    country: "Italian",
    type: "risotto",
    vegetarian: "yes",
    calories: "420",
    price: "20",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "BBQ Pulled Pork",
    description: "Slow-cooked pulled pork in BBQ sauce with coleslaw",
    country: "American",
    type: "sandwich",
    vegetarian: "no",
    calories: "600",
    price: "14",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Greek Salad",
    description: "Salad with tomatoes, cucumbers, olives, and feta cheese",
    country: "Greek",
    type: "salad",
    vegetarian: "yes",
    calories: "240",
    price: "10",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Beef Stir-Fry",
    description: "Sliced beef and vegetables stir-fried in a savory sauce",
    country: "Chinese",
    type: "stir-fry",
    vegetarian: "no",
    calories: "480",
    price: "18",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Cannelloni",
    description: "Stuffed pasta rolls with ricotta and spinach in marinara sauce",
    country: "Italian",
    type: "pasta",
    vegetarian: "yes",
    calories: "410",
    price: "16",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Teriyaki Chicken",
    description: "Grilled chicken with teriyaki sauce and steamed vegetables",
    country: "Japanese",
    type: "grill",
    vegetarian: "no",
    calories: "550",
    price: "22",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Caesar Wrap",
    description: "Chicken, lettuce, and Caesar dressing wrapped in a tortilla",
    country: "American",
    type: "wrap",
    vegetarian: "no",
    calories: "390",
    price: "10",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Lentil Soup",
    description: "A hearty soup with lentils, vegetables, and spices",
    country: "Mediterranean",
    type: "soup",
    vegetarian: "yes",
    calories: "320",
    price: "9",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  },
  {
    dish: "Tuna Salad",
    description: "A salad with tuna, mixed greens, and a zesty vinaigrette",
    country: "American",
    type: "salad",
    vegetarian: "no",
    calories: "290",
    price: "19",
    image: "",//"https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg"
  }
];

//Layout of the HTML cards - click open drop down to view
/*
    <div class="card card5">
      <div class="game-image">
        <img src="./img/devilMayCry.jpg" alt="">
      </div>
      <div class="content-container">
        <h2 class="title">Devil May Cry</h2>
        <p class="release">2001</p>
        <p class="genre">Hack 'n' Slash</p>
        <p class="platforms">PS2, PS3, Android</p>
        <p class="publisher">Capcom</p>
        <p class="developer">Capcom</p>
      </div>
    </div>
*/

//const arrayLength = menu.length;


const main = document.querySelector("main");
const cardsContainer = document.createElement("div");
cardsContainer.setAttribute("class", "cards-container")

//generate the cards for all items in menu
function createMenuCard(item){
  let dish = item["dish"];
  let description = item["description"];
  let country = item["country"];
  let type = item["type"];
  let vegetarian = item["vegetarian"];
  let calories = `${item["calories"]} kCal`;
  let price = `€ ${item["price"]}`;
  let image = item["image"];
  
  let card = document.createElement("div");
  card.setAttribute("class", "card")


  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "image")
  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", image)
  imgContainer.appendChild(imageElement);

  let dishElement = document.createElement("h2");
  dishElement.textContent = dish;

  let descriptionElement = document.createElement("p");
  descriptionElement.setAttribute("class", "description");
  descriptionElement.textContent = description

  let countryElement = document.createElement("p");
  countryElement.textContent = country;

  let typeElement = document.createElement("p");
  typeElement.textContent = type;

  let vegetarianElement = document.createElement("p");
  vegetarianElement.textContent = vegetarian;

  let caloriesElement = document.createElement("p");
  caloriesElement.textContent = calories;

  let priceElement = document.createElement("p");
  priceElement.textContent = price;

  let cardNodes = [imgContainer, dishElement, descriptionElement, countryElement,
          typeElement, vegetarianElement, caloriesElement, priceElement];
  
  cardNodes.forEach(node =>{
    card.appendChild(node);
  })

  console.log(card);
  return card;
}

menu.forEach(menuItem => {
  let dish = menuItem["dish"];
  let description = menuItem["description"];
  let country = menuItem["country"];
  let type = menuItem["type"];
  let vegetarian = menuItem["vegetarian"];
  let calories = `${menuItem["calories"]} kCal`;
  let price = `€ ${menuItem["price"]}`;
  let image = menuItem["image"];
  
  let card = document.createElement("div");
  card.setAttribute("class", "card")


  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "image")
  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", image)
  imgContainer.appendChild(imageElement);

  let dishElement = document.createElement("h2");
  dishElement.textContent = dish;

  let descriptionElement = document.createElement("p");
  descriptionElement.setAttribute("class", "description");
  descriptionElement.textContent = description

  let countryElement = document.createElement("p");
  countryElement.textContent = country;

  let typeElement = document.createElement("p");
  typeElement.textContent = type;

  let vegetarianElement = document.createElement("p");
  vegetarianElement.textContent = vegetarian;

  let caloriesElement = document.createElement("p");
  caloriesElement.textContent = calories;

  let priceElement = document.createElement("p");
  priceElement.textContent = price;

  let cardNodes = [imgContainer, dishElement, descriptionElement, countryElement,
          typeElement, vegetarianElement, caloriesElement, priceElement];
  
  cardNodes.forEach(node =>{
    card.appendChild(node);
  })

  cardsContainer.appendChild(card);

});
main.appendChild(cardsContainer);


//create the first drop down to filter
const filterInput = document.createElement("select")
const filterOptions = ["", "type", "country", "vegetarian", "calories", "price"];
filterOptions.forEach(option =>{
  let newDiv = document.createElement("option");
  newDiv.setAttribute("class", `filter-option ${option}`);
  newDiv.textContent = option;
  filterInput.appendChild(newDiv)
});
main.insertBefore(filterInput,main.firstElementChild);

let secondFilterList 
//this eventListener creates the second dropdown filter list when you select an option in the first list
filterInput.addEventListener('change', (event)=> {
  let firstFilterValue = filterInput.value;

  if(!document.querySelector(".second-filter")){
    secondFilterList = document.createElement("select");
    secondFilterList.setAttribute("class", "second-filter");

  }else{
    secondFilterList = document.querySelector(".second-filter")
    while(secondFilterList.firstChild){
      secondFilterList.remove(secondFilterList.lastChild);
    };
  }
  createFilterOptions(firstFilterValue);
  main.insertBefore(secondFilterList, main.children[1]);
  secondFilterEvent(firstFilterValue, secondFilterList);
});


//this function fetches the items for the second dropdown filterlist
function createFilterOptions(firstFilterValue){

  let selections = []
  console.log(selections)
  //loop over every item in the menu array and check if the value is in the new array
  menu.forEach(item =>{
    if(!selections.includes(item[firstFilterValue])){
      selections.push(item[firstFilterValue]);
    };
  });
  selections.sort() // put in alphabetical order;

  let firstBlankOption = document.createElement("option")
  secondFilterList.appendChild(firstBlankOption);


  selections.forEach(selection => {
    let optionElement = document.createElement("option");
    optionElement.textContent = selection;
    secondFilterList.appendChild(optionElement);
  })
};

//make sure only the cards with that filter option are visible
function secondFilterEvent(string, object){
  object.addEventListener('change', (event) =>{

    let allCards = document.querySelector(".cards-container");
    while(allCards.firstChild){
      allCards.removeChild(allCards.lastChild);
    }

    menu.forEach(item =>{
      if((item[string] === object.value)){
        let card = createMenuCard(item);
        cardsContainer.appendChild(card);
      }
    })
  })
}