function photographerTemplate(data) {
    const { name,id,city,country,tagline,price, portrait, } = data;

        const picture = `assets/photographers/${portrait}`;
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
        const article = document.createElement( 'article' );
        article.setAttribute("id",idhtml)  // create id for each article

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;


        




        article.appendChild(img);
        article.appendChild(h2);
        
        // article.appendChild();
        // article.appendChild();
        // article.appendChild();
        // article.appendChild();


        return (article);
    }



    return { name, picture,idhtml,cityh,countryh,taglineh,priceh, getUserCardDOM }



}