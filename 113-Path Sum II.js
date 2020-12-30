// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:
// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1

// Return:
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]


var pathSum = function(root, sum) {
    
    if(!root) {
        return [];
    }
    
    let res = []
    
    const helper = (node, target, prevPaths) => {
        prevPaths.push(node.val);
        
        if(!node.left && !node.right && node.val === target) {
            res.push(prevPaths);
        }
        
        if(node.left) {
            helper(node.left, target - node.val, prevPaths.slice())
        }
        
        if(node.right) {
            helper(node.right, target - node.val, prevPaths.slice())
        }
        
    }
    
    helper(root, sum, [])
    return res;
    
};