//get the .json data from server, return promise
async function fetchData() {
  let response = await fetch("./data/photographers.json");
  let data = await response.json();
  let photographers = data.photographers;
  return photographers;
}

//await promise, return array
async function getPhotographers() {
  let photographers = await fetchData();

  return photographers;
}

// take array, target html section
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  //use template for each photographer in array, pass each photographer to function
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
/////////////////////////////////////////////////////////////////////////////////
async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

// Call the init function within an async context
(async () => {
  await init();
})();
