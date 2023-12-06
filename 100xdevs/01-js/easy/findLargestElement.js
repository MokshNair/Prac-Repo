/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let arr = numbers.sort(function( a , b){
         if(a > b) return 1;
         if(a < b) return -1;
         return 0;
     })
     arr.reverse()
     return arr[0]
 }

module.exports = findLargestElement;