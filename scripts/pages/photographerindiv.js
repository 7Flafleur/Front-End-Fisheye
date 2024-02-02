//////////GLOBAL VARIABLES THAT NEED TO BE ACCESSED BY EVERY FUNCTION////////////

 let mediaItems=[];

 let indivmedia=[]


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
  indivmedia = await getMedia();
  displayMedia(indivmedia);


    // Initialize mediaItems after displayMedia is called
    mediaItems = Array.from(document.querySelectorAll(".mediacard"));
  console.log("Global media DOM elements start",mediaItems)
  insertNameForm(person);

  

  let globallikes = 0;

  // console.log("Mediaitems is ",typeof(mediaItems))



  for (i in mediaItems) {
    globallikes += parseInt(mediaItems[i].dataset.likes);
    mediaItems[i].setAttribute("data-active", "")

  }


  addPriceTag(person, globallikes);


  //EVENT LISTENERS///




  // ...
  
  mediaItems.forEach((item, index) => {
    const media = item.children[0]; // img or video inside mediaitem container
    media.dataset.index = index;
    media.addEventListener("click", handleMediaClick);
  });

  
 // end of ForEach mediaItem



  mediaItems.forEach((item) => {
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
    const sorted = indivmedia.sort(compareByPop)
    displayMedia(sorted)
    console.log("sorted ob: ", sorted)
    mediaItems = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by pop: ",mediaItems)
    attachEventListeners();

  });

  date.addEventListener("click", () => {
    console.log("date");
    const sorted = indivmedia.sort(compareByDate)
    displayMedia(sorted)
    console.log("sorted objects: ", sorted)
    mediaItems = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by date: ",mediaItems)
    attachEventListeners();
  });

  titre.addEventListener("click", () => {
    console.log("titre");
    const sorted = indivmedia.sort(compareByTitle)
    displayMedia(sorted)
    console.log("sorted objects: ", sorted)
    mediaItems = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by title: ",mediaItems)
    attachEventListeners();
  });

  document.getElementById('closeLB').addEventListener('click', closeLightBox);

} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


