


//get the .json data from server, return promise
async function fetchData() {
  let response = await fetch('./data/photographers.json');
  let data = await response.json();
  let media = data.media;
  return media;
}

//await promise, return array
async function getMedia() {
  let media = await fetchData();
  console.log(media)
  return media;
}

// take array, target html section
async function displayMedia(media) {
  const mediaSection = document.querySelector(".media_section")

  //use template for each media in array, pass each media to function  according to its type
  media.forEach((item) => {
    const mediaModel = MediaTemplate(item);  //returns video or image mediamodel
    const mediaCardDOM = mediaModel.getMediaCardDOM();  // function creates mediacard that has either video or img tag, according to object type
    mediaSection.appendChild(mediaCardDOM);
  });
}



async function init() {
  // Get data from JSON file
  const media = await getMedia();
  displayMedia(media);
}

// Call the init function within an async context
(async () => {
  await init();
})();
