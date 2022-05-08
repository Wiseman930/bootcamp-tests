"use strict";

function countAllFromTown(str, regNum) {
  var list = str.split(',');
  var count = 0;

  for (var i = 0; i < list.length; i++) {
    var x = list[i].trim(" ");

    if (x.startsWith(regNum)) {
      count++;
    }
  }

  return count;
}

console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'));