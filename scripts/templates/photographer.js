function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
        const id  = `assets/photographers/${id}`;
        const city = `assets/photographers/${city}`;
        const country = `assets/photographers/${country}`;
        const tagline = `assets/photographers/${tagline}`;
        const price = `assets/photographers/${price}`;



    function getUserCardDOM() {
        const article = document.createElement( 'article' );
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



    return { name, picture, getUserCardDOM }



}