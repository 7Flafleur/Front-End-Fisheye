//get photographer Id from URL
const currentURLsearch =new URLSearchParams(window.location.search);
const urlid=(currentURLsearch.get("id"));

console.log("URLId",urlid)


//get the .json data from server, return promise

//use function from index.js script

async function fetchData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let photographers = data.photographers;
  return photographers;
}

//get data for header

async function getPhotoHeader(){
let data = await fetchData();
console.log("Data",data)

data.forEach((object)=>{
  
  let PhotographerData={}
  if(object.photographerId==urlid){
     PhotographerData = object;
  }  
})
return PhotographerData;
}

async function displayHeader(indivmedia) {
  const headerSection = document.querySelector(".phtotograph-header")

  //use template for each media in array, pass each media to function  according to its type
  ((item) => {
    const headerModel = MediaTemplate(item);  //returns video or image mediamodel
    const mediaCardDOM = mediaModel.getUserHeaderDOM();  // function creates mediacard that has either video or img tag, according to object type
    mediaSection.appendChild(mediaCardDOM);
  });
}


//get media
async function fetchMediaData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let media = data.media;
  return media;
}

//await promise, return array
async function getMedia() {
  let media = await fetchMediaData();
  console.log("media:",media)
  
  //get array for individual photographer
  let indivmedia = new Array();
  media.forEach((object)=>{ 
    
    if(object.photographerId==urlid){
      indivmedia.push(object)
    }
  })
  console.log("Indiv",indivmedia)
  return indivmedia;
}


// take array, target MEDIA html section
async function displayMedia(indivmedia) {
  const mediaSection = document.querySelector(".media_section")

  //use template for each media in array, pass each media to function  according to its type
  indivmedia.forEach((item) => {
    const mediaModel = MediaTemplate(item);  //returns video or image mediamodel
    const mediaCardDOM = mediaModel.getMediaCardDOM();  // function creates mediacard that has either video or img tag, according to object type
    mediaSection.appendChild(mediaCardDOM);
  });
}





async function init() {
  // Get data from JSON file
  const indivmedia = await getMedia();
  displayMedia(indivmedia);
}

// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();
