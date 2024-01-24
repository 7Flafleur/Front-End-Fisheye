//get photographer Id from URL
const currentURLsearch =new URLSearchParams(window.location.search);
const urlid=(currentURLsearch.get("id"));




console.log("URLId",urlid)


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
    // console.log(photographers)
    return photographers;

  } //end getPhotographers function

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

  //use template for each media in array, pass each media to function  according to its type
  indivmedia.forEach((item) => {
    const mediaModel = MediaTemplate(item);  //returns video or image mediamodel
    const mediaCardDOM = mediaModel.getMediaCardDOM();  // function creates mediacard that has either video or img tag, according to object type
    mediaSection.appendChild(mediaCardDOM);

  });

} //end displayMedia function





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
  addPriceTag(person);

  const mediaItems=document.querySelectorAll(".mediacard");
  console.log("Nodelist:",mediaItems);

  // const mediaSection=document.querySelector(".media_section");

  // const carousel=createCarousel(mediaItems);
  // mediaSection.appendChild(carousel);








//   //add lightbox


//   const lightbox=document.createElement("div");
// lightbox.id="lightbox";
// // set aria role 
// lightbox.setAttribute("role","dialog");

// document.body.appendChild(lightbox);

//   const mediaItems=document.querySelectorAll(".media_section figure");
//   mediaItems.forEach((item)=>{
//   lightboxFactory(item);
//   })


} //end init function














// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


