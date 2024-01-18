//get photographer Id from URL
const currentURLsearch =new URLSearchParams(window.location.search);
const urlid=(currentURLsearch.get("id"));
let PhotographerData = null;

console.log("Photographers:",photographers)

console.log("URLId",urlid)


//get the .json data from server, return promise

//use function from index.js script

async function fetchPhotoData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let photographers = data.photographers;
  console.log(photographers);
  return photographers;
}

//get data for header,await promise, return object

async function getPhotoHeader(){
let photographers = await fetchPhotoData();
 console.log("Data",photographers)

///object for photographer


//get JSON object for photographer from array of objects
photographers.forEach((object)=>{
  if(object.photographerId==urlid){
     PhotographerData = object;
     console.log("Match found!")
  }
})

return PhotographerData;
}

if (!PhotographerData) {
  console.log("No matching photographer found.");
  // Handle non-matching case, e.g., redirect, display an error, etc.
}


async function displayHeader(PhotographerData) {
  const headerSection = document.querySelector(".photograph-header")

  //model from media function
  
    const headerModel = photographerTemplate(PhotographerData);  //returns video or image mediamodel
    const headerCardDOM = headerModel.getUserHeaderDOM();  // function creates mediacard that has either video or img tag, according to object type
    headerSection.appendChild(headerCardDOM);
  ;
}

async function init() {
    // Get data from JSON file
    const indivmedia = await getMedia();
    const headermedia = await getPhotoHeader();
    displayHeader(headermedia);
    displayMedia(indivmedia);
  }
  
  // MAIN CODE Call the init function within an async context 
  (async () => {
    await init();
  })();
  