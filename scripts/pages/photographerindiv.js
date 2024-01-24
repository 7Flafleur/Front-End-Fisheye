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
  // console.log("Indiv",indivmedia)
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
  insertNameForm(person);
  addPriceTag(person);

  const lightbox=document.createElement("div");
lightbox.id="lightbox";
// set aria role 
lightbox.setAttribute("role","dialog");

document.body.appendChild(lightbox);

  const mediaItems=document.querySelectorAll(".media_section figure");
  mediaItems.forEach((item)=>{
  lightboxFactory(item);
  })


} 

//create lightbox element



function lightboxFactory(item) {

  //create lightbox el


  // check if item is img or video, call helper function

  if(item.querySelector('img')){
    imgLightbox(item.querySelector('img'));
  }
  else if(item.querySelector('video')){
    videoLightbox(item.querySelector('video'));
  }

  //helper constructor functions for lightbox

//lightbox for images
function imgLightbox(picture){// loop through all images in mediasection, add event listener to each
    picture.addEventListener("click",()=>{
      //on image click, add active class to lightbox
      lightbox.classList.add("active");
      //create img element, set src to clicked image
      const img=document.createElement("img");
      img.src=picture.src;
      //if lightbox has child, remove it,so no double images
      while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
      }
      //append img to display to lightbox
      lightbox.appendChild(img);
    })
  }
  
  //lightbox for movies
  function videoLightbox(movie){
    movie.addEventListener("click",(event)=>{
      event.preventDefault();
      //on video click, add active class to lightbox
      lightbox.classList.add("active");
      //create video element, set src to clicked video
      const video=document.createElement("video");
      let source = movie.querySelector('source');
      let src = source ? source.getAttribute('src') : movie.src;
      video.src=src;
      video.controls=true;
      //if lightbox has child, remove it,so no double videos
      while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
      }
      //append video to display to lightbox
      lightbox.appendChild(video);
    })


    lightbox.addEventListener("click",e=>{
      //if click is not on lightbox, return
      if(e.target!==e.currentTarget) return;
      //at click on lightbox outside img, remove active class => hide lightbox;
      lightbox.classList.remove("active");
    })


  }
  







}








// const lightbox=document.createElement("div");
// lightbox.id="lightbox";
// // set aria role 
// lightbox.setAttribute("role","dialog");

// document.body.appendChild(lightbox);

// // loop through all images in mediasection, add event listener to each
// const pictures=document.querySelectorAll(".media_section img");
// pictures.forEach((picture)=>{
//   picture.addEventListener("click",e=>{
//     //on image click, add active class to lightbox
//     lightbox.classList.add("active");
//     //create img element, set src to clicked image
//     const img=document.createElement("img");
//     img.src=picture.src;
//     //if lightbox has child, remove it,so no double images
//     while(lightbox.firstChild){
//       lightbox.removeChild(lightbox.firstChild);
//     }
//     //append img to display to lightbox
//     lightbox.appendChild(img);
//   })
// })







// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


