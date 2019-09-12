var myList = require("./storeNumberFunction")
function sort(){
    var exportList = myList.viewList()
    return exportList.sort(function(a, b){return a-b});
}
myList.storeNumber(25)
myList.storeNumber(34)
myList.storeNumber(82)
myList.storeNumber(55)
myList.storeNumber(7889998)
myList.storeNumber(12345)
console.log(sort())