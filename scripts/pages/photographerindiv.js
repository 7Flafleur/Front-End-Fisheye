//////////GLOBAL VARIABLES THAT NEED TO BE ACCESSED BY EVERY FUNCTION////////////

 let mediaItemsDOM=[];         //list of mediacards (html elemnts)

 let carouselList=[];

//get photographer Id from URL
const currentURLsearch = new URLSearchParams(window.location.search);
const urlid = (currentURLsearch.get("id"));
// console.log("URLId",urlid)

const pop = document.querySelector("#pop");
const date = document.querySelector("#date");
const titre = document.querySelector("#titre");

globallikes = 0;    //sum of LIKES on each mediacard



////////////////////////////////////////////////////////////////

//START INIT FUNCTION

async function init() {



  let actives=document.querySelectorAll("[data-active='true']")
  console.log(actives)


//////DATA RETRIEVAL
  /////////////////////////
  // Get data from JSON file
  const photographers = await getPhotographers();
  const person = findperson(photographers, urlid);
  displayHeader(person);
  insertNameForm(person)

  //ORIGINAL ARRAY OF OBJECTS FROM JSON FILE
  const indivJSONmediaObjects = await getMedia();
//DEEP COPY
indivmedia=JSON.parse(JSON.stringify(indivJSONmediaObjects))

  
////////////////////////////////////////////

//DISPLAY MEDIA FOR THE FIRST TIME

displayMedia(indivmedia);
mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));


//ADD LIKES TO MEDIA, DISPLAY PRICETAG
mediaItemsDOM.forEach(item => {
  globallikes += parseInt(item.dataset.likes);
});

console.log("global likes",globallikes)

//PREVENT SCROLLUP
mediaItemsDOM.forEach(a => {
  a.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();
});
});

//ADD PRICETAG AT BOTTOM OF PAGE

addPriceTag(person, globallikes);

//DISPLAY ORIGINAL index tracked on media

mediaItemsDOM.forEach((a,index) => {
a.dataset.indexBefore=index;
// console.log("Index before: ",a.dataset.indexBefore);
})

//EVENT LISTENER FOR SORTING FUNCTIONS

pop.addEventListener("click", async () => {
  console.log("pop");
  const sorted = indivmedia.sort(compareByPop)
  displayMedia(sorted);
    //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("sorted ob: ", sorted)
  console.log("New media Items sorted by pop: ",mediaItemsDOM)
  //PREVENT SCROLLUP
  mediaItemsDOM.forEach((a) => {
    a.addEventListener('click', function(event) {
      // Prevent default action
      event.preventDefault();
  
          // Remove 'data-active' attribute from all media items
          mediaItemsDOM.forEach((item) => {
            item.removeAttribute('data-active');
          });
      
          // Add 'data-active' attribute to the clicked item
          
      //EVENT LISTENER FOR CAROUSEL FUNCTION//
      let figure=event.currentTarget;
      figure.setAttribute('data-active', 'true');
  
    console.log("targeted element", figure)
    carouselList=getCarouselList(mediaItemsDOM, figure)
    console.log("New array for carousel ", carouselList)
    integrateCarousel(carouselList)

  
  });
  });

});

date.addEventListener("click", () => {
  console.log("date");
  const sorted = indivmedia.sort(compareByDate)
  displayMedia(sorted)
    //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("sorted objects: ", sorted)
  console.log("New media Items sorted by date: ",mediaItemsDOM)
  //PREVENT SCROLLUP
  mediaItemsDOM.forEach((a) => {
    a.addEventListener('click', function(event) {
      // Prevent default action
      event.preventDefault();
  
          // Remove 'data-active' attribute from all media items
          mediaItemsDOM.forEach((item) => {
            item.removeAttribute('data-active');
          });
      
          // Add 'data-active' attribute to the clicked item
          
      //EVENT LISTENER FOR CAROUSEL FUNCTION//
      let figure=event.currentTarget;
      figure.setAttribute('data-active', 'true');
  
    console.log("targeted element", figure)
    carouselList=getCarouselList(mediaItemsDOM, figure)
    console.log("New array for carousel ", carouselList)
    integrateCarousel(carouselList)
  
  });
  });
});

titre.addEventListener("click", () => {
  console.log("titre");
  const sorted = indivmedia.sort(compareByTitle)
  displayMedia(sorted)
  //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
  console.log("sorted objects: ", sorted)
  console.log("New media Items sorted by title: ",mediaItemsDOM)
  //PREVENT SCROLLUP
mediaItemsDOM.forEach((a) => {
  a.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();

        // Remove 'data-active' attribute from all media items
        mediaItemsDOM.forEach((item) => {
          item.removeAttribute('data-active');
        });
    
        // Add 'data-active' attribute to the clicked item
        
    //EVENT LISTENER FOR CAROUSEL FUNCTION//
    let figure=event.currentTarget;
    figure.setAttribute('data-active', 'true');

  console.log("targeted element", figure)
  carouselList=getCarouselList(mediaItemsDOM, figure)
  console.log("New array for carousel ", carouselList)
  integrateCarousel(carouselList)

});
});
});



//EVENT LISTENERS FOR CAROUSEL FUNCTION

carouselList=[]

mediaItemsDOM.forEach((a)=>{
  a.addEventListener("click", (event)=>
 {
      // Remove 'data-active' attribute from all media items
      mediaItemsDOM.forEach((item) => {
        item.removeAttribute('data-active');
      });
  
      // Add 'data-active' attribute to the clicked item
      
  let figure=event.currentTarget;
  figure.setAttribute('data-active', 'true');
  console.log("targeted element", figure)
  carouselList=getCarouselList(mediaItemsDOM, figure)
  console.log("New array for carousel ", carouselList)
  integrateCarousel(carouselList)
  
  }
  )
}
)


// Get the elements

const listbox=document.getElementById("listbox-id")

// Add hover event listeners to the pop element
listbox.addEventListener('mouseover', () => {
  titre.style.display = 'block';
  date.style.display = 'block';
});

listbox.addEventListener('mouseout', () => {
  titre.style.display = 'none';
  date.style.display = 'none';
});

//EVENT LISTENERS FOR KEY PRESS

window.addEventListener('keydown', function(event) {
  switch (event.key)  {
    case 'ArrowUp':
    console.log('Arrow Up ');
    break;
    case 'ArrowLeft':
      console.log("arrow left");
      break;
      case 'ArrowDown':
        console.log("arrox down");
        break;
      case 'ArrowRight':
        console.log("arrow right");
        break;
  }
});

var focusableMedialinks = Array.from(document.querySelectorAll('.medialink'));


focusableMedialinks.forEach(function(mediacard, index) {
  mediacard.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        // If there's a previous element, focus it
        if (index > 0) {
          focusableMedialinks[index - 1].focus();
          event.preventDefault();
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        // If there's a next element, focus it
        if (index < focusableMedialinks.length - 1) {
          focusableMedialinks[index + 1].focus();
          event.preventDefault();
        }
        break;
    }
  });
});





} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


