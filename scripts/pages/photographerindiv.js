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


if (pop === document.activeElement) {
  console.log('#pop has focus');
} 
 





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

pop.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    event.preventDefault(); // Prevent the default action of the Space bar
    let nextElement = event.target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    } 
  }
});







//EVENT LISTENERS FOR KEY PRESS

var focusableMedialinks = Array.from(document.querySelectorAll('.medialink'));


focusableMedialinks.forEach(function(mediacard, index) {
  mediacard.addEventListener('keydown', function(event) {
    switch (event.key) {
      
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

//navigate carsouel on arrow key press

document.addEventListener('keydown', (event) => {
  // If the carousel is not active, do nothing
  if (!isCarouselActive) return;
  let offset;

  switch(event.key){
    case "ArrowRight":
      offset=1;
      break;
    case "ArrowLeft":
      offset=-1;
      break;
    default:
      
    return;
}

  const slides = document.querySelectorAll(".carouselItem");
  // console.log("slides", typeof(slides))

  const slidesArray = Array.from(slides);
  const activeSlide = slidesArray.find(slide => slide.dataset.active === 'true');
  // console.log("active slide: ",activeSlide)
  let newIndex = slidesArray.indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slidesArray.length - 1;
  if (newIndex >= slidesArray.length) newIndex = 0;

  slidesArray[newIndex].dataset.active = 'true';
  delete activeSlide.dataset.active;

});

//ALL EVENTS CAN BE TRIGGERED BY KEYS AS WELL

function triggerClickOnEnterOrSpace(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.target.click();
  }
}

//CLOASE MODALS ON ESC PRESS

document.addEventListener('keydown', (event) => {
  // If the Escape key is pressed
  if (event.key === 'Escape') {
    console.log("Escape key pressed")
    const modal = document.getElementById("contact_modal");
    // If the modal is open
    if (modal.getAttribute("data-active")==="true") {
      // Close the modal
      closeModal();
    }
  }
});

document.addEventListener('keydown', (event) => {
  // If the Escape key is pressed
  if (event.key === 'Escape') {
    console.log("Escape key pressed")
    const lightbox = document.querySelector(".lightbox");
    // If the modal is open
    if (lightbox.classList.contains('active')) {
      // Close the lightbox
      closeLightox();
    }
  }
});

//8 make sorting listbox accessible on keypress

const children = listbox.querySelectorAll(':scope > *');

children.forEach(child => {
  child.addEventListener('focus', () => {
    listbox.classList.add('child-focused');
  });
  child.addEventListener('blur', () => {
    listbox.classList.remove('child-focused');
  });
});


 
  



//check for active element

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    console.log(document.activeElement);
  }
});


} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


