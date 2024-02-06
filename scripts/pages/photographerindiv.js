//////////GLOBAL VARIABLES THAT NEED TO BE ACCESSED BY EVERY FUNCTION////////////

 let mediaItemsDOM=[];         //list of html elemnts

 let indivJSONmediaObjects=[]     //list of objects


//get photographer Id from URL
const currentURLsearch = new URLSearchParams(window.location.search);
const urlid = (currentURLsearch.get("id"));
// console.log("URLId",urlid)

const pop = document.querySelector("#pop");
const date = document.querySelector("#date");
const titre = document.querySelector("#titre");

let currentIndex;       //Index for carousel function
let globallikes = 0; 


////////////////////////////////////////////////////////////////

//START INIT FUNCTION

async function init() {

//////DATA RETRIEVAL
  /////////////////////////
    // GET ARRAY OF PHOTOGRAPHERS FROM JSON DATA await promise, return array
    async function getPhotographers() {
      let photographers = await fetchData();
      // console.log(photographers)
      return photographers;
    }//end getPhotographers function
  

      //GET ARRAY OF MEDIA FOR CURRENT PHOTOGRAPHER

  async function getMedia() {
    let media = await fetchMediaData();         ///
    // console.log("media:",media)
  
    //array for photographer
    let indivJSONmediaObjects = new Array();
  
    //fill empty array for individual photographer
    media.forEach((object) => {
  
      if (object.photographerId == urlid) {
        indivJSONmediaObjects.push(object)
      }
    })
    // console.log("Indiv",indivJSONmediaObjects)
    return indivJSONmediaObjects;
  }//end getMedia function
  
////////////////////////////////////////////














} //end init function








// MAIN CODE Call the init function within an async context 
(async () => {
  await init();
})();


