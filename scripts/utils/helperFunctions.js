
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
    let indivJSONmediaObjects = new Array();
  
    //fill empty array for individual photographer
    media.forEach((object) => {
  
      if (object.photographerId == urlid) {
        indivJSONmediaObjects.push(object)
      }
    })
    // console.log("Indiv",indivJSONmediaObjects)
    return indivJSONmediaObjects;
  }//end getMedia function
  
  
  // take array, target MEDIA html section,return promise
   function displayMedia(indivJSONmediaObjects) {
    
      const mediaSection = document.querySelector(".media_section")
      mediaSection.innerHTML = "";
  
      indivJSONmediaObjects.forEach((item,index) => {
        const mediaModel = MediaTemplate(item);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
      
        // Set data-index-before on the a element
        mediaCardDOM.dataset.indexBefore = index;
      
        // Set data-new-index on the a element
        // Initialize it to the same value as data-index-before
        mediaCardDOM.dataset.newIndex = index;
      
        mediaSection.appendChild(mediaCardDOM);
      });
  
    
  }
  
  


  function closeLightBox() {
    let carouselItems = document.querySelectorAll(".carouselItem");
    carouselItems.forEach(item => {
      item.dataset.active = 'false';
    });
    const lightBox = document.querySelector(".lightbox")
    const carousel = document.querySelector(".carousel")
    const mediaSection = document.querySelector(".media_section")
    lightBox.classList.remove("active");
    carousel.classList.remove("active");

    isCarouselActive = false;
  
    mediaSection.style.display = "flex";
    
  }


  

  
  function getCarouselList(mediaItemsDOM, mediacontainer) {
    let clickedIndex = mediaItemsDOM.indexOf(mediacontainer);
    let firstHalf = mediaItemsDOM.slice(0, clickedIndex);
    let secondHalf = mediaItemsDOM.slice(clickedIndex);

  
    //new array of mediaItemsDOM with clicked slide as first
    let reorganizedArray = secondHalf.concat(firstHalf);

    reorganizedArray.forEach((item, index) => {
      // Set the mediacontainer's data-currentindex attribute to the new index
      item.dataset.currentindex = index;
    });
  
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
            return -1; // do not sort
        } else {
            return 0; // do not sort
        }
    }
}


const compareByPop = compareDatasetValue("likes");
const compareByDate = compareDatasetValue("date");
const compareByTitle = compareDatasetValue("title");


function triggerClickOnEnterOrSpace(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    event.target.click();
  }
}









