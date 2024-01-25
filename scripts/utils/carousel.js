const mediaLinks=Array.from(document.querySelectorAll(".medialink"));
console.log("medialinks: ",mediaLinks);


mediaLinks.forEach((link)=>{
    addEventListener("click",()=>{
        console.log("clicked");
    })
    
});

mediaLinks.forEach((link)=>{
    console.log("mediacard:",link);
    const src= link.dataset.source;
    console.log("source:",link.dataset.source);
    createCarousel(mediaLinks)
});


function createCarousel(mediaLinks){

    const ul= document.querySelector('#slides-container');

    mediaLinks.forEach((link)=>{
        const li= document.createElement('li')
        li.classList.add("slide")
        if (link.querySelector("img")){
            const img= document.createElement('img')
            img.setAttribute("src",link.querySelector("img").src)
            li.appendChild(img)
            ul.appendChild(li)
            console.log("img added ");
        }
        else if (link.querySelector("video")){
            const video= document.createElement('video')
            video.setAttribute("src",link.querySelector("video").src)
            li.appendChild(video)
            ul.appendChild(li)
            console.log("video added ");

        }
        else {
            console.log("no valid media type")
        }
    })
    
    
    const slidesContainer = document.getElementById("slides-container");

const slide = document.querySelector(".slide");

const prevButton = document.getElementById("slide-arrow-prev");

const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {

  const slideWidth = slide.clientWidth;

  slidesContainer.scrollLeft += slideWidth;

});

prevButton.addEventListener("click", () => {

  const slideWidth = slide.clientWidth;

  slidesContainer.scrollLeft -= slideWidth;

});

   


}