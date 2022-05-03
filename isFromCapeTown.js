function isFromCapeTown(registration){
    return registration.startsWith("CA");
    }
    console.log(isFromCapeTown('CA 123 908'));
    console.log(isFromCapeTown('CJ 123 908'));