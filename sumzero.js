
function addToZero(arr){
    let total = 0;
    for (var i in arr) {
         total += arr[i];
    }
    if (total != 0){
        return "True"
    }
    else{
        return "False"
    }
}
addToZero([1, 2, 3])
console.log(total)






// addToZero(){
//     var arr = [1, 2, 3, 4];
//     var total = 0;
//     for (var i in arr) {
//     total += arr[i];
//     }
// }
// addToZero()
// console.log(total)