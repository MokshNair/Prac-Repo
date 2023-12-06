/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let indx1 = arr1.length;
  let indx2 = arr2.length;
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  if (indx1 !== indx2){
      return false;
  }
  for (let i = 0; i < indx1; i++){
      if (arr1[i] != arr2[i]){
          return false;
      }        
  } 
  return true;     
}

let ans = isAnagram("", "");
console.log(ans);

module.exports = isAnagram;
