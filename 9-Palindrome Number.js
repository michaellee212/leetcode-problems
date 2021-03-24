// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

// Constraints:
// -231 <= x <= 231 - 1

var isPalindrome = function (x) {
    // if 0 return false
    if (x < 0) {
      return false;
    }
    // reverse number
    const reverseResult = Number(x.toString().split("").reverse().join(""));
    // if reversed number = x return true
    if(x === reverseResult){
      return true
    } 
    return false;
  }


// if we cant turn it into a string
  const isPalindrome = (x) => {
    if (x < 0) {
      return false;
    }
  
    let reverse = 0;
  
    for (let i = x; i >= 1; i = Math.floor(i/10)) {
      reverse = reverse*10 + i%10;
    }
  
    return reverse === x;
  
  }
  