// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8


var generateParenthesis = function(n) {
    
    // create array (hash)
    let result = [];
    
    // this problem will require recursion so we create our go function to create the parenthesises
    function go(str, closedLeft, openLeft) {
        if (str.length === n*2) {
            result.push(str);
        }
        if (openLeft > 0) {
            go(str + '(', closedLeft + 1, openLeft - 1);
        }
        if (closedLeft > 0) {
            go(str + ')', closedLeft - 1, openLeft);
        }
    }
   
    go("", 0, n);
    return result;
    
};