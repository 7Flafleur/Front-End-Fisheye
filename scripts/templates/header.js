
function findperson(dataparameter, criteria) {
    for (let i = 0; i < dataparameter.length; i++) {
        const person = dataparameter[i];
        if (person.id == criteria) {
            console.log("Match found!");
            return person; // Return the index of the matched person
        } else {
            console.log("No match found!");
        }
    }
    return -1; // Return -1 if no match is found
}


function HeaderTemplate(dataparameter) {
    const { name, id, city, country, tagline, price, portrait, } = dataparameter;

    const picture = `./assets/photographers/${portrait}`;
    const idhtml = `${id}`;
    const cityh = `${city}`;
    const countryh = `${country}`;
    const taglineh = `${tagline}`;
    const priceh = `${price}`;

    function getuserHeaderDOM() {

        //create section container for DOM elements
        const userHeaderDOM = document.createElement('section');
        userHeaderDOM.setAttribute("class", "headercontainer");

        //infocontainer
        const infos = document.createElement('div');
        infos.setAttribute("class", "infos")

        const h2 = document.createElement('h1');
        h2.textContent = name;

        const h3 = document.createElement('h2');
        let text = cityh + "," + countryh
        h3.innerHTML = text;

        const blockquote = document.createElement('blockquote');
        blockquote.textContent = taglineh;

        infos.append(h2, h3, blockquote);

        //button

        const button = document.createElement("button")
        button.setAttribute("class", "contact_button")
        button.setAttribute("onclick", "displayModal()")
        button.innerHTML = "Contactez-moi";

        //img

        const figure = document.createElement("figure");
        figure.setAttribute("class", "portrait")
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        let imgatt = "image de " + name
        img.setAttribute("alt", imgatt)

        figure.appendChild(img)

        userHeaderDOM.append(infos, button, img)




        //return container
        return userHeaderDOM

    }

    return { name, picture, idhtml, cityh, countryh, taglineh, priceh, getuserHeaderDOM }

}

function displayHeader(dataobject) {
    const headersection = document.querySelector(".photograph-header")
    const personmodel = HeaderTemplate(dataobject)
    const headercard = personmodel.getuserHeaderDOM();
    headersection.append(headercard);

}







//        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
