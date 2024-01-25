// const mediaLinks=Array.from(document.querySelectorAll(".medialink"));
// console.log("medialinks: ",mediaLinks);


// mediaLinks.forEach((link)=>{
//     addEventListener("click",()=>{
//         console.log("clicked");
//         createCarousel(mediaLinks);
//     })

// });

// mediaLinks.forEach((link)=>{
//     console.log("mediacard:",link);
//     const src= link.dataset.source;
//     console.log("source:",link.dataset.source);
//     createCarousel(mediaLinks)
// });


// function createCarousel(mediaLinks){

//     const mediaSection= document.querySelector(".media_section");
//     mediaSection.style.display="none";

//     const ul= document.querySelector('#carousel');

//     mediaLinks.forEach((link)=>{
//         const li= document.createElement('li')
//         li.classList.add("carouselItem")
//         if (link.querySelector("img")){
//             const img= document.createElement('img')
//             img.setAttribute("src",link.querySelector("img").src)
//             li.appendChild(img)
//             ul.appendChild(li)
//             console.log("img added ");
//         }
//         else if (link.querySelector("video")){
//             const video= document.createElement('video')
//             video.setAttribute("src",link.querySelector("video").src)
//             li.appendChild(video)
//             ul.appendChild(li)
//             console.log("video added ");

//         }
//         else {
//             console.log("no valid media type")
//         }
//     })


// const carouselItemsContainer = document.getElementById("carousel");

// const carouselItem = document.querySelector(".carouselItem");

// const prevButton = document.getElementById("carousel-button-prev");

// const nextButton = document.getElementById("carousel-button-next");

// nextButton.addEventListener("click", () => {

//   const carouselItemWidth = carouselItem.clientWidth;

//   carouselItemsContainer.scrollLeft += carouselItemWidth;

// });

// prevButton.addEventListener("click", () => {

//   const carouselItemWidth = carouselItem.clientWidth;

//   carouselItemsContainer.scrollLeft -= carouselItemWidth;

// });




// } //end createCarousel function




function integrateCarousel(mediaItems) {

    const carousel = document.querySelector(".carousel");
    const ul = document.createElement('ul');
    ul.id = "carousel-list";

    carousel.appendChild(ul);


 mediaItems.forEach((link) => {
    const li = document.createElement('li')
    li.classList.add("carouselItem")
    if (link.querySelector("img")) {
        const img = document.createElement('img')
        img.setAttribute("src", link.querySelector("img").src)
        li.appendChild(img)
        ul.appendChild(li)
        console.log("img added ");
    }
    else if (link.querySelector("video")) {
        const video = document.createElement('video')
        video.setAttribute("src", link.querySelector("video").src)
        li.appendChild(video)
        ul.appendChild(li)
        console.log("video added ");

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


        lightBox.addEventListener("click", e => {
        //if click is not on lightbox, return
        if (e.target !== e.currentTarget) return;
        //at click on lightbox outside img, remove active class => hide lightbox;
        lightBox.classList.remove("active");
        mediaSection.style.display = "flex";
    })

    //check if carousel is already in lightbox, if so, remove it

  

}