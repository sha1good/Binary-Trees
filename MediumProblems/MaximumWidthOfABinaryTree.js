// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// It is guaranteed that the answer will in the range of a 32-bit signed integer.

// Example 1:

// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
// Example 2:

// Input: root = [1,3,2,5,null,null,9,6,null,7]
// Output: 7
// Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
// Example 3:

// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width exists in the second level with length 2 (3,2).

// Constraints:

// The number of nodes in the tree is in the range [1, 3000].
// -100 <= Node.val <= 100

// Approach:

// We will perform a special level order traversal with two loops where inner loops traverse the nodes of a single level. This is to ensure that we can do our calculations once a single level is traversed. In the traversal, we will assign an index to a node. The indexing strategy is described as below:

// If we index the tree as shown above we can easily calculate the width of the tree as rightMostNode – leftMostNode +1. Then we can return the maximum width as our answer. To store the index, we can use a pair of values in our queue( that we use for level order traversal). If we are at index i, then its left and right child are(in 0-based indexing): 2*i+1 and 2*i+2 respectively. Please note that NULL nodes are not hampering the indexing in any way.

// Prevention of Integer Overflow

// This approach has a problem, as we are multiplying 2 to the current index, it can happen in a tree that we overshoot the bound of an integer. Therefore, we need to find a strategy to prevent it.

// Before starting a level, we can store the left-most index in a variable( say curMin). Now whenever we assign the index for its children, we take the parent node index as (i-curMin) rather than i. The below illustration will clear the concept.

// As our final answer is a range of nodes in a level, i,e rightMost- leftMost+1; this strategy will not affect the answer and at the same time prevent the integer overflow case.

// The algorithm approach can be stated as:

// We take a queue and push the root node along with index 0.
// We traverse the tree using a level order traversal.
// In the level order traversal we set another loop to run for the size of the queue, so that we visit the same level nodes inside it.
// Before a level starts, we use a variable(say curMin) to store the index of the first node.
// We assign an index to every node, and to its children as described above.
// When the inner loop is at the first node of a level, we store its index in another variable(sayleftMost)
// When the inner loop is at the last node of a level, we store its index in another variable(say rightMost)
// After a level  in the outer loop, we calculate the width of the level as (rightMost – leftMost +1).
// We return the maximum width as the answer.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function widthOfBinaryTree(root) {
  if (root === null) return 0;

  let answer = 0;

  // let queue = [];
  //queue.push([root, 0]);
  let queue = [{ node: root, index: 0 }];

  while (queue.length > 0) {
    let size = queue.length;
    //  let currentMin = queue[0][1];
    let currentMin = queue[0].index;
    let leftMost, rightMost;
    for (let i = 0; i < size; i++) {
      // let [node, index] = queue.shift();
      let { node, index } = queue.shift();
      let currentIndex = index - currentMin;

      if (i === 0) {
        leftMost = currentIndex;
      }
      if (i === size - 1) {
        rightMost = currentIndex;
      }

      if (node.left) {
        //queue.push([node.left, 2 * currentIndex + 1]);
        queue.push({ node: node.left, index: 2 * currentIndex + 1 });
      }

      if (node.right) {
        queue.push({ node: node.right, index: 2 * currentIndex + 2 });
      }
    }

    answer = Math.max(answer, rightMost - leftMost + 1);
  }

  return answer;
}
function newNode(data) {
  let node = new TreeNode(data);
  node.left = null;
  node.right = null;
  return node;
}
function main() {
  let root = newNode(1);
  root.left = newNode(3);
  root.right = newNode(2);
  root.left.left = newNode(5);
  root.left.right = newNode(3);
  root.right.right = newNode(9);

  let maxWidth = widthOfBinaryTree(root);
  console.log(" The maximum width of a binary tree is:", maxWidth);
}

main();


// The maximum width of the Binary Tree is 8

// Time Complexity: O(N)

// Reason: We are doing a simple level order traversal. 
// The inner loop simply traverses the nodes level-wise and doesn’t add to the complexity.

// Space Complexity: O(N)