//Videogames

//item: videogame
//properties: platform, release date, genre, developer, publisher


const videogames = [
  {
    title: "Devil May Cry",
    platforms: ["PS2", "PS3", "XBox", "Switch"],
    release: 2001,
    genre: ["Hack 'n' Slash", "Action"],
    developer: "Capcom",
    publisher: "Capcom",
  },
  {
    title: "God of War",
    platforms: ["PS2", "PS3", "PS4", "PS5"],
    release: 2005,
    genre: ["Action / Adventure"],
    developer: "Santa Monica Studio",
    publisher: "Sony Computer Entertainment",
  },
  {
    title: "Killzone",
    platforms: ["PS2", "PS3", "PS4"],
    release: 2004,
    genre: ["First-Person Shooter"],
    developer: "Guerrilla Games",
    publisher: "Sony Computer Entertainment",
  },
  {
    title: "Socom 2",
    platforms: ["PS2"],
    release: 2003,
    genre: ["Tactical Shooter"],
    developer: "Zipper Interactive",
    publisher: "Sony Computer Entertainment",
  },
  {
    title: "Horizon Zero Dawn",
    platforms: ["PS4", "PS5"],
    release: 2017,
    genre: ["Action / RPG"],
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
  },
  {
    title: "Ratchet and Clank",
    platforms: ["PS2", "PS3", "PS4", "PS5"],
    release: 2002,
    genre: ["Platformer", "Action / Adventure"],
    developer: "Insomniac Games",
    publisher: "Sony Computer Entertainment",
  },
  {
    title: "Call of Duty: Modern Warfare",
    platforms: ["PS4", "PS5"],
    release: 2019,
    genre: ["First-Person Shooter"],
    developer: "Infinity Ward",
    publisher: "Activision",
  },
  {
    title: "SSX: Tricky",
    platforms: ["PS2"],
    release: 2001,
    genre: ["Sports (Snowboarding)"],
    developer: "EA Canada",
    publisher: "EA Sports BIG",
  },
  {
    title: "The Last of Us",
    platforms: ["PS3", "PS4"],
    release: 2013,
    genre: ["Action / Adventure", "Survival Horror"],
    developer: "Naughty Dog",
    publisher: "Sony Computer Entertainment",
  },
  {
    title: "Alan Wake",
    platforms: ["Xbox 360", "PC"],
    release: 2010,
    genre: ["Action / Adventure", "Survival Horror"],
    developer: "Remedy Entertainment",
    publisher: "Microsoft Game Studios",
  },
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




//Create the cards
const arrayLength = videogames.length;

let counter = 1
for(let i = 0; i < arrayLength; i++){

  let card = document.createElement("div");
  card.setAttribute("class", "card")
  
  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "game-image")
  let image = document.createElement("img");
  imgContainer.appendChild(image);

  let contentContainer = document.createElement("div");
  contentContainer.setAttribute("class", "content-container")
  
  let titleContainer = document.createElement("div");
  titleContainer.setAttribute("class", "title-container");
  let title = document.createElement("h2");
  title.setAttribute("class", "title");
  titleContainer.appendChild(title);

  let releaseContainer = document.createElement("div");
  releaseContainer.setAttribute("class", "info");
  let release = document.createElement("p");
  release.setAttribute("class","release");
  let releaseTag = document.createElement("p")
  releaseTag.setAttribute("class", "tag");
  releaseTag.textContent = "Release: "
  releaseContainer.appendChild(releaseTag);
  releaseContainer.appendChild(release);

  let genreContainer = document.createElement("div");
  genreContainer.setAttribute("class", "info");
  let genre = document.createElement("p");
  genre.setAttribute("class","genre");
  let genreTag = document.createElement("p")
  genreTag.setAttribute("class", "tag");
  genreTag.textContent = "Genre: "
  genreContainer.appendChild(genreTag);
  genreContainer.appendChild(genre);

  let platformsContainer = document.createElement("div");
  platformsContainer.setAttribute("class", "info");
  let platforms = document.createElement("p");
  platforms.setAttribute("class","platforms");
  let platformsTag = document.createElement("p");
  platformsTag.setAttribute("class", "tag");
  platformsTag.textContent = "Platforms: "
  platformsContainer.appendChild(platformsTag);
  platformsContainer.appendChild(platforms);

  let publisherContainer = document.createElement("div");
  publisherContainer.setAttribute("class", "info");
  let publisher = document.createElement("p");
  publisher.setAttribute("class","publisher");
  let publisherTag = document.createElement("p");
  publisherTag.setAttribute("class", "tag");
  publisherTag.textContent = "Publisher: "
  publisherContainer.appendChild(publisherTag);
  publisherContainer.appendChild(publisher);

  let developerContainer = document.createElement("div");
  developerContainer.setAttribute("class", "info");
  let developer = document.createElement("p");
  developer.setAttribute("class","developer");
  let developerTag = document.createElement("p");
  developerTag.setAttribute("class", "tag");
  developerTag.textContent = "Developer: "
  developerContainer.appendChild(developerTag);
  developerContainer.appendChild(developer);
  
  let info = [titleContainer, releaseContainer, genreContainer,
       platformsContainer, publisherContainer, developerContainer];

  for(let j = 0; j< info.length; j++){
    contentContainer.appendChild(info[j]);
  }

  card.appendChild(imgContainer);
  card.appendChild(contentContainer);


  //fill out the content

  console.log(videogames[i])

  //need to dynamically obtain "release" etc. so we can flex space between

  title.textContent = videogames[i]["title"];
  release.textContent =  videogames[i]["release"];
  genre.textContent =  videogames[i]["genre"];
  platforms.textContent = videogames[i]["platforms"];
  publisher.textContent =  videogames[i]["publisher"];
  developer.textContent =  videogames[i]["developer"];

  
  let main = document.querySelector("main");
  main.appendChild(card);

};






