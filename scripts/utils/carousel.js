
function createCarousel(mediaItems){

    const carouselContainer = document.createElement("section");
    carouselContainer.id="carousel_container";
    carouselContainer.setAttribute("aria-label","carousel");
    carouselContainer.setAttribute("role","region");

    const button_left=document.createElement("button");
    button_left.id="button_left";
    button_left.addclass="carousel_button";
    button_left.setAttribute("aria-label","previous");
    button_left.setAttribute("role","button");
    button_left.setAttribute("data-direction","left");
    button_left.innerHTML="<i class=\"fas fa-chevron-left\"></i>";  
    carouselContainer.appendChild(button_left);

    const button_right=document.createElement("button");
    button_right.addclass="carousel_button";
    button_right.id="button_right";
    button_right.setAttribute("aria-label","next");
    button_right.setAttribute("role","button");
    button_right.setAttribute("data-direction","right");
    button_right.innerHTML="<i class=\"fas fa-chevron-right\"></i>";
    carouselContainer.appendChild(button_right);



    const carousel=document.createElement("ul");
    carousel.id="carousel";
    carousel.setAttribute("aria-label","carousel");
    carousel.setAttribute("role","region");
    carouselContainer.appendChild(carousel);

    
    
    mediaItems.forEach((item)=>{
        console.log(item);
        console.log(item.src);
        const carouselItem=document.createElement("li");
        carouselItem.classList.add("carousel_item");
        carouselItem.setAttribute("aria-label","carousel item");
        carouselItem.setAttribute("role","region");
        carouselItem.appendChild(item);
        carousel.appendChild(carouselItem);
    })

    mediaItems[0].setAttribute("data-active","true");

    button_left.addEventListener("click",()=>{
        const activeItem=document.querySelector("[data-active=true]");
        const prevItem=activeItem.previousElementSibling;
        if(prevItem){
            activeItem.removeAttribute("data-active");
            prevItem.setAttribute("data-active","true");
        }
        else{
            activeItem.removeAttribute("data-active");
            mediaItems[mediaItems.length-1].setAttribute("data-active","true");
        }
    })

    button_right.addEventListener("click",()=>{
        const activeItem=document.querySelector("[data-active=true]");
        const nextItem=activeItem.nextElementSibling;
        if(nextItem){
            activeItem.removeAttribute("data-active");
            nextItem.setAttribute("data-active","true");
        }
        else{
            activeItem.removeAttribute("data-active");
            mediaItems[0].setAttribute("data-active","true");
        }
    })


    return carouselContainer;
}