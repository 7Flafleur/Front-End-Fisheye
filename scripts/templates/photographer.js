function photographerTemplate(data) {
    const { name,id,city,country,tagline,price, portrait, } = data;

        const picture = `/assets/photographers/${portrait}`;
        const idhtml  = `${id}`;
        const cityh = `${city}`;
        const countryh = `${country}`;
        const taglineh = `${tagline}`;
        const priceh = `${price}`;

        // console.log(idhtml)
        // console.log(cityh)
        // console.log(countryh)
        // console.log(taglineh)
        // console.log(priceh)
       

    function getUserCardDOM() {

        const href= document.createElement('a');
        href.setAttribute("href","#")
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
        h3.textContent = text;

        const divtag = document.createElement('div');
        divtag.textContent=taglineh;

        const pricetag = document.createElement('div');
        pricetag.textContent = priceh +"€/jour";


        


        href.appendChild(article);

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(divtag);
        article.appendChild(pricetag);
        
        

        return (href);
    }



    return { name, picture,idhtml,cityh,countryh,taglineh,priceh, getUserCardDOM }



}
