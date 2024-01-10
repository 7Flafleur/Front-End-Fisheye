function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const  = document.createElement
        const  = document.createElement
        const  = document.createElement
        const  = document.createElement
        const  = document.createElement
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild();
        article.appendChild();
        article.appendChild();
        article.appendChild();
        article.appendChild();


        return (article);
    }
    return { name, picture, getUserCardDOM }
}