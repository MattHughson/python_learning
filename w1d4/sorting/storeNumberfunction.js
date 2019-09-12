var list = []
function storeNumber (number){
    return list.push(number)
}
function viewList(){
    return list
}
module.exports = {
    viewList: viewList,
    storeNumber: storeNumber
}
