
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
    media.forEach((object) => {
  
      if (object.photographerId == urlid) {
        indivmedia.push(object)
      }
    })
    // console.log("Indiv",indivmedia)
    return indivmedia;
  }//end getMedia function
  
  
  // take array, target MEDIA html section
  async function displayMedia(indivmedia) {
    const mediaSection = document.querySelector(".media_section")
    mediaSection.innerHTML = "";
  
    //use template for each media in array, pass each media to function  according to its type
    indivmedia.forEach((item) => {
      const mediaModel = MediaTemplate(item);  //returns video or image mediamodel
      const mediaCardDOM = mediaModel.getMediaCardDOM();  // function creates mediacard that has either video or img tag, according to object type
      mediaSection.appendChild(mediaCardDOM);
  
    });
  } //end displayMedia function
  
  function closeLightBox() {
    const lightBox = document.querySelector(".lightbox")
    const carousel = document.querySelector(".carousel")
    const mediaSection = document.querySelector(".media_section")
    lightBox.classList.remove("active");
    carousel.classList.remove("active")
  
    mediaSection.style.display = "flex";
  }
  
  function handleMediaClick() {
    console.log("media ", this.dataset.index, "clicked");
    this.dataset.active = "true";
  
    let clickedIndex = parseInt(this.dataset.index);
  
    let firstHalf = mediaItems.slice(0, clickedIndex);
    let secondHalf = mediaItems.slice(clickedIndex);
  
    //new array of mediaitems with clicked slide as first
    let reorganizedArray = secondHalf.concat(firstHalf);
  
    // Generate a carousel
    integrateCarousel(reorganizedArray);
    console.log("showing mediaitem n°", this.dataset.index)
  
    let nextButton = document.querySelector("#carousel-button-next")
    let prevButton = document.querySelector("#carousel-button-prev")
  
    nextButton.addEventListener("click", handleNextButtonClick);
    prevButton.addEventListener("click", handlePrevButtonClick);
  }
  
  function handleNextButtonClick() {
    const activeMediaCard = document.querySelector('.mediacard[data-active="true"]');
    const activeMedia = activeMediaCard.children[0]; // Assuming the media element is the first child
    console.log("media active: ", activeMedia.dataset.active);
    console.log("index: ", activeMedia.dataset.index);
  }
  
  function handlePrevButtonClick() {
    const activeMediaCard = document.querySelector('.mediacard[data-active="true"]');
    const activeMedia = activeMediaCard.children[0]; // Assuming the media element is the first child
    console.log(" media active: ", activeMedia.dataset.active);
    console.log("index: ", activeMedia.dataset.index);
  }
  

  function setActiveData(item, index) {
    item.dataset.active = "true";
    const media = item.children[0]; // img or video inside mediaitem container
    media.dataset.index = index;
  }


  function getSortedArray(media, mediaItems) {
    let clickedIndex = parseInt(media.dataset.index);
  
    let firstHalf = mediaItems.slice(0, clickedIndex);
    let secondHalf = mediaItems.slice(clickedIndex);
  
    //new array of mediaitems with clicked slide as first
    let reorganizedArray = secondHalf.concat(firstHalf);
    
    return reorganizedArray;
  }

  //SORTING FUNCTIONS

function compareDatasetValue(value) {
    //compare two values in an array 
    return function(a, b) {
        //values are object properties
        if (a[value] > b[value]) {
            return 1; //return value 1 indicates that sort needs to be done, switch indexes of elements
        } else if (a[value] < b[value]) {
            return -1; // do not sor
        } else {
            return 0; // do not sort
        }
    }
}


const compareByPop = compareDatasetValue("likes");
const compareByDate = compareDatasetValue("date");
const compareByTitle = compareDatasetValue("title");

