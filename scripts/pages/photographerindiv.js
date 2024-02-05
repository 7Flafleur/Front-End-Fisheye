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

  


  // console.log("mediaItemsDOM is ",typeof(mediaItemsDOM))



  for (i in mediaItemsDOM) {
    globallikes += parseInt(mediaItemsDOM[i].dataset.likes);
    mediaItemsDOM[i].setAttribute("data-active", "")

  }


  addPriceTag(person, globallikes);


  //EVENT LISTENERS///
  // ...
  
  // mediaItemsDOM.forEach((item, index) => {
  //   const media = item.children[0]; // img or video inside mediaitem container
  //   media.dataset.index = index;
  //   media.addEventListener("click", handleMediaClick);
  // });

  mediaItemsDOM.forEach((item, index,array) => { 
    const mediacontainer = item;
    const media = item.children[0]; // img or video inside mediaitem container
    media.dataset.index = index;
    mediacontainer.dataset.index = index; // Set mediacontainer index to the same as media
    
    media.addEventListener("click", () => {
      currentIndex = index;
      mediacontainer.dataset.active = "true";
      media.setAttribute("data-active", "true");
      console.log("Active mediacard index:",mediacontainer.dataset.index," status:", mediacontainer.dataset.active);
      console.log("Current Index: ",currentIndex)
    });
  });
  






 // end of ForEach mediaItem



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
      const mediacontainer = item;
      const media = item.children[0]; // img or video inside mediaitem container
      media.dataset.index = index;
      mediacontainer.dataset.index = index; // Set mediacontainer index to the same as media
      
      media.addEventListener("click", () => {
        currentIndex = index;
        mediacontainer.dataset.active = "true";
        media.setAttribute("data-active", "true");
        console.log("Active mediacard index:",mediacontainer.dataset.index," status:", mediacontainer.dataset.active);
        console.log("Current Index: ",currentIndex)
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
      const mediacontainer = item;
      const media = item.children[0]; // img or video inside mediaitem container
      media.dataset.index = index;
      mediacontainer.dataset.index = index; // Set mediacontainer index to the same as media
      
      media.addEventListener("click", () => {
        currentIndex = index;
        mediacontainer.dataset.active = "true";
        media.setAttribute("data-active", "true");
        console.log("Active mediacard index:",mediacontainer.dataset.index," status:", mediacontainer.dataset.active);
        console.log("Current Index: ",currentIndex)
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
      const mediacontainer = item;
      const media = item.children[0]; // img or video inside mediaitem container
      media.dataset.index = index;
      mediacontainer.dataset.index = index; // Set mediacontainer index to the same as media
      
      media.addEventListener("click", () => {
        currentIndex = index;
        mediacontainer.dataset.active = "true";
        media.setAttribute("data-active", "true");
        console.log("Active mediacard index:",mediacontainer.dataset.index," status:", mediacontainer.dataset.active);
        console.log("Current Index: ",currentIndex)
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


