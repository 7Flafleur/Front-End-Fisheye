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

     function getuserHeaderDOM(){

        //create section container for DOM elements
        const userHeaderDOM=document.createElement('section');
        userHeaderDOM.setAttribute("class", "headercontainer");

        //infocontainer
        const infos =document.createElement('div');
        infos.setAttribute("class","infos")

        const h2 = document.createElement( 'h1' );
        h2.textContent = name;

        const h3 = document.createElement('h2');
        let text = cityh + "," + countryh
        h3.innerHTML = text;

        const blockquote = document.createElement('blockquote');
        blockquote.textContent=taglineh;

        infos.append(h2,h3,blockquote);

        //button

        const button=document.createElement("button")
        button.setAttribute("class","contact_button")
        button.setAttribute("onclick","displayModal()")
        button.innerHTML="Contactez-moi";

        //img
        
        const figure=document.createElement("figure");
        figure.setAttribute("class","portrait" )
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        let imgatt= "image de " + name
        img.setAttribute("alt",imgatt)

        figure.appendChild(img)

        userHeaderDOM.append(infos,button,img)


        
        
        //return container
           return userHeaderDOM

     }


    return { name, picture,idhtml,cityh,countryh,taglineh,priceh, getUserCardDOM,getuserHeaderDOM }



}

//        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
