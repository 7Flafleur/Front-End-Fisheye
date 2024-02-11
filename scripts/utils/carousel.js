

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

const buttons = document.querySelectorAll("#carousel-button-prev, #carousel-button-next");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Button clicked")
    const offset = button.id === "carousel-button-next" ? 1 : -1;
    const slides = document.querySelectorAll(".carouselItem");
    console.log("slides", typeof(slides))

    const slidesArray = Array.from(slides);
    const activeSlide = slidesArray.find(slide => slide.dataset.active === 'true');
    console.log("active slide: ",activeSlide)
    let newIndex = slidesArray.indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slidesArray.length - 1;
    if (newIndex >= slidesArray.length) newIndex = 0;

    slidesArray[newIndex].dataset.active = 'true';
    delete activeSlide.dataset.active;
  });
});

buttons.forEach(button =>
  button.addEventListener("keydonw", triggerClickOnEnterOrSpace)
)



const closeButton=document.getElementById("closeLB")

closeButton.addEventListener("click", closeLightBox)

const lightBox = document.querySelector(".lightbox");

lightBox.focus();



    
    lightBox.classList.add("active");
    carousel.classList.add("active");




    const mediaSection = document.querySelector(".media_section");

    mediaSection.style.display = "none";

    


  

  

}


function triggerClickOnEnterOrSpace(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.target.click();
  }
}

