function MediaTemplate(data) {

    //create image model
    if ('image' in data) {

        const { id, photographerId, title, image, likes, date, price } = data;

        const pic = `./assets/media/${image}`
        const idhtml = `${id}`;
        const photographeridh = `${photographerId}`
        const titleh = `${title}`;
        const likesh = `${likes}`;
        const dateh = `${date}`;
        const priceh = `${price}`;

    }
    else
    //create video model
    {
        const { id, photographerId, title, video, likes, date, price } = data;

        const videoh = `./assets/media/${video}`
        const idhtml = `${id}`;
        const photographeridh = `${photographerId}`;
        const likesh = `${likes}`;
        const titleh = `${title}`;
        const dateh = `${date}`;
        const priceh = `${price}`;

    }


    function getMediaCardDOM() {

        const mediacard = document.createElement('figure');
        mediacard.setAttribute("class", "mediacard");

        const medialink = document.createElement('a');
        medialink.setAttribute("class", "focusable");
        medialink.setAttribute("tabindex", "0");
        medialink.setAttribute("href", "#");    //elements nécessaires pour la lightbox


        const mediatitle = document.createElement('figcaption');
        mediatitle.innerHTML = titleh;                                    // infos supplémentaires?



        if (pic in data) {
            const picth = document.createElement('img');
            picth.setAttribute("src", pic);
            picth.setAttribute("alt", "image de" + `${title}`);


        }
        else if (videoh in data){
            const movie =document.createElement('video');
            movie.setAttribute("src",videoh);
            movie.setAttribute("alt","video de"+titleh)
            
        }


        const icon = document.createElement('i');                                   //heart icon
        icon.classList.add('fa-solid', 'fa-heart', 'fa-lg');
        icon.setAttribute("style","color: #901c1c;")


        return(mediacard)


    }


    return { data, getMediaCardDOM }
}