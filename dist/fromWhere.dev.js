"use strict";

function fromWhere(regNum) {
  if (regNum.startsWith('CY')) {
    return 'Bellville';
  } else if (regNum.startsWith('CJ')) {
    return 'Paarl';
  } else if (regNum.startsWith('CA')) {
    return 'Cape Town';
  } else return 'Some other place!';
}

console.log(fromWhere('CA 98912'));
console.log(fromWhere('CY 874324'));
console.log(fromWhere('CJ 832716'));
console.log(fromWhere('CC 576849'));