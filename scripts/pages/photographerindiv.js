//get photographer Id from URL
const currentURLsearch =new URLSearchParams(window.location.search);
const urlid=(currentURLsearch.get("id"));




console.log("URLId",urlid)


//get the .json data from server, return promise

//use function from index.js script

// async function fetchPhotoData() {
//   let response = await fetch('./data/photographers.json');
//   let data = await response.json();
//   let photographers = data.photographers;
//   console.log(photographers);
//   return photographers;
// }

// //get data for header,await promise, return object

// async function getPhotoHeader(){
// let photographers = await fetchPhotoData();
//  console.log("Data",photographers)

// ///object for photographer


// //get JSON object for photographer from array of objects
// photographers.forEach((object)=>{
//   if(object.photographerId==urlid){
//      PhotographerData = object;
//      console.log("Match found!")
//   }
// })

// return PhotographerData;
// }

// if (!PhotographerData) {
//   console.log("No matching photographer found.");
//   // Handle non-matching case, e.g., redirect, display an error, etc.
// }


// async function displayHeader(PhotographerData) {
//   const headerSection = document.querySelector(".photograph-header")

//   //model from media function
  
//     const headerModel = photographerTemplate(PhotographerData);  //returns video or image mediamodel
//     const headerCardDOM = headerModel.getUserHeaderDOM();  // function creates mediacard that has either video or img tag, according to object type
//     headerSection.appendChild(headerCardDOM);
//   ;
// }





////////////////
//get the .json data from server, return promise
async function fetchData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let photographers = data.photographers;
  return photographers;
}


//get media
async function fetchMediaData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let media = data.media;
  return media;        ////////////array of JSON objects


}

  //await promise, return array
  async function getPhotographers() {
    let photographers = await fetchData();
    console.log(photographers)
    return photographers;
  }

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
  const photographers = await getPhotographers();
  const person = findperson(photographers, urlid);
  displayHeader(person);
  const indivmedia = await getMedia();
  // const headermedia = await getPhotoHeader();
  // displayHeader(headermedia);
  displayMedia(indivmedia);
}

// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();
