/////FACTORY t ocreate MEDIA OBJECT//////////

const TYPES = {
    photo :"photo",
    video: "video"
}


class Media {}


class Image  extends Media{

}

class Movie extends Media{
    
}


class MediaFactory{
    createMedia(type, name){
        switch(type){
            case TYPES.photo:
                return new Image(name);
            case TYPES.video:
                return new Movie(name);
        }
        
    }
}




////////////////

function ImageTemplate(data){

    const {id, photographerId,title,image,likes,date,price} = data;

    const pic = `./assets/photographers/${image}`
    const idhtml  = `${id}`;
    const cityh = `${city}`;
    const likesh = `${likes}`;
    const dateh = `${date}`;
    const priceh = `${price}`;
    



    return(mediasection)
}