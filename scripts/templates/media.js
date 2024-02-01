
// START 


function MediaTemplate(data) {

//DECONSTRUCTING JSON DATA to create variables from properties


    const { title, image, video, likes,date } = data;

    const pic = `./assets/media/${image}`
    const videoh = `./assets/media/${video}`;
    const titleh = `${title}`;
    const likesh = `${likes}`;
    const dateh = `${date}`;

//CONSTRUCTOR function for Mediacards with images
    function getPhotoCardDOM() {

        const medialink = document.createElement('a');
        medialink.setAttribute("class", "focusable medialink");
        medialink.setAttribute("tabindex", "0");
        medialink.setAttribute("href", "#");    //elements nécessaires pour la lightbox

        const mediacard = document.createElement('figure');
        mediacard.setAttribute("class", "mediacard");
        medialink.appendChild(mediacard)

        const picth = document.createElement('img');
        picth.setAttribute("src", pic);
        picth.setAttribute("alt", titleh);
        picth.setAttribute("data-index","")
        mediacard.appendChild(picth)


        const mediatitle = document.createElement('figcaption');
        mediacard.appendChild(mediatitle)
        const captioncontainer = document.createElement('div')
        captioncontainer.setAttribute("class","captioncontainer")
        mediatitle.appendChild(captioncontainer)
        captioncontainer.innerHTML = titleh;                                    // infos supplémentaires?

        const icon = document.createElement('i');                                   //heart icon
        icon.classList.add('fa-solid', 'fa-heart', 'fa-');
        icon.setAttribute("style", "color: #901c1c;")
        icon.setAttribute("id",titleh )

        
        const likes = document.createElement('span')
        likes.setAttribute("class","likes")
        likes.innerHTML=likesh+"  ";
        likes.appendChild(icon)

        let likeContainer=parseInt(likesh);

        function incrementLike(){
            likeContainer++;
            likes.innerHTML=likeContainer+"  ";
            likes.appendChild(icon);
            console.log("liked")
        }

        function noMoreLike(){
            icon.removeEventListener('click', incrementLike)
            console.log("removed");
        }


        icon.addEventListener('click', incrementLike
          )
        icon.addEventListener('click', noMoreLike);
            
        captioncontainer.appendChild(likes)

        mediacard.setAttribute("data-likes",likesh)
        mediacard.setAttribute("data-date",dateh)
        mediacard.setAttribute("data-title",titleh)

        return medialink;
    } //end getPhotoCardDOM


    //CONSTRUCTOR function for Mediacards with video
    function getMovieCardDOM() {

        const medialink = document.createElement('a');
        medialink.setAttribute("class", "focusable medialink");
        medialink.setAttribute("tabindex", "0");
        medialink.setAttribute("href", "#");    //elements nécessaires pour la lightbox

        const mediacard = document.createElement('figure');
        mediacard.setAttribute("class", "mediacard");
        medialink.appendChild(mediacard)

        const movie = document.createElement('video');
        movie.setAttribute("src", videoh);
        movie.setAttribute("data-index","")
        movie.controls=false;
    
        mediacard.appendChild(movie)

        const mediatitle = document.createElement('figcaption');
        mediacard.appendChild(mediatitle)
        const captioncontainer = document.createElement('div')
        captioncontainer.setAttribute("class","captioncontainer")
        mediatitle.appendChild(captioncontainer)
        captioncontainer.innerHTML = titleh;                                    // infos supplémentaires?
        


        const icon = document.createElement('i');                                   //heart icon
        icon.classList.add('fa-solid', 'fa-heart', 'fa-lg');
        icon.setAttribute("style", "color: #901c1c;")
        
        
        const likes = document.createElement('span')
        likes.setAttribute("class","likes")
        likes.innerHTML=likesh
        likes.appendChild(icon)

        let likeContainer=parseInt(likesh);

        function incrementLike(){
            likeContainer++;
            likes.innerHTML=likeContainer+"  ";
            likes.appendChild(icon);
            console.log("liked")
        }

        function noMoreLike(){
            icon.removeEventListener('click', incrementLike)
            console.log("removed");
        }

        icon.addEventListener('click', incrementLike
        )
      icon.addEventListener('click', noMoreLike);

        captioncontainer.appendChild(likes)

        mediacard.setAttribute("data-likes",likesh)

        
        mediacard.setAttribute("data-date",dateh)
        mediacard.setAttribute("data-title",titleh)
       

        return medialink;
    } //   end getMovieCardDOM


    //FACTORY function that returns either one or the other type of object
    function getMediaCardDOM() {
        // Determine whether to create an image media card or a video media card based on the available data
        if (data.image != undefined) {
            return getPhotoCardDOM();
        } else //if (data.video!='undefined') 
        {
            return getMovieCardDOM();

        }
    }

    return { title, image, video, likes,dateh , getMediaCardDOM }
} //end MediaTemplate function


//SORTING FUNCTIONS

function compareDatasetValue(value) {
    //compare two values in an array 
    return function(a, b) {
        //values are object properties
        if (a[value] > b[value]) {
            return 1; //return value 1 indicates that sort needs to be done, switch indexes of elements
        } else if (a[value] < b[value]) {
            return -1; // do not sor
        } else {
            return 0; // do not sort
        }
    }
}


const compareByPop = compareDatasetValue("likes");
const compareByDate = compareDatasetValue("date");
const compareByTitle = compareDatasetValue("title");




