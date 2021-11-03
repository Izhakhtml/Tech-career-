
// ! one way
function searchNumber(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            return array[i]
        }
    }
}
// console.log(searchNumber(array, 66));
let array = [1, 4, 5, 7, 9, 13, 33, 66, 77, 87,88]
//  ! two way
function binarySearch(array, num) {
    if(array.length==0)return false;
    let leftHalf = array.slice(0, array.length / 2)
    let rightHalf = array.slice(array.length / 2) 
    if (leftHalf[leftHalf.length - 1] == num  || rightHalf[0] == num || rightHalf[rightHalf.length - 1] == num ) {
      return true
    } 
    if(leftHalf[leftHalf.length - 1] > num){   // the if return false if the num(paramter) is bigger.
      return binarySearch(leftHalf,num)
    }   
    else {
      return binarySearch(rightHalf,num)
    }
    
}
console.log(binarySearch([1, 4, 5, 7, 9, 13, 33, 66, 77, 87,88],87));

