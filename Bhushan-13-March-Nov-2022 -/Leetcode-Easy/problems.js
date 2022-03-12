// Easy Qu

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var twosum = function(arr,ip)
{
  for(let i=0; i<arr.length; i++)
  {
    for(let j=0; j<arr.length; j++)
    {
        if(arr[i] + arr[j] == ip)
        {
          return [i,j]
        }
    }
  }
}
console.log(twosum([8,7,1,4],15))

//for index value below programe is working fine

var arr = [2,7,11,15];

var ip = 9;

for (i = 0; i < arr.length; i++) {
  //it is use for outer loop

  for (j = i + 1; j < arr.length; j++) {
    //it is use for inner loop

    if (arr[i] + arr[j] == ip) {
      //conditional statement

      console.log([arr[i],arr[j]]);
    }
  }
  break;
}


// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.


// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

var num1 = [1,2,3,4]
var num2 = [2,3]

var findintersection = num1.filter((cele)=>{
    return num2.includes(cele);
});

console.log([... new Set(findintersection)]);

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the* large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


var plusOne = function(digits) {

    let digitsJoin=digits.join('');

    let digitsNumber=Number(digitsJoin)+1;

    return digitsNumber.toString().split('');

    };

    // Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

    // Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.


var removeDuplicates = function(nums) {​​​

 if(nums.length == 0) return 0;

 let i = 0;
 for (let j = 1; j < nums.length; j ++){​​​
 if(nums[j] !== nums[i]){​​​
 i++;
 nums[i] = nums[j];
 }​​​
 }​​​

 return i + 1
}​​​
