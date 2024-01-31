

function integrateCarousel(mediaItems) {

    const carousel = document.querySelector(".carousel");
    const ul = document.createElement('ul');
    ul.id = "carousel-list";

    carousel.appendChild(ul);


 mediaItems.forEach((link,index) => {
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
        video.dataset.index=index
        li.appendChild(video)
        ul.appendChild(li)
        // console.log("video added ");

    }
    else {
        console.log("no valid media type")
    }

});


    const carouselItem = document.querySelector(".carouselItem");

    const prevButton = document.getElementById("carousel-button-prev");

    ul.appendChild(prevButton);


    const nextButton = document.getElementById("carousel-button-next");

    ul.appendChild(nextButton);

    nextButton.addEventListener("click", () => {

        const carouselItemWidth = carouselItem.clientWidth;

        ul.scrollLeft += carouselItemWidth;

    });

    prevButton.addEventListener("click", () => {

        const carouselItemWidth = carouselItem.clientWidth;

        ul.scrollLeft -= carouselItemWidth;

    });

    const lightBox = document.querySelector(".lightbox");

    lightBox.focus();

    
    lightBox.classList.add("active");
    carousel.classList.add("active");




    const mediaSection = document.querySelector(".media_section");

    mediaSection.style.display = "none";



  

  

}