// // Problem Statement: Given a binary tree, a node from the tree, and an integer ‘K’,
// // find all nodes that are at a distance ‘K’
// // from the given node and return the list of these nodes.

// Solution:
// Approach:
// It can be visualized that all nodes present at distance ‘K’ from a node are radially and symmetrically outwards from it with a step size of ‘K’.

// To efficiently travel away from the target node one step at a time, we need to be able to access all adjacent nodes (left, right and parent) of each node. While the left and right child nodes are directly accessible through pointers, accessing the parent node requires maintaining an additional hashmap of the node as key and value as its parent.

// The approach involves three primary steps: first, creating parent-child mappings through BFS, then locating and storing the target node, and finally, employing DFS from the target node to identify nodes at distance ‘K’.

// Algorithm:
// Step 1: Create Parental Node Map with BFS

// Initialize a queue and a parent hashmap to store the parent of each node.
// Insert the root node into the queue.
// While the queue is not empty, pop the front node of the queue, set its parents as the popped node, and insert the children back into the queue.

// Step 2: Locate the Target Node

// If a reference to the target node is provided, use the given reference node. If only the value of the target node is given, perform any traversal method (inorder, postorder, or preorder) to find the node with the given value. Store the reference of the found node in the ‘target’ node pointer.

// Read more about this in detail here: Inorder, Preorder, Postorder Traversal of Binary Tree

// Step 3:  Perform a DFS traversal from the target node to find nodes at distance ‘K’

// Initialize a queue and a visited hashmap.
// Insert the target node into the queue and initialize the distance from target ‘dis’ as 0.
// While the queue is not empty, pop the front node.
// Push its non-visited adjacent nodes (parent, left child, right child) back into the queue. Mark the adjacent nodes as visited and increment the distance from the target ‘dis’ by one.
// If the distance from the target node is equal to K then add the node to the list of nodes at distance K (result array).

// Step 4: Return the list of nodes found at distance ‘K’ from the target node.

// TreeNode structure
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class Solution {
  // Helper function to mark
  // parents of nodes in the tree
  mark_parent(root, parent_track) {
    // Level Order Traversal
    // by taking a queue
    let queue = [];
    queue.push(root);
    // Iterate over all nodes
    while (queue.length > 0) {
      let current = queue.shift();
      // Assign parents to left child
      // and right child if they exist
      if (current.left) {
        parent_track.set(current.left, current);
        queue.push(current.left);
      }

      if (current.right) {
        parent_track.set(current.right, current);
        queue.push(current.right);
      }
    }
  }
  // Function to find nodes at a
  // distance K from the target node
  distanceK(root, target, k) {
    // Map to mark the parents of all nodes
    let parent_track = new Map();
    // Mark parents of all nodes
    this.mark_parent(root, parent_track);
    // Keeps track of visited nodes
    let visited = new Map();
    // Queue to perform level-order traversal
    let queue = [];
    // Start traversal from the target node
    queue.push(target);

    // Tracks the current level
    // while traversing the tree
    let current_level = 0;

    // Continue traversal until
    // the queue is empty
    while (queue.length > 0) {
      // Get the number of nodes
      // at the current level
      let size = queue.length;
      if (current_level++ === k) {
        // Break if the current level
        // matches the required distance (k)
        break;
      }
      // Traverse the current level of the tree
      for (let i = 0; i < size; i++) {
        // Get the front node in the queue
        let current = queue.shift();

        // Add unvisited left child to the queue
        if (current.left && !visited.get(current.left)) {
          queue.push(current.left);
          // Mark left child as visited
          visited.set(current.left, true);
        }

        // Add unvisited right child to the queue
        if (current.right && !visited.get(current.right)) {
          queue.push(current.right);
          // Mark right child as visited
          visited.set(current.right, true);
        }
        // Add unvisited parent node to the queue
        if (
          parent_track.get(current) &&
          !visited.get(parent_track.get(current))
        ) {
          queue.push(parent_track.get(current));
          // Mark parent node as visited
          visited.set(parent_track.get(current), true);
        }
      }
    }
    // Stores nodes at distance k from the target
    let result = [];
    while (queue.length !== 0) {
      let current = queue.shift();
      result.push(current.val);
    }
    // Return nodes at distance
    // K from the target
    return result;
  }
}

// Main function
function main() {
  // Create a sample tree for testing
  let root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);

  let sol = new Solution();
  let target = root.left;
  let k = 2;
  // Find nodes at distance 2 from the target node
  let result = sol.distanceK(root, target, k);

  console.log(
    `Nodes at distance ${k} from target node ${target.val}: ${result.join(" ")}`
  );
}

main();


// Time Complexity: O(2N + log N ) The time complexity arises from traversing the tree to create the parent hashmap, 
// which involves visiting every node once hence O(N), 
// exploring all nodes at a distance of ‘K’ which will be O(N) in the worst case, 
// and the logarithmic lookup time for the hashmap is O(log N) 
// in the worst scenario as well hence O(N + N + log N) which simplified to O(N).

// Space Complexity: O(N) The space complexity stems from the data structures used, 
// O(N) for the parent hashmap, O(N) for the queue of DFS, 
// and O(N) for the visited hashmap hence overall our space complexity is O(3N) ~ O(N).
