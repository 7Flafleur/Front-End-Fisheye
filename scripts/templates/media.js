// START

function MediaTemplate(data) {
  //DECONSTRUCTING JSON DATA to create variables from properties

  const { title, image, video, likes, date } = data;

  const pic = `./assets/media/${image}`;
  const videoh = `./assets/media/${video}`;
  const titleh = `${title}`;
  const likesh = `${likes}`;
  const dateh = `${date}`;

  //CONSTRUCTOR function for Mediacards with images
  function getPhotoCardDOM() {
    const medialink = document.createElement("a");
    medialink.setAttribute("class", "focusable medialink");
    // medialink.setAttribute("tabindex", "0");
    medialink.setAttribute("href", "#"); //elements nécessaires pour la lightbox

    const mediacard = document.createElement("figure");
    mediacard.setAttribute("class", "mediacard");
    mediacard.setAttribute("tabindex", "0");
    medialink.appendChild(mediacard);

    const picth = document.createElement("img");
    picth.setAttribute("src", pic);
    picth.setAttribute("alt", titleh);
    picth.setAttribute("data-index", "");
    // picth.setAttribute("tabindex", "0")
    mediacard.appendChild(picth);

    const mediatitle = document.createElement("figcaption");
    mediacard.appendChild(mediatitle);
    const captioncontainer = document.createElement("div");
    captioncontainer.setAttribute("class", "captioncontainer");
    mediatitle.appendChild(captioncontainer);
    captioncontainer.innerHTML = titleh; // infos supplémentaires?

    const icon = document.createElement("i"); //heart icon
    icon.classList.add("fa-solid", "fa-heart", "fa-");
    icon.setAttribute("style", "color: #901c1c;");
    icon.setAttribute("id", titleh);
    icon.setAttribute("tabindex", "0");

    const likes = document.createElement("span");
    likes.setAttribute("class", "likes");
    likes.innerHTML = likesh + "  ";
    likes.appendChild(icon);

    let likeContainer = parseInt(likesh);

    function incrementLike() {
      likeContainer++;
      likes.innerHTML = likeContainer + "  ";
      likes.appendChild(icon);
      console.log("liked");
      globallikes++;
      console.log("More global likes: ", globallikes);
      updateGlobalLikesDOM(globallikes);
    }

    icon.addEventListener("click", function handleLike(event) {
      event.preventDefault();
      event.stopPropagation();
      incrementLike();

      // Remove the event listener
      icon.removeEventListener("click", handleLike);
      icon.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    });

    captioncontainer.appendChild(likes);

    mediacard.setAttribute("data-likes", likesh);
    mediacard.setAttribute("data-date", dateh);
    mediacard.setAttribute("data-title", titleh);

    return medialink;
  } //end getPhotoCardDOM

  //CONSTRUCTOR function for Mediacards with video
  function getMovieCardDOM() {
    const medialink = document.createElement("a");
    medialink.setAttribute("class", "focusable medialink");
    // medialink.setAttribute("tabindex", "0");
    medialink.setAttribute("href", "#"); //elements nécessaires pour la lightbox

    const mediacard = document.createElement("figure");
    mediacard.setAttribute("class", "mediacard");
    mediacard.setAttribute("tabindex", "0");
    medialink.appendChild(mediacard);

    const movie = document.createElement("video");
    movie.setAttribute("src", videoh);
    movie.setAttribute("data-index", "");
    // movie.setAttribute("tabindex","0")
    movie.controls = false;

    mediacard.appendChild(movie);

    const mediatitle = document.createElement("figcaption");
    mediacard.appendChild(mediatitle);
    const captioncontainer = document.createElement("div");
    captioncontainer.setAttribute("class", "captioncontainer");
    mediatitle.appendChild(captioncontainer);
    captioncontainer.innerHTML = titleh; // infos supplémentaires?

    const icon = document.createElement("i"); //heart icon
    icon.classList.add("fa-solid", "fa-heart", "fa-");
    icon.classList.add("icons")
    icon.setAttribute("style", "color: #901c1c;");
    icon.setAttribute("tabindex", "0");

    const likes = document.createElement("span");
    likes.setAttribute("class", "likes");
    likes.innerHTML = likesh;
    likes.appendChild(icon);

    let likeContainer = parseInt(likesh);

    function incrementLike() {
      //increment likes on media
      likeContainer++;
      likes.innerHTML = likeContainer + "  ";
      likes.appendChild(icon);
      console.log("liked");
      // Increment globallikes
      globallikes++;
      console.log("More global likes: ", globallikes);
      updateGlobalLikesDOM(globallikes);
    }
    icon.addEventListener("click", function handleLike(event) {
      event.preventDefault();
      event.stopPropagation();
      incrementLike();

      // Remove the event listener
      icon.removeEventListener("click", handleLike);
      icon.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    });

    captioncontainer.appendChild(likes);

    mediacard.setAttribute("data-likes", likesh);

    mediacard.setAttribute("data-date", dateh);
    mediacard.setAttribute("data-title", titleh);

    return medialink;
  } //   end getMovieCardDOM

  //FACTORY function that returns either one or the other type of object
  function getMediaCardDOM() {
    // Determine whether to create an image media card or a video media card based on the available data
    if (data.image != undefined) {
      return getPhotoCardDOM();
    } //if (data.video!='undefined')
    else {
      return getMovieCardDOM();
    }
  }

  return { title, image, video, likes, dateh, getMediaCardDOM };
} //end MediaTemplate function

