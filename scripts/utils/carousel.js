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

    mediaLinks.forEach((link)=>{
        const li= document.createElement('li')
        li.classList.add("slide")
        if (link.querySelector("img")){
            const img= document.createElement('img')
            img.setAttribute("src",link.querySelector("img").src)
            li.appendChild(img)
        }
        else if (link.querySelector("video")){
            const video= document.createElement('video')
            video.setAttribute("src",link.querySelector("video").src)
            li.appendChild(video)
        }
        else {
            console.log("no valid media type")
        }
    })
    

}