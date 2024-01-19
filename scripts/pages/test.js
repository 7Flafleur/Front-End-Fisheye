
//get photographer Id from URL
// const currentURLsearch =new URLSearchParams(window.location.search);
// const urlid=(currentURLsearch.get("id"));



// console.log(dataargument);

// dataargument.forEach((person)=>{
//     if(person.id==urlid){
//         console.log("Match found!")
//         console.log(person)
//         return person;
//     }
// })


// function findperson(dataparameter,criteria){
//     for(person in dataparameter){
//         if(person.id==criteria){
//             console.log("Match found!")
//             return person;
//         }
//         else{
//             console.log("No match found!")
//         }   
//     }
    


//////////Main code//////////

 let Theperson = findperson(dataargument, urlid);

console.log("Found Person:", Theperson);
console.log("Person is :", typeof (Theperson));

let deconstructedPerson = HeaderTemplate(Theperson);

console.log("Deconstructed person:", deconstructedPerson)
console.log("Deconstructed person is an ", typeof (deconstructedPerson))


displayHeader(Theperson);





