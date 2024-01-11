//Mettre le code JavaScript lié à la page photographer.html


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



      async function init() {
        // Récupère les datas des photographes
        const media = await getMedia();
        displayData(photographers);
      }

  // Call the init function within an async context
  (async () => {
    await init();
  })();
  