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

let factory = new MediaFactory()