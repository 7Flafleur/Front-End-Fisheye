function lightboxFactory(item) {

    //create lightbox el
  
  
    // check if item is img or video, call helper function
  
    if(item.querySelector('img')){
      imgLightbox(item.querySelector('img'));
    }
    else if(item.querySelector('video')){
      videoLightbox(item.querySelector('video'));
    }
  
    //helper constructor functions for lightbox
  
  //lightbox for images
  function imgLightbox(picture){// loop through all images in mediasection, add event listener to each
      picture.addEventListener("click",()=>{
        //on image click, add active class to lightbox
        lightbox.classList.add("active");
        //create img element, set src to clicked image
        const img=document.createElement("img");
        img.src=picture.src;
        //if lightbox has child, remove it,so no double images
        while(lightbox.firstChild){
          lightbox.removeChild(lightbox.firstChild);
        }
        //append img to display to lightbox
        lightbox.appendChild(img);
      })
    }
    
    //lightbox for movies
    function videoLightbox(movie){
      movie.addEventListener("click",(event)=>{
        event.preventDefault();
        //on video click, add active class to lightbox
        lightbox.classList.add("active");
        //create video element, set src to clicked video
        const video=document.createElement("video");
        let source = movie.querySelector('source');
        let src = source ? source.getAttribute('src') : movie.src;
        video.src=src;
        video.controls=true;
        //if lightbox has child, remove it,so no double videos
        while(lightbox.firstChild){
          lightbox.removeChild(lightbox.firstChild);
        }
        //append video to display to lightbox
        lightbox.appendChild(video);
      })
  
  

    }
    
  
  }


  
  