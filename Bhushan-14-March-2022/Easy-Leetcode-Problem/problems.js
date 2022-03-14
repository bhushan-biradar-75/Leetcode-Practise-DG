/ https://leetcode.com/problems/sort-colors/

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

function sortcolors(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    console.log(arr);
}

let arr = [2, 0, 2, 1, 1, 0];
sortcolors(arr);



/ Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

function subset(arr) {
    let empty = [[]];
    empty.push(arr);
    for (let i = 0; i < arr.length; i++) {
        empty.push([arr[i]]);
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                empty.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(empty);
}

subset([1,2,3])



[10:47 PM, 3/14/2022] Rakesh Sankrani: // Q169. Given an array nums of size n, return the majority element.
//       The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//       Input: nums = [3,2,3]
//       Output: 3

var majorityElement = function(nums) {
    let result = 0, count = 0;
  
     for(let i = 0; i<nums.length; i++ ) {
         if(count == 0){
             result = nums[ i ];
             count = 1;
         }else if(result == nums[i]){
            count++;
         }else{
            count--;
         }
     }
  
     return result;
 }
 console.log(majorityElement([2,2,1,1,1,2,2]))


// Q 125.. A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'')
    s = s.toLowerCase()
    for (let [i,j]=[0,s.length-1]; i<j;) {
        if (s[i]!=s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))// Q169. Given an array nums of size n, return the majority element.
//       The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//       Input: nums = [3,2,3]
//       Output: 3

var majorityElement = function(nums) {
    let result = 0, count = 0;
  
     for(let i = 0; i<nums.length; i++ ) {
         if(count == 0){
             result = nums[ i ];
             count = 1;
         }else if(result == nums[i]){
            count++;
         }else{
            count--;
         }
     }
  
     return result;
 }
 console.log(majorityElement([2,2,1,1,1,2,2]))


// Q 125.. A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'')
    s = s.toLowerCase()
    for (let [i,j]=[0,s.length-1]; i<j;) {
        if (s[i]!=s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))


