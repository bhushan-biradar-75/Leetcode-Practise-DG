//Leetcode No 977 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


var arr = [2,3,1];
var square = arr.map((ele)=>{
    return ele * ele;
})
console.log(square.sort())

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,,,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.


var removeElement = function (nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
        
    }
    return nums.length
};

console.log(searchInsert([1,3,5,6], 5))



// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


var generate = function(numRows) {
    let ret = [];
    
    for(let i = 0; i < numRows; i++)
    {
        ret[i] = [];
        ret[i][0] = ret[i][i] = 1;
        for(let j = 1; j < i; j++)
        {
               ret[i][j] = ret[i-1][j] + ret[i-1][j-1]; 
        }
    }
    return ret;
}
console.log(generate(5))


// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

 var maxSubArray = function(nums) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < nums.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < nums.length; j++) {
      sumFixedStart += nums[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
};




[2,2,1]
      let nums = [4,1,2,1,2];
      function checkSome(nums) {
		  
        let num = nums.sort();
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
          if (num[i] === num[i + 1]) {
            return;
          } else if (num[i] === undefined) {
            return num[i];
          } else {
            return num[i];
          }
        }
      }
      console.log(checkSome(nums));
	
      
Input: nums = [1,3,5,6], target = 5
Output: 2   

   let nums = [1,3,5,6]  , target =2;
   
	function searchNum (nums,target){
		let num = nums.sort()
       for (let i = 0; i < nums.length; i++) {
		if (num[i]>=target) {
			return i 
		} 
	   }
	}
 console.log(searchNum(nums,target))
