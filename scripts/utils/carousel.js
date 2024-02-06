

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

//   // Add event listeners to the buttons
//   nextButton.addEventListener('click', () => {
//     moveCarousel('next', carouselList);
//   });

//   prevButton.addEventListener('click', () => {
//     moveCarousel('prev', carouselList);
//   });



const closeButton=document.getElementById("closeLB")

closeButton.addEventListener("click", closeLightBox)

    const lightBox = document.querySelector(".lightbox");

    lightBox.focus();



    
    lightBox.classList.add("active");
    carousel.classList.add("active");




    const mediaSection = document.querySelector(".media_section");

    mediaSection.style.display = "none";

    


  

  

}

// function changeSlide(){

// }