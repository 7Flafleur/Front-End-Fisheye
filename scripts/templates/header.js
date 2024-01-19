// const urlid = 243;



let dataargument = [
    {
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "Voir le beau dans le quotidien",
        "price": 400,
        "portrait": "MimiKeel.jpg"
    },
    {
        "name": "Ellie-Rose Wilkens",
        "id": 930,
        "city": "Paris",
        "country": "France",
        "tagline": "Capturer des compositions complexes",
        "price": 250,
        "portrait": "EllieRoseWilkens.jpg"
    },
    {
        "name": "Tracy Galindo",
        "id": 82,
        "city": "Montreal",
        "country": "Canada",
        "tagline": "Photographe freelance",
        "price": 500,
        "portrait": "TracyGalindo.jpg"
    },
    {
        "name": "Nabeel Bradford",
        "id": 527,
        "city": "Mexico City",
        "country": "Mexico",
        "tagline": "Toujours aller de l'avant",
        "price": 350,
        "portrait": "NabeelBradford.jpg"
    },
    {
        "name": "Rhode Dubois",
        "id": 925,
        "city": "Barcelona",
        "country": "Spain",
        "tagline": "Je crée des souvenirs",
        "price": 275,
        "portrait": "RhodeDubois.jpg"
    },
    {
        "name": "Marcel Nikolic",
        "id": 195,
        "city": "Berlin",
        "country": "Germany",
        "tagline": "Toujours à la recherche de LA photo",
        "price": 300,
        "portrait": "MarcelNikolic.jpg"
    }
]


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
