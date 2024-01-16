function MediaTemplate(data) {

    //create image model


    const { title, image, video, likes } = data;

    const pic = `./assets/media/${image}`
    const videoh = `${video}`;
    const titleh = `${title}`;
    const likesh = `${likes}`;




    function getPhotoCardDOM() {

        const medialink = document.createElement('a');
        medialink.setAttribute("class", "focusable");
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
        mediatitle.innerHTML = titleh;                                    // infos supplémentaires?


        const icon = document.createElement('i');                                   //heart icon
        icon.classList.add('fa-solid', 'fa-heart', 'fa-lg');
        icon.setAttribute("style", "color: #901c1c;")


        return mediacard;


    }


    //constructor function for Mediacards with video
    function getMovieCardDOM() {

        const movie = document.createElement('video');
        movie.setAttribute("src", videoh);
        movie.setAttribute("alt", "video de" + titleh)
        mediacard.appendChild(movie)


        return mediacard;
    }

    //factory function that returns either one or the other type of object
    function getMediaCardDOM() {
        // Determine whether to create an image media card or a video media card based on the available data
        if (data.image != 'undefined') {
            return getPhotoCardDOM();
        } else //if (data.video!='undefined') 
        {
            return getMovieCardDOM();

        }
    }

    return { data, getMediaCardDOM }
}