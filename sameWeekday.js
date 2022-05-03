
function sameWeekday (date1, date2) {
    var d = new Date(date1);
    var c = new Date(date2);
   return d.getDay() === c.getDay();
   }
  console.log(sameWeekday('2016-11-19', '2016-11-26'));
  console.log(sameWeekday('2016-11-19', '2016-11-28'))