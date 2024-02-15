function photographerTemplate(data) {

  //DESTRUCUTRE JSON DATA to make it available to helper functions
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `./assets/photographers/${portrait}`;

//GENERATE ARTICLE IN INDEX PAGE


  function getUserCardDOM() {

    //customize url to photographer's individual page
    const photographerpage = "photographer.html?id=" + id;

  //"card",container for photographer
    const usercard = document.createElement("div");
    usercard.setAttribute("class", "usercard");

    //link inside card to individual photographer page
    const href = document.createElement("a");
    href.setAttribute("href", photographerpage);
    href.setAttribute("class", "focusable");
    href.setAttribute("tabindex", "0");

    const article = document.createElement("article");
    article.setAttribute("id", id); // create id for each article

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    let imgatt = "image de " + name;
    img.setAttribute("alt", imgatt);

    //h2 for name
    const h2 = document.createElement("h2");
    h2.textContent = name;

    //h3 for location
    const h3 = document.createElement("h3");
    let text = city + "," + country;
    h3.innerHTML = text;
    h3.textContent = city + "," + country;
  //blockquote for "punchline"
    const blockquote = document.createElement("blockquote");
    blockquote.textContent = tagline;

    const pricetag = document.createElement("aside");
    pricetag.textContent = price + "€/jour";

    usercard.appendChild(href);

    href.appendChild(img);
    href.appendChild(h2);
    href.appendChild(h3);

    href.insertAdjacentElement("afterend", article);

    article.appendChild(h3);
    article.appendChild(blockquote);
    article.appendChild(pricetag);

    return usercard;
  }


  
  

  return {
    name,
    picture,
    id,
    city,
    country,
    tagline,
    price,
    getUserCardDOM
   
  };
}
