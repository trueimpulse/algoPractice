/*
Write a function same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be the same.
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be the same frequency)
*/

function same(arr1, arr2){
    if(arr1.lenght !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of frequencyCounter2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
}