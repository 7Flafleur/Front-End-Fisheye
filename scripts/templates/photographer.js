function photographerTemplate(data) {
    const { name,id,city,country,tagline,price, portrait, } = data;

        const picture = `./assets/photographers/${portrait}`;
        // const id  = `${id}`;
        // const city = `${city}`;
        // const country = `${country}`;
        // const tagline = `${tagline}`;
        // const price = `${price}`;

       

    function getUserCardDOM() {

        const photographerpage ="photographer.html?id="+id

        const usercard = document.createElement('div');
        usercard.setAttribute("class","usercard");

        const href= document.createElement('a');
        href.setAttribute("href",photographerpage)
        href.setAttribute("class","focusable")
        href.setAttribute("tabindex","0")

        const article = document.createElement( 'article' );
        article.setAttribute("id",id)  // create id for each article

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        let imgatt= "image de " + name
        img.setAttribute("alt",imgatt)



        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement('h3');
        let text = city + "," + country
        h3.innerHTML = text;
        h3.textContent = city + "," + country;

       

        const blockquote = document.createElement('blockquote');
        blockquote.textContent=tagline;

        const pricetag = document.createElement('aside');
        pricetag.textContent = price +"€/jour";

        usercard.appendChild(href);

        href.appendChild(img);
        href.appendChild(h2);
        href.appendChild(h3);
        

        href.insertAdjacentElement('afterend',article);


        article.appendChild(h3);
        article.appendChild(blockquote);
        article.appendChild(pricetag);

       
        
        

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
        let text = city + "," + country
        h3.innerHTML = text;

        const blockquote = document.createElement('blockquote');
        blockquote.textContent=tagline;

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



    return { name, picture,id,city,country,tagline,price, getUserCardDOM,getuserHeaderDOM, }



}


