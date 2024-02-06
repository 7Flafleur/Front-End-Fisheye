
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
    // currentIndex=0;
    const lightBox = document.querySelector(".lightbox")
    const carousel = document.querySelector(".carousel")
    const mediaSection = document.querySelector(".media_section")
    lightBox.classList.remove("active");
    carousel.classList.remove("active")
  
    mediaSection.style.display = "flex";
    
  }


// as Eventhandler only
  // function clickedMediaFirst(){
  //   let clickedIndex = parseInt(this.dataset.index);
  //       let firstHalf = mediaItemsDOM.slice(0, clickedIndex);
  //   let secondHalf = mediaItemsDOM.slice(clickedIndex);
  //     //  new array of mediaItemsDOMwith clicked slide as first
  //   let reorganizedArray = secondHalf.concat(firstHalf);
  //   return reorganizedArray;
  // }
  
  

  
 
   function createCarouselButtons(){
   let nextButton = document.querySelector("#carousel-button-next")
    let prevButton = document.querySelector("#carousel-button-prev")
    nextButton.addEventListener("click", handleNextButtonClick);
    prevButton.addEventListener("click", handlePrevButtonClick);
  }
  
  

  function handleNextButtonClick() {
    console.log("Next button clicked")
  
    const carouselContainer = document.querySelector('#carousel-list');
    const carouselItems = Array.from(carouselContainer.children);  
  
    // Find the currently displayed media
    const activeMediaCard = carouselItems.find(item => parseInt(item.dataset.currentindex) === 0);
    const activeMedia = activeMediaCard.children[0]; // Assuming the media element is the first child
  
    console.log("index before: ", activeMedia.dataset.indexBefore);
    console.log("Next media is", parseInt(activeMediaCard.dataset.currentindex) + 1)
  
    const itemWidth = carouselItems[0].getBoundingClientRect().width;
    const newScrollPosition = itemWidth * currentIndex;
    carouselContainer.scrollLeft = newScrollPosition;
    currentIndex++;
    if(currentIndex === carouselItems.length){
      console.log("end of list, current index: ",currentIndex)
      currentIndex=0; //start at the beginning again
    }
  }

  // function handleNextButtonClick() {
  //   console.log("Nex button clicked")
    
  //   const activeMediaCard = document.querySelector('.mediacard[data-active="true"]');
  //   const activeMedia = activeMediaCard.children[0]; // Assuming the media element is the first child
  
  //   console.log("index: ", activeMedia.dataset.index);
  //   console.log("Next media is", parseInt(activeMedia.dataset.index) + 1)
  
  //   const carouselContainer = document.querySelector('#carousel-list');
  //   const carouselItems = Array.from(carouselContainer.children);  
  //   const itemWidth = carouselItems[0].getBoundingClientRect().width;
  //   const newScrollPosition = itemWidth * currentIndex;
  //   carouselContainer.scrollLeft = newScrollPosition;
  //   currentIndex++;
  //   if(currentIndex === carouselItems.length){
  //     console.log("end of list, current index: ",currentIndex)
  //     currentIndex=0; //start at the beginning again
  //   }
  // }
  
  function handlePrevButtonClick() {
    console.log("Previous button clicked")
  
    const activeMediaCard = document.querySelector('.mediacard[data-active="true"]');
    const activeMedia = activeMediaCard.children[0]; // Assuming the media element is the first child
    console.log("clicked media index: ", activeMedia.dataset.index);
    console.log("Previous media is ", parseInt(activeMedia.dataset.index) - 1)
  
    const carouselContainer = document.querySelector('#carousel-list');
    const carouselItems = Array.from(carouselContainer.children);  
    const itemWidth = carouselItems[0].getBoundingClientRect().width;
    currentIndex--;
    if(currentIndex < 0){
      console.log("beginning of list, current index: ",currentIndex)
      currentIndex = carouselItems.length-1; // Set currentIndex to last item
    }
    const newScrollPosition = itemWidth * currentIndex;
    carouselContainer.scrollLeft = newScrollPosition;
  }

  function setActiveData(item, index) {
    const mediacontainer = item;
    mediacontainer.dataset.active = "true";
    // Set the mediacontainer's data-currentindex attribute to the current index
    mediacontainer.dataset.currentindex = index;
  }
  
  function getCarouselList(mediaItemsDOM, mediacontainer) {
    let clickedIndex = parseInt(mediacontainer.dataset.currentindex);
  
    let firstHalf = mediaItemsDOM.slice(0, clickedIndex);
    let secondHalf = mediaItemsDOM.slice(clickedIndex);
  
    //new array of mediaItemsDOM with clicked slide as first
    let reorganizedArray = secondHalf.concat(firstHalf);
    currentIndex = 0;
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
            return -1; // do not sor
        } else {
            return 0; // do not sort
        }
    }
}


const compareByPop = compareDatasetValue("likes");
const compareByDate = compareDatasetValue("date");
const compareByTitle = compareDatasetValue("title");









function attachEventListeners() {
  mediaItemsDOM.forEach((item, index,currentarray) => {
    const media = item.children[0]; // img or video inside mediaitem container
    media.dataset.index = index;
    media.addEventListener("click", handleMediaClick);
  });

  // mediaItemsDOM.forEach((item, index) => {
  //   setActiveData(item, index);

  //   const media = item.children[0]; // img or video inside mediaitem container
  //   media.addEventListener("click", () => {
  //     console.log("media ", Number(media.dataset.index)+1, " in mediasection clicked");
  //     media.dataset.active = "true";

  //     let reorganizedArray = getSortedArray(media, mediaItems);

  //     integrateCarousel(reorganizedArray);
  //     console.log("showing mediaitem n°", media.dataset.index);
  //   });
  // });

  mediaItemsDOM.forEach((item, index) => {
    setActiveData(item, index);

  let media = item.children[0];         //img or video inside mediaitem container
  //
  media.addEventListener("click", () => {
    media.dataset.active = "true";
    console.log("media ", Number(media.dataset.index)+1, "in mediasection clicked, media n°",Number(media.dataset.index)+1,"active= ",media.dataset.active);

    document.querySelector('#carousel-button-next').addEventListener('click', () => moveCarousel('next'));
document.querySelector('#carousel-button-prev').addEventListener('click', () => moveCarousel('prev'));





  });
});


  mediaItemsDOM.forEach((item) => {
    const icon = item.querySelector(".fa-heart");

    const clickHandler = (event) => {
      event.preventDefault();
      globallikes++;
      console.log("Global", globallikes);
      addPriceTag(person, globallikes);
      icon.removeEventListener("click", clickHandler);
    };

    icon.addEventListener("click", clickHandler);
    //click on icon,not on mediaitem to like
  });
}



function moveCarousel(direction) {
  const carouselContainer = document.querySelector('#carousel-list');
  const carouselItems = Array.from(carouselContainer.children);  
  const itemWidth = carouselItems[0].getBoundingClientRect().width;

  switch (direction) {
    case 'next':
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        console.log("< lenght current index",currentIndex)
      }
      else if(currentIndex == carouselItems.length - 1){
        console.log("end of list")
        currentIndex=0;
      }
      break;
    case 'prev':
      if (currentIndex > 0) {
        currentIndex--;
        console.log("0 > current index",currentIndex)
      }
      else if(currentIndex==0){
        console.log("end of list")
        currentIndex=carouselItems.length - 1
      }
      break;
    default:
      console.log('Invalid direction');
  }

  carouselContainer.scrollLeft = currentIndex * itemWidth;  //
  console.log("moved by",currentIndex * itemWidth)
}