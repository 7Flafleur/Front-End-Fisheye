//////////GLOBAL VARIABLES THAT NEED TO BE ACCESSED BY EVERY FUNCTION////////////

 let mediaItemsDOM=[];         //list of html elemnts

 let indivJSONmediaObjects=[]     //list of objects


//get photographer Id from URL
const currentURLsearch = new URLSearchParams(window.location.search);
const urlid = (currentURLsearch.get("id"));
// console.log("URLId",urlid)

const pop = document.querySelector("#pop");
const date = document.querySelector("#date");
const titre = document.querySelector("#titre");

let currentIndex = 0;       //Index for carousel function


  let globallikes = 0; 


////////////////////////////////////////////////////////////////

//START INIT FUNCTION

async function init() {

  // Get data from JSON file
  const photographers = await getPhotographers();
  const person = findperson(photographers, urlid);
  displayHeader(person);
  indivJSONmediaObjects = await getMedia();
  displayMedia(indivJSONmediaObjects);


  // Initialize mediaItemsDOM after displayMedia is called
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("Global media DOM elements start",mediaItemsDOM)
  insertNameForm(person);
  //add up individual likes, set data-active attribute to empty
  for (i in mediaItemsDOM) {
    globallikes += parseInt(mediaItemsDOM[i].dataset.likes);
    mediaItemsDOM[i].setAttribute("data-active", "")
  }

//create HTML 
  addPriceTag(person, globallikes);

console.log("CurrentIndex before: ",currentIndex)

  //EVENT HANDLER FOR CAROUSEL AND LIGHTBOX


  mediaItemsDOM.forEach((item, index) => { 
    const media = item.children[0]; // img or video inside mediaitem container
    //EVENT LISTENERS for carousel function and testing logs
    media.addEventListener("click", () => {
      mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));

      currentIndex = index;
      setActiveData(item, index, currentIndex);
      console.log("Active mediacard index in DOM list:", item.dataset.index, " status:", item.dataset.active);
      console.log("Current Index: ", currentIndex);
      let reorganizedArray = getCarouselList(mediaItemsDOM, media);

      console.log("Reorganized array,", reorganizedArray);
      let clickedMediaIndex = reorganizedArray.indexOf(item);
      console.log("Index of clicked media in reorganized array:", clickedMediaIndex);
      
      integrateCarousel(reorganizedArray);
      

    });
   

  

  });
  
//////////////////////////////////////////////////////////








// EVENT HANDLER FOR LIKES
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
  });

 


  pop.addEventListener("click", () => {
    console.log("pop");
    const sorted = indivJSONmediaObjects.sort(compareByPop)
    displayMedia(sorted)
    console.log("sorted indivmediaobjects: ", sorted)
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by pop: ",mediaItemsDOM)
    //attach same eventlisteners as onload
    mediaItemsDOM.forEach((item, index) => { 
      const media = item.children[0]; // img or video inside mediaitem container
      //EVENT LISTENERS for carousel function and testing logs
      media.addEventListener("click", () => {
        currentIndex = index;
        setActiveData(item, index, currentIndex);
        console.log("Active mediacard index:", item.dataset.index, " status:", item.dataset.active);
        console.log("Current Index: ", currentIndex);
        let reorganizedArray = getCarouselList(mediaItemsDOM, media);

        console.log("Reorganized array,", reorganizedArray);
        let clickedMediaIndex = reorganizedArray.indexOf(item);
        console.log("Index of clicked media in reorganized array:", clickedMediaIndex);
        
        integrateCarousel(reorganizedArray);
  
      });
    });
    

  });

  date.addEventListener("click", () => {
    console.log("date");
    const sorted = indivJSONmediaObjects.sort(compareByDate)
    displayMedia(sorted)
    console.log("sorted indivmediaobjects: ", sorted)
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by date: ",mediaItemsDOM)

    mediaItemsDOM.forEach((item, index) => { 
      const media = item.children[0]; // img or video inside mediaitem container
      //EVENT LISTENERS for carousel function and testing logs
      media.addEventListener("click", () => {
        currentIndex = index;
        setActiveData(item, index, currentIndex);
        console.log("Active mediacard index:", item.dataset.index, " status:", item.dataset.active);
        console.log("Current Index: ", currentIndex);

        let reorganizedArray = getCarouselList(mediaItemsDOM, media);

        console.log("Reorganized array,", reorganizedArray);
        let clickedMediaIndex = reorganizedArray.indexOf(item);
        console.log("Index of clicked media in reorganized array:", clickedMediaIndex);
        
        integrateCarousel(reorganizedArray);
  
      });
    });
    
  });

  titre.addEventListener("click", () => {
    console.log("titre");
    const sorted = indivJSONmediaObjects.sort(compareByTitle)
    displayMedia(sorted)
    console.log("sorted indivmediaobjects: ", sorted)
    mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
    console.log("New media Items sorted by title: ",mediaItemsDOM)

    mediaItemsDOM.forEach((item, index) => { 
      const media = item.children[0]; // img or video inside mediaitem container
      //EVENT LISTENERS for carousel function and testing logs
      media.addEventListener("click", () => {
        currentIndex = index;
        setActiveData(item, index, currentIndex);
        console.log("Active mediacard index:", item.dataset.index, " status:", item.dataset.active);
        console.log("Current Index: ", currentIndex);

        let reorganizedArray = getCarouselList(mediaItemsDOM, media);

        console.log("Reorganized array,", reorganizedArray);
        let clickedMediaIndex = reorganizedArray.indexOf(item);
        console.log("Index of clicked media in reorganized array:", clickedMediaIndex);
        
        integrateCarousel(reorganizedArray);
  
      });
    });

    
    
  });

  document.getElementById('closeLB').addEventListener('click', closeLightBox);

  //end of EVENTLISTENERS////////////

} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


