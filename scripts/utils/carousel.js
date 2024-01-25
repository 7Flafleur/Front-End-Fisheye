const mediaLinks=Array.from(document.querySelectorAll(".mediacard"));
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
    })
    

}