function findItemsOver(itemList, over){

    var itemlist = [];
       for (var i = 0; i < itemList.length; i++){
         if(itemList[i].qty > over){
          itemlist.push(itemList[i]);

            }

         }
         return  itemlist;
       }
   console.log(findItemsOver( [
       {name : 'apples', qty : 10},
       {name : 'pears', qty : 37},
       {name : 'bananas', qty : 27},
       {name : 'apples', qty : 3},
   ]))