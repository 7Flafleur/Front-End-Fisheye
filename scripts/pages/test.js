//get the .json data from server, return promise
async function fetchData() {
    let response = await fetch('./data/photographers.json');
    let data = await response.json();
    let photographers = data.photographers;
    return photographers;
  }

    //await promise, return array
    async function getPhotographers() {
        let photographers = await fetchData();
        console.log(photographers)
        return photographers;
      }


//////////Main code//////////

async function init() {
    const photographers = await getPhotographers();
    const person = findperson(photographers, urlid);
    displayHeader(person);
    
}

  // Call the init function within an async context
  (async () => {
    await init();
  })();
  






//  let Theperson = findperson(dataargument, urlid);

// console.log("Found Person:", Theperson);
// console.log("Person is :", typeof (Theperson));

// let deconstructedPerson = HeaderTemplate(Theperson);

// console.log("Deconstructed person:", deconstructedPerson)
// console.log("Deconstructed person is an ", typeof (deconstructedPerson))


// displayHeader(Theperson);





