

function integrateCarousel(mediaItemsDOM) {

    const carousel = document.querySelector(".carousel");
  // Check if there's already a ul with an id of carousel-list
  const existingCarouselList = document.querySelector("#carousel-list");
  if (existingCarouselList) {
    // If it exists, remove it
    console.log("carousel exists!")
    existingCarouselList.remove();
  }
    const ul = document.createElement('ul');
    ul.id = "carousel-list";

    carousel.appendChild(ul);



 mediaItemsDOM.forEach((link,index) => {
    const li = document.createElement('li')
    li.classList.add("carouselItem")
    li.dataset.index = index;
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

if(!prevButton)
{const prevButton = document.createElement("button");
prevButton.id = "carousel-button-prev";
prevButton.classList.add("carousel-button")
const iconleft=document.createElement("i")
iconleft.classList.add("fa-solid")
iconleft.classList.add("fa-chevron-left")
iconleft.setAttribute("style","color: #901c1c" )
prevButton.appendChild(iconleft)
// prevButton.textContent = "Previous";
carousel.appendChild(prevButton);}

let nextButton=document.getElementById("carousel-button-next")

if(!nextButton)
{const nextButton = document.createElement("button");
nextButton.id = "carousel-button-next";
nextButton.classList.add("carousel-button")
const iconright=document.createElement("i")
iconright.classList.add("fa-solid")
iconright.classList.add("fa-chevron-right")
iconright.setAttribute("style","color: #901c1c" )
nextButton.appendChild(iconright)
// nextButton.textContent = "Next";
carousel.appendChild(nextButton);
}





    const lightBox = document.querySelector(".lightbox");

    lightBox.focus();

    
    lightBox.classList.add("active");
    carousel.classList.add("active");




    const mediaSection = document.querySelector(".media_section");

    mediaSection.style.display = "none";

    


  

  

}

// function changeSlide(){

// }