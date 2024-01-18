function photographerTemplate(data) {
    const { name,id,city,country,tagline,price, portrait, } = data;

        const picture = `./assets/photographers/${portrait}`;
        const idhtml  = `${id}`;
        const cityh = `${city}`;
        const countryh = `${country}`;
        const taglineh = `${tagline}`;
        const priceh = `${price}`;

       

    function getUserCardDOM() {

        const photographerpage ="photographer.html?id="+idhtml

        const usercard = document.createElement('div');
        usercard.setAttribute("class","usercard");

        const href= document.createElement('a');
        href.setAttribute("href",photographerpage)
        href.setAttribute("class","focusable")
        href.setAttribute("tabindex","0")

        const article = document.createElement( 'article' );
        article.setAttribute("id",idhtml)  // create id for each article

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        let imgatt= "image de " + name
        img.setAttribute("alt",imgatt)



        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement('h3');
        let text = cityh + "," + countryh
        h3.innerHTML = text;

        const blockquote = document.createElement('blockquote');
        blockquote.textContent=taglineh;

        const pricetag = document.createElement('div');
        pricetag.textContent = priceh +"€/jour";

        usercard.appendChild(href);

        href.appendChild(img);
        href.appendChild(h2);

        href.insertAdjacentElement('afterend',article);


        article.appendChild(h3);
        article.appendChild(blockquote);
        article.appendChild(pricetag);

        h3.innerHTML=taglineh;
        
        

        return usercard;
    }

    //  function getuserHeaderDOM(){

    //     const

    //     const img = document.createElement( 'img' );
    //     img.setAttribute("src", picture)
    //     img.setAttribute("class","portrait" )
    //     let imgatt= "image de " + name
    //     img.setAttribute("alt",imgatt)

    //     const infos =document.createElement('div');
    //     infos.setAttribute("class","infos")

    //     const h2 = document.createElement( 'h1' );
    //     h2.textContent = name;

    //     const h3 = document.createElement('h2');
    //     let text = cityh + "," + countryh
    //     h3.innerHTML = text;

    //     const blockquote = document.createElement('blockquote');
    //     blockquote.textContent=taglineh;
        
        


    //  }


    return { name, picture,idhtml,cityh,countryh,taglineh,priceh, getUserCardDOM }



}
