function photographerTemplate(data) {
    const { name,id,city,country,tagline,price, portrait, } = data;

        const picture = `assets/photographers/${portrait}`;
        const idhtml  = `assets/photographers/${id}`;
        const cityh = `assets/photographers/${city}`;
        const countryh = `assets/photographers/${country}`;
        const taglineh = `assets/photographers/${tagline}`;
        const priceh = `assets/photographers/${price}`;

        console.log(idhtml)
        console.log


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        article.setAttribute("id",idhtml)




        article.appendChild(img);
        article.appendChild(h2);
        
        // article.appendChild();
        // article.appendChild();
        // article.appendChild();
        // article.appendChild();


        return (article);
    }



    return { name, picture,idhtml, getUserCardDOM }



}