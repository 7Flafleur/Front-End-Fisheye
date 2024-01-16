
const currentURLsearch =new URLSearchParams(window.location.search);
const urlid=(currentURLsearch.get("id"));

console.log("URLId",urlid)


//get the .json data from server, return promise
async function fetchData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let media = data.media;
  return media;
}

//await promise, return array
async function getMedia() {
  let media = await fetchData();
  console.log("media:",media)
  
  let indivmedia = new Array();
  media.forEach((object)=>{ 
    
    if(object.photographerId==urlid){
      indivmedia.push(object)
    }
  })
  console.log("Indiv",indivmedia)
  return indivmedia;
}

// sort overall array , create array with photographer's media




// take array, target html section
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

// Call the init function within an async context
(async () => {
  await init();
})();
