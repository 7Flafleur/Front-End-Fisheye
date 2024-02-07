

function integrateCarousel(mediaArray) {

    const carousel = document.querySelector(".carousel");
  // Check if there's already a ul with an id of carousel-list
  const existingCarouselList = document.querySelector("#carousel-list");
  if (existingCarouselList) {
    // If it exists, remove it
    // console.log("carousel exists!")
    existingCarouselList.remove();
  }
    const ul = document.createElement('ul');
    ul.id = "carousel-list";

    carousel.appendChild(ul);



 mediaArray.forEach((link,index) => {
    const li = document.createElement('li')
    li.classList.add("carouselItem")
    li.dataset.index = index;

    li.dataset.active = index === 0 ? 'true' : 'false';


    if (link.querySelector("img")) {
        const img = document.createElement('img')
        img.setAttribute("src", link.querySelector("img").src)
        img.dataset.index=index;
        li.appendChild(img)
        ul.appendChild(li)
        // console.log("img added ");
    }
    else if (link.querySelector("video")) {
        const video = document.createElement('video')
        video.setAttribute("src", link.querySelector("video").src)
        video.setAttribute("controls", true)
        video.dataset.index=index;
        li.appendChild(video)
        ul.appendChild(li)
        // console.log("video added ");

    }
    else {
        console.log("no valid media type")
    }



});

let prevButton =document.getElementById("carousel-button-prev")
let nextButton=document.getElementById("carousel-button-next")

nextButton.addEventListener("click", handleNextButtonClick)

prevButton.addEventListener("click", handlePrevButtonClick)



const closeButton=document.getElementById("closeLB")

closeButton.addEventListener("click", closeLightBox)

const lightBox = document.querySelector(".lightbox");

lightBox.focus();



    
    lightBox.classList.add("active");
    carousel.classList.add("active");




    const mediaSection = document.querySelector(".media_section");

    mediaSection.style.display = "none";

    


  

  

}


function handleNextButtonClick() {

   
    
    console.log("Next button clicked")
    let activeItem = document.querySelector(".carouselItem[data-active='true']");
    console.log("active item:",activeItem)
  
    // // Get all carousel items
    // let items = document.querySelectorAll(".carouselItem");
  
    // // Remove the data-active attribute from the current active item
    // items[currentIndex].dataset.active = 'false';
  
    // // Increment the current index, and loop back to 0 if it's past the end of the items
    // NewIndex = (currentIndex + 1) % items.length;
  
    // // Set the data-active attribute on the new active item
    // items[NewIndex].dataset.active = 'true';
  
    // // Scroll the new active item into view
    // items[NewIndex].scrollIntoView({ behavior: 'smooth' });

    // lightboxFactory(items[currentIndex])

  
  
    // // Update the lightbox to display the new active item

  }

  
  function handlePrevButtonClick() {
    console.log("Previous button clicked")
    let activeItem = document.querySelector(".carouselItem[data-active='true']");
    console.log("active item:",activeItem)
    let prevItem = activeItem.previousElementSibling;
    console.log("previous item:", prevItem);

  }


