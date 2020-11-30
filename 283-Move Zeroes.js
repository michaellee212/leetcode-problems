// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    let index = 0;
    
    // loop through and replace the value to shift the one with the value to the back of the array
    for(let i=0; i < nums.length; i++) {
  
        let item = nums[i];

        if(nums[i] !== 0) {          
            nums[index] =  item;
            index++;
        }
    }

    // replace those pushed back values to 0     
    for(let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
};