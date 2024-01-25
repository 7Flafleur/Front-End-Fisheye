function MediaTemplate(data) {

    //create image model


    const { title, image, video, likes } = data;

    const pic = `./assets/media/${image}`
    const videoh = `./assets/media/${video}`;
    const titleh = `${title}`;
    const likesh = `${likes}`;

    const dataset = {pic,videoh,titleh,likesh}



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
        
        
        const likes = document.createElement('span')
        likes.setAttribute("class","likes")
        likes.innerHTML=likesh+"  ";
        likes.appendChild(icon)

        captioncontainer.appendChild(likes)

        medialink.dataset.source = pic;

medialink.dataset.titleh = titleh;
medialink.dataset.likesh = likesh;



        return medialink;


    }


    //constructor function for Mediacards with video
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

        captioncontainer.appendChild(likes)

        medialink.dataset.source = videoh;
        medialink.dataset.titleh = titleh;
        medialink.dataset.likesh = likesh;



        return medialink;
    }

    //factory function that returns either one or the other type of object
    function getMediaCardDOM() {
        // Determine whether to create an image media card or a video media card based on the available data
        if (data.image != undefined) {
            return getPhotoCardDOM();
        } else //if (data.video!='undefined') 
        {
            return getMovieCardDOM();

        }
    }

    return { data, getMediaCardDOM }
}