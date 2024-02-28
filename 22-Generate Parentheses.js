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



// n = 3, len(str) = 5
// char = 6

// (()
// ( -> (
// )

// cond1 len(str) == 2n{

// }

// cond2 ? "("
//  ( n times
//  countLeft = n
 

// cond3 ? ")"

// countRight <= countLeft

// ) n times


function generateParenthesis(n) {
    
    let arr = [];
    
    function recur(str, countRight, countLeft) {
        if(str.length === 2*n) {
            
            arr.push(str)
            return;
        }
        
        console.log("countLeft ", countLeft);
        console.log("countRight ", countRight);
        
        if(countLeft < n) {
            recur(str + "(", countRight, countLeft + 1);
        }

        if(countRight < countLeft) {
            recur(str + ")", countRight + 1, countLeft);
        }
    }
    
    recur("", 0, 0)
    console.log(arr);

    return arr;
    
}