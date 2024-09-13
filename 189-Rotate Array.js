// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

//         0 1 2 3 4 5 6
// nums = [1,2,3,4,5,6,7], k = 3

// index = 7 - 3 = 4

// easy for loop solution
var rotate = function (nums, k) {
  const newArray = [];

  // we need this in cases where k is greater than the array size.
  // In that case we can take remainder (i.e k%array.length)
  // or subtract array size till the k becomes less than array.
  k = k % nums.length;
  if (k != 0) {
    for (i = nums.length - k; i < nums.length; i++) {
      newArray.push(nums[i]);
    }
    for (i = 0; i < nums.length - k; i++) {
      newArray.push(nums[i]);
    }
    for (var i = 0; i < nums.length; i++) {
      nums[i] = newArray[i];
    }
  }
};

// Two pointers solution
var rotate = function (nums, k) {
  k = k % nums.length;
  let left = 0;
  let right = nums.length - 1;

  // reverse full given array
  // from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  nums = reverseArr(nums, left, right);

  // reverse part from 0 to k - 1;
  // from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  left = 0;
  right = k - 1;
  nums = reverseArr(nums, left, right);

  // reverse part from k to the end;
  // from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  left = k;
  right = nums.length - 1;
  nums = reverseArr(nums, left, right);

  function reverseArr(nums, l, r) {
    while (l < r) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
    return nums;
  }
};
