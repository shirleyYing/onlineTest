exports.dateFormat = function(datestr) {
    var date = new Date(parseInt(datestr));
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDay();
    var str = year +"-"+month+"-"+day;
   
    return str;
};