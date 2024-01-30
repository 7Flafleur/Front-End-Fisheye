//get photographer Id from URL
const currentURLsearch =new URLSearchParams(window.location.search);
const urlid=(currentURLsearch.get("id"));


console.log("URLId",urlid)


////////////////HELPER FUNCTIONS/////////////////////

//get the .json data from server, return promise
async function fetchData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let photographers = data.photographers;
  return photographers;
}//end fetchData function


//get media
async function fetchMediaData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let media = data.media;
  return media;        ////////////array of JSON objects
}//end fetchMediaData function

  //await promise, return array
  async function getPhotographers() {
    let photographers = await fetchData();
    // console.log(photographers)
    return photographers;
  }//end getPhotographers function

//await promise, return array
async function getMedia() {
  let media = await fetchMediaData();         ///
  // console.log("media:",media)
  
  //array for photographer
  let indivmedia = new Array();

  //fill empty array for individual photographer
  media.forEach((object)=>{ 
    
    if(object.photographerId==urlid){
      indivmedia.push(object)
    }
  })
  // console.log("Indiv",indivmedia)
  return indivmedia;
}//end getMedia function


// take array, target MEDIA html section
async function displayMedia(indivmedia) {
  const mediaSection = document.querySelector(".media_section")
  mediaSection.innerHTML="";

  //use template for each media in array, pass each media to function  according to its type
  indivmedia.forEach((item) => {
    const mediaModel = MediaTemplate(item);  //returns video or image mediamodel
    const mediaCardDOM = mediaModel.getMediaCardDOM();  // function creates mediacard that has either video or img tag, according to object type
    mediaSection.appendChild(mediaCardDOM);

  });
} //end displayMedia function



////////////////////////////////////////////////////////////////

//START INIT FUNCTION

async function init() {
  // Get data from JSON file
  const photographers = await getPhotographers();
  const person = findperson(photographers, urlid);
  displayHeader(person);
  const indivmedia = await getMedia();
  // const headermedia = await getPhotoHeader();
  // displayHeader(headermedia);
  displayMedia(indivmedia);
  insertNameForm(person);
  
  const mediaItems=Array.from(document.querySelectorAll(".mediacard"));

  let globallikes = 0;

  console.log("Mediaitems is ",typeof(mediaItems))



for (i in mediaItems){
  globallikes+=parseInt(mediaItems[i].dataset.likes);
}


addPriceTag(person,globallikes);

console.log("Global",globallikes);



mediaItems.forEach((item)=>{
  const media = item.children[0];
  media.addEventListener("click", ()=>{
    console.log("clicked");
    integrateCarousel(mediaItems);
  });
});

mediaItems.forEach((item)=>{
  const media = item.children[0];
  media.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
      console.log("clicked");
      integrateCarousel(mediaItems);
    }
  });
});

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

const pop=document.querySelector("#pop");
const date=document.querySelector("#date");
const titre=document.querySelector("#titre");

pop.addEventListener("click",()=>{
  console.log("pop");
  const sorted =indivmedia.sort(compareByPop) 
  displayMedia(sorted)
  console.log(sorted)

});

date.addEventListener("click",()=>{
  console.log("date");
  const sorted =indivmedia.sort(compareByDate) 
  displayMedia(sorted)
  console.log(sorted)
});

titre.addEventListener("click",()=>{
  console.log("titre");
  const sorted =indivmedia.sort(compareByTitle) 
  displayMedia(sorted)
  console.log(sorted)
});


} //end init function



// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


