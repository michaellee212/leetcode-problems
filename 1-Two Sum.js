// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:
// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];

      if (another in map) {
        return [map[another], i];
      }
      map[nums[i]] = i;
    }
    
    return null;
  };

const twoSum = (nums, target) => {
  let set = new Map()

  for (let i = 0; i < nums.length; i++) {
    let e = nums[i]
    if(set.has(target - e)) {
      return [set.get(target - e), i];
    }
    if(set.has(e - target)) {
      return [set.get(e - target), i];
    }
  set.set(e, i)
  }
  return [];
};


const twoSum2 = (nums, target) => {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let e = nums[i]
    if(set.has(target - e)) {
      return [target - e, e]
    }
    if(set.has(e - target)) {
      return [e - target, e]
    }
    set.add(e);
  }
  return [];
};
  

const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp[nums[i] ]>=0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};