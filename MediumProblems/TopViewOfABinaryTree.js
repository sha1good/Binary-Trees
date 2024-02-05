// Problem Statement: Given below is a binary tree. The task is to print the top view of the binary tree. The top view of a binary tree is the set of nodes visible when the tree is viewed from the top.

// Example 1:

// Input:

// Output: 2 1 3
// Example 2:

// Input:

// Output: 40 20 10 30 100
// Solution:

// Intuition:  We can mark straight lines like in the image below and mark them with +ve and -ve indexes. The first node of every line will be my top view.

// Approach:

// First we have to make a queue of pair which have nodes and their respective +ve and -ve indexes.
// Then we need a map data structure to store the lines and the nodes. This map will store the data in the form of sorted orders of keys(Lines).
// Here we will follow the level order traversal.
// Traverse through the nodes starting with root,0 and store them to the queue.
// Until the queue is not empty, store the node  and line no. in 2 separate variable .
// Then check if that line is present in the map or not
// If not present then store the line and the node->val to the map
// Otherwise store the node->left and node->right along with there line nos. to the queue.
// Then print the node->val from the map

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Function to return a list of nodes visible from the top view
  // from left to right in Binary Tree.
  topView(root) {
    let result = [];
    if (!root) return result;

    let map = new Map();

    let queue = [{ node: root, line: 0 }];

    while (queue.length > 0) {
      let { node, line } = queue.shift();

      if (!map.has(line)) {
        // map[line] = node.data;
        map.set(line, []);
      }

      // console.log(map.get(line));

      map.get(line).push(node.data);
      console.log(map);

      if (node.left !== null) {
        queue.push({ node: node.left, line: line - 1 });
      }

      if (node.right !== null) {
        queue.push({ node: node.right, line: line + 1 });
      }
    }
    // Let us sort the line  of each nodes
    let sortedLines = Array.from(map.keys()).sort((a, b) => a - b);
    console.log(sortedLines);
    for (let line of sortedLines) {
      let value = map.get(line);
      console.log(value[0]); // this will print the value of the first index
      result.push(value[0]);
    }
    return result;
  }
}

// Example usage:
// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.right.right = new Node(7);
root.left.right = new Node(5);
root.left.right.left = new Node(6);

// Create an instance of the Solution class
const solution = new Solution();

// Call the topView function and print the result
const result = solution.topView(root);
console.log(result.join(" "));

// Time Complexity: O(N)

// Space Complexity: O(N)

let ade = 1;
let res = [];
console.log(res.push(ade));
