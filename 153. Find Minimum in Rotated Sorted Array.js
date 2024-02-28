// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


// EXPLANATION

// Using an idea influenced from Binary search

//  3  4  5  1  2

// LEFT = 3 RIGHT = 2

function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // if the given array is lenght of 1 we return the first value
    if(nums.length === 1) {
        return nums[left];
    }

    // if the first index is less than the last index return first value
    // should always be true
    if(nums[left] < nums[right]) {
        return nums[left];
    }
    

    // binary search logic aka while min <= max
    while(left <= right) {
        // inflection point
        const mid = Math.floor((left + right)/2);


        const leftVal = nums[nums[0]];
        const midVal = nums[mid];
        const leftOfMid = nums[mid - 1];
        const rightOfMid = nums[mid + 1];


        if(midVal > rightOfMid) {
            // because all values to the right of mid should be smaller
            return rightOfMid;
        } else if(midVal < leftOfMid) {
            // because all values to the left of mid should be smaller
            return midVal;
        }

        // we will then increment values based on location for binary search
        if(midVal > leftVal) {
            left = mid + 1;
        } else {
            left = mid - 1;
        }

    }

};