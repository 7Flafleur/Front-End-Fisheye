// VARIABLES

const contactform = document.getElementById("contactForm");


function displayModal() {
    //display modal
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    //display contact form
    const form = document.getElementById("hi");
    form.style.display = "flex"; 

}

//on click on the cross, close the modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    bye.style.display = "none";
}

//on click on envoyer, close the modal,display the confirmation message,log the form data
function sendForm(){
    const contactform = document.getElementById("contactForm");



    //FormData object to iterate over entries
    const formData = new FormData(contactform);

    // Loop over entries and log them to the console

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
        
      }

    contactform.reset();

      const form = document.getElementById("hi");
      //hide contact form
        form.style.display = "none";

        const bye = document.getElementById("bye");
        //display confirmation message
        bye.style.display = "flex";
}


// function firstnamenonvalid(){
//   if (first.value.length<2){
//     firstnameerror.setAttribute("data-error-visible","true")
//     return true;
//   }
//   else{
//     firstnameerror.setAttribute("data-error-visible","false")
//     return false;
//   }
// };

// function lastnamenonvalid(){
//   if (last.value.length<2){
// lastnameerror.setAttribute("data-error-visible","true")
// return true;
//   }
//   else{
//     lastnameerror.setAttribute("data-error-visible","false")
//     return false;
//   }
// };

// function melnonvalid(){
//   if(!regexmel.test(mail.value)){
// emailerror.setAttribute("data-error-visible","true");
// return true;
//   }
//   else{
//     emailerror.setAttribute("data-error-visible","false")
//     return false;
//   }
// };


// MAIN CODE

contactform.addEventListener('submit', function(event) {
  event.preventDefault();

  sendForm()

//   firstnamenonvalid();
//   lastnamenonvalid();
//   melnonvalid();
//   if (!(firstnamenonvalid()||lastnamenonvalid()||melnonvalid())){
//   sendForm();}
// }else
// {(console.log("erreur"))
// }
}
);

