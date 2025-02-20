// VARIABLES

const contactform = document.getElementById("contactForm");
const modal = document.getElementById("contact_modal");
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];

function trapFocus(event) {
  if (event.key === "Tab" && !modal.contains(document.activeElement)) {
    event.preventDefault();
    firstFocusableElement.focus();
  }
}

function displayModal() {
  //display modal

  modal.style.display = "block";
  modal.setAttribute("data-active", "true");

  //display contact form
  const form = document.getElementById("hi");
  form.style.display = "flex";

  document.addEventListener("keydown", trapFocus);
}

//on click on the cross, close the modal
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  bye.style.display = "none";

  const contactform = document.getElementById("contactForm");
  contactform.reset();
  modal.setAttribute("data-active", "false");

  // Set all data-error-visible attributes to false
  const errorElements = document.querySelectorAll("[data-error-visible]");
  errorElements.forEach((element) => {
    element.setAttribute("data-error-visible", "false");
  });

  document.removeEventListener("keydown", trapFocus);
}

//on click on envoyer, close the modal,display the confirmation message,log the form data
function sendForm() {
  const contactform = document.getElementById("contactForm");

  // //"classic way to log form data"

  //     const formc = document.getElementById("contactForm");

  //     for (let i = 0; i < formc.elements.length; i++) {
  //         console.log(formc.elements[i].name, formc.elements[i].value);
  //     }

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

// REGEX

const regexmel = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

// VARIABLES FOR FUNCTIONS

const first = document.getElementById("Prénom");
const last = document.getElementById("Nom");
const mail = document.getElementById("Email");

const firstnameerror = document.getElementById("firstnameerror");
const lastnameerror = document.getElementById("lastnameerror");
const emailerror = document.getElementById("emailerror");

function firstnamenonvalid() {
  if (first.value.length < 2) {
    firstnameerror.setAttribute("data-error-visible", "true");
    console.log("erreur prénom");
    return true;
  } else {
    firstnameerror.setAttribute("data-error-visible", "false");
    return false;
  }
}

function lastnamenonvalid() {
  if (last.value.length < 2) {
    lastnameerror.setAttribute("data-error-visible", "true");
    console.log("erreur nom");
    return true;
  } else {
    lastnameerror.setAttribute("data-error-visible", "false");
    return false;
  }
}

function melnonvalid() {
  if (!regexmel.test(mail.value)) {
    emailerror.setAttribute("data-error-visible", "true");
    console.log("erreur mail");
    return true;
  } else {
    emailerror.setAttribute("data-error-visible", "false");
    return false;
  }
}

function isformcomplete() {
  if (firstnamenonvalid() || lastnamenonvalid() || melnonvalid()) {
    return false;
  } else {
    return true;
  }
}

// MAIN CODE

contactform.addEventListener("submit", function (event) {
  event.preventDefault();

  // sendForm()

  firstnamenonvalid();
  lastnamenonvalid();
  melnonvalid();

  if (isformcomplete()) {
    sendForm();
  } else {
    console.log("erreur");
  }
});
