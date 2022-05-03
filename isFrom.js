function isFrom(registrationNumber, location){
    return registrationNumber.startsWith(location);
    };
    console.log(isFrom('CJ 98912', 'CJ'));
    console.log(isFrom('CJ 98912', 'CY'));