// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 



// Time complexity: O(n)
// Space complexity: O(n)

var majorityElement = function(nums) {
    let map = {};
    let val = 0;
    let count = 0;

    for(i = 0; i < nums.length; i++) {
        map[nums[i]] = 1 + (map[nums[i]] || 0);
        if (map[nums[i]] > count) {
            val = nums[i];
            count = map[nums[i]];
        }
    }
    return val;
};




// Faster
// Time complexity: O(n)
// Space complexity: O(1)

var majorityElement = function(nums) {
    let res = 0;
    let majority = 0;
     
     for (let n of nums) {
         if (majority === 0) {
             res = n;
         }
         
         majority += n === res ? 1 : -1;
     }
     
     return res;    
 };