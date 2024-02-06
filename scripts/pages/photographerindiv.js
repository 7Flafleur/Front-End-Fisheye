//////////GLOBAL VARIABLES THAT NEED TO BE ACCESSED BY EVERY FUNCTION////////////

 let mediaItemsDOM=[];         //list of mediacards (html elemnts)

 let indivJSONmediaObjects=[]     //list of objects, will only be assigned once as a deep copy of JSON DATA


//get photographer Id from URL
const currentURLsearch = new URLSearchParams(window.location.search);
const urlid = (currentURLsearch.get("id"));
// console.log("URLId",urlid)

const pop = document.querySelector("#pop");
const date = document.querySelector("#date");
const titre = document.querySelector("#titre");

let currentIndex;       //Index for carousel function
globallikes = 0;    //sum of LIKES on each mediacard


////////////////////////////////////////////////////////////////

//START INIT FUNCTION

async function init() {

//////DATA RETRIEVAL
  /////////////////////////
  // Get data from JSON file
  const photographers = await getPhotographers();
  const person = findperson(photographers, urlid);
  displayHeader(person);

  //ORIGINAL ARRAY OF OBJECTS FROM JSON FILE
  const indivJSONmediaObjects = await getMedia();
//DEEP COPY
indivmedia=JSON.parse(JSON.stringify(indivJSONmediaObjects))

  
////////////////////////////////////////////

//DISPLAY MEDIA FOR THE FIRST TIME

displayMedia(indivmedia);
mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));


//ADD LIKES TO MEDIA, DISPLAY PRICETAG
mediaItemsDOM.forEach(item => {
  globallikes += parseInt(item.dataset.likes);
});

console.log("global likes",globallikes)

//PREVENT SCROLLUP
mediaItemsDOM.forEach(a => {
  a.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();
});
});


addPriceTag(person, globallikes);

//DISPLAY ORIGINAL index tracked on media

mediaItemsDOM.forEach((a,index) => {
a.dataset.indexBefore=index;
// console.log("Index before: ",a.dataset.indexBefore);
})

//EVENT LISTENER FOR SORTING FUNCTIONS

pop.addEventListener("click", async () => {
  console.log("pop");
  const sorted = indivmedia.sort(compareByPop)
  displayMedia(sorted);
    //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("sorted ob: ", sorted)
  console.log("New media Items sorted by pop: ",mediaItemsDOM)
  //PREVENT SCROLLUP
mediaItemsDOM.forEach(a => {
  a.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();
});
});



});

date.addEventListener("click", () => {
  console.log("date");
  const sorted = indivmedia.sort(compareByDate)
  displayMedia(sorted)
    //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("sorted objects: ", sorted)
  console.log("New media Items sorted by date: ",mediaItemsDOM)
  //PREVENT SCROLLUP
mediaItemsDOM.forEach(a => {
  a.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();
});
});

});

titre.addEventListener("click", () => {
  console.log("titre");
  const sorted = indivmedia.sort(compareByTitle)
  displayMedia(sorted)
  //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("sorted objects: ", sorted)
  console.log("New media Items sorted by title: ",mediaItemsDOM)
  //PREVENT SCROLLUP
mediaItemsDOM.forEach((a) => {
  a.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();
});
});
});



//EVENT LISTENERS FOR CAROUSEL FUNCTION

carouselList=[]

mediaItemsDOM.forEach((a)=>{
  a.addEventListener("click", (event)=>
 {let figure=event.currentTarget;
  console.log("targeted element", figure)
  carouselList=getCarouselList(mediaItemsDOM, figure)
  console.log("New array for carousel ", carouselList)
  integrateCarousel(carouselList)
  }
  )
}
)








} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


