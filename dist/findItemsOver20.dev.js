"use strict";

function findItemsOver20(itemList) {
  var itemlist = [];

  for (var i = 0; i < itemList.length; i++) {
    if (itemList[i].qty > 20) {
      itemlist.push(itemList[i]);
    }
  }

  return itemlist;
}

console.log(findItemsOver20([{
  name: 'apples',
  qty: 10
}, {
  name: 'pears',
  qty: 37
}, {
  name: 'bananas',
  qty: 27
}, {
  name: 'apples',
  qty: 3
}]));