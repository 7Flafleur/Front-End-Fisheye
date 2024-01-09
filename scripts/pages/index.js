
    

 
   





 

//    console.log("Result getphotographers function", getPhotographers())
   
   
   
   
   
   async function getPhotographers() {
    let req=fetch('/data/photographers.json');
    req.then(response => {    
         return response.json();  
     }
     )
     .then(result=>{
        console.log("photographers:", result.photographers)
         return result.photographers;
     })
     
    }






//     async function displayData(photographers) {
//         const photographersSection = document.querySelector(".photographer_section");

//         photographers.forEach((photographer) => {
//             const photographerModel = photographerTemplate(photographer);
//             const userCardDOM = photographerModel.getUserCardDOM();
//             photographersSection.appendChild(userCardDOM);
//         });
//     }

//     async function init() {
//         // Récupère les datas des photographes
//         const { photographers } = await getPhotographers();
//         displayData(photographers);
//     }
    
//     init();
    
