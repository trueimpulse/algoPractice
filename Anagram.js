/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:
validAnagram('','') //true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nagaram') //true
validAnagram('rat', 'car') //false
validAnagram('awesome', 'awesom') //false
validAnagram('qwerty', 'qeywrt') //true
*/

function validAnagram(firstStr, secondStr) {
  //check if the string length is the same
  if (firstStr.length !== secondStr.length) return false;

  //In order to avoid nested loops, we can use the approach of two seperate loops so that we can have the O(n) time.

  //creating a lookup dictionary
  const lookup = {};

  for (let i = 0; i < firstStr.length; i++) {
    let letter = firstStr[i];
    //if letter exists, increment, otherwise set it to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < secondStr.length; i++) {
    let letter = secondStr[i];
    //cannot find letter or letter is zero then its not an anagram
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true;
}
// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");
