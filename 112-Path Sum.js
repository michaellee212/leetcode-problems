// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:
// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1

// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

var hasPathSum = function(root, sum) {
    
    let equal = false;
    
    // define our helper function to add and move down the binary tree
    const helper = (node, currentSum) => {
        
        if(!node || equal) {
            return 
        }
        
        // add the node value to the current sum
        currentSum += node.val

        // if there is no node child on the left AND right AND the current sum = sum
        // we got the valued sum
        if(!node.left && !node.right && currentSum === sum) {          
            equal = true;
        }        
        
        // if not we traverse the left and right child and continue
        helper(node.left, currentSum);
        helper(node.right,currentSum);
            
    }
    // call the helper function
    helper(root, 0);
    
    return equal;
    
};