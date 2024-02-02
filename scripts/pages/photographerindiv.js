//////////GLOBAL VARIABLES THAT NEED TO BE ACCESSED BY EVERY FUNCTION////////////

 let mediaItems=[];

 let indivJSONmediaObjects=[]


//get photographer Id from URL
const currentURLsearch = new URLSearchParams(window.location.search);
const urlid = (currentURLsearch.get("id"));

const pop = document.querySelector("#pop");
const date = document.querySelector("#date");
const titre = document.querySelector("#titre");

let currentIndex = 0;
// console.log("URLId",urlid)

////////////////////////////////////////////////////////////////

//START INIT FUNCTION

async function init() {

  

  // Get data from JSON file
  const photographers = await getPhotographers();
  const person = findperson(photographers, urlid);
  displayHeader(person);
  indivJSONmediaObjects = await getMedia();
  displayMedia(indivJSONmediaObjects);


    // Initialize mediaItemsDOM after displayMedia is called
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("Global media DOM elements start",mediaItemsDOM)
  insertNameForm(person);

  

  let globallikes = 0;

  // console.log("mediaItemsDOM is ",typeof(mediaItemsDOM))



  for (i in mediaItemsDOM) {
    globallikes += parseInt(mediaItemsDOM[i].dataset.likes);
    mediaItemsDOM[i].setAttribute("data-active", "")

  }


  addPriceTag(person, globallikes);


  //EVENT LISTENERS///




  // ...
  
  mediaItemsDOM.forEach((item, index) => {
    const media = item.children[0]; // img or video inside mediaitem container
    media.dataset.index = index;
    media.addEventListener("click", handleMediaClick);
  });

  
 // end of ForEach mediaItem



  mediaItemsDOM.forEach((item) => {
    const icon = item.querySelector(".fa-heart");

    const clickHandler = (event) => {
      event.preventDefault();
      globallikes++;
      console.log("Global", globallikes);
      addPriceTag(person, globallikes);
      icon.removeEventListener("click", clickHandler);
    };

    icon.addEventListener("click", clickHandler);
  });

 


  pop.addEventListener("click", () => {
    console.log("pop");
    const sorted = indivJSONmediaObjects.sort(compareByPop)
    displayMedia(sorted)
    console.log("sorted ob: ", sorted)
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by pop: ",mediaItemsDOM)
    attachEventListeners();

  });

  date.addEventListener("click", () => {
    console.log("date");
    const sorted = indivJSONmediaObjects.sort(compareByDate)
    displayMedia(sorted)
    console.log("sorted objects: ", sorted)
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by date: ",mediaItemsDOM)
    attachEventListeners();
  });

  titre.addEventListener("click", () => {
    console.log("titre");
    const sorted = indivJSONmediaObjects.sort(compareByTitle)
    displayMedia(sorted)
    console.log("sorted objects: ", sorted)
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by title: ",mediaItemsDOM)
    attachEventListeners();
  });

  document.getElementById('closeLB').addEventListener('click', closeLightBox);

} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


