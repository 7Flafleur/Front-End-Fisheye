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
  
  const sorted = indivmedia.sort(compareByPop)
  displayMedia(sorted);
    //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));

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
  
    
    carouselList=getCarouselList(mediaItemsDOM, figure)
    
    integrateCarousel(carouselList)

  
  });
  });

});

pop.addEventListener("keydown", triggerClickOnEnterOrSpace)

date.addEventListener("click", () => {
  const sorted = indivmedia.sort(compareByDate)
  displayMedia(sorted)
    //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
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
  
    carouselList=getCarouselList(mediaItemsDOM, figure)
    integrateCarousel(carouselList)
  
  });
  });
});

date.addEventListener('keydown', triggerClickOnEnterOrSpace);


titre.addEventListener("click", () => {
  const sorted = indivmedia.sort(compareByTitle)
  displayMedia(sorted)
  //UPDATE array of media items for later use
  mediaItemsDOM = Array.from(document.querySelectorAll(".mediacard"));
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

  carouselList=getCarouselList(mediaItemsDOM, figure)
  integrateCarousel(carouselList)

});
});
});

titre.addEventListener('keydown', triggerClickOnEnterOrSpace);

//ACESSIBILITY 







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
  carouselList=getCarouselList(mediaItemsDOM, figure)
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
        else{
          focusableMedialinks[focusableMedialinks.length-1].focus()
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        // If there's a next element, focus it
        if (index < focusableMedialinks.length - 1) {
          focusableMedialinks[index + 1].focus();
          event.preventDefault();
        }
        else{
          focusableMedialinks[0].focus()
        }
        break;
    }
  });
});

//ALL EVENTS CAN BE TRIGGERED BY KEYS AS WELL

function triggerClickOnEnterOrSpace(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.target.click();
  }
}






} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


