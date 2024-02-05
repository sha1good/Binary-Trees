// Problem statement
// You have a binary tree of 'N' unique nodes and a Start node from where the tree will start to burn. Given that the Start node will always exist in the tree, your task is to print the time (in minutes) that it will take to burn the whole tree.

// It is given that it takes 1 minute for the fire to travel from the burning node to its adjacent node and burn down the adjacent node.

// For Example :
// For the given binary tree: [1, 2, 3, -1, -1, 4, 5, -1, -1, -1, -1]
// Start Node: 3

//     1
//    / \
//   2   3
//      / \
//     4   5

// Output: 2

// Explanation :
// In the zeroth minute, Node 3 will start to burn.

// After one minute, Nodes (1, 4, 5) that are adjacent to 3 will burn completely.

// After two minutes, the only remaining Node 2 will be burnt and there will be no nodes remaining in the binary tree.

// So, the whole tree will burn in 2 minutes.
// Detailed explanation ( Input/output format, Notes, Images )
// Sample Input 1 :
// 1 2 3 4 -1 -1 5 -1 -1 -1 -1
// 2
// Sample Output 1 :
// 3
// Explanation Of Sample Input 1 :
// The given binary tree will look as -

// The Start node is 2.

// In the zeroth minute, Node 2 will start to burn.

// After one minute, Nodes 1 and 4 that are adjacent to 2 will burn completely.

// After two minutes, Node 3 that is adjacent to node 1 will burn completely.

// After three minutes, the only remaining Node 5 will be burnt and there will be no nodes remaining in the binary tree i.e the whole tree will burn in 3 minutes.
// Sample Input 2 :
// 3 1 2 5 6 -1 -1 -1 -1 -1 -1
// 3
// Sample Output 2 :
// 2
// Constraints :
// 1 <= N <= 10^5
// 1 <= Value of Tree Node <= 10^9
// 1 <= Value of Start Node <= 10^9

// Time limit: 1 sec

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class Solution {
  bfsToMapParent(root, parent_track) {
    let queue = [];
    queue.push(root);

    while (queue.length !== 0) {
      let current = queue.shift();

      if (current.left) {
        queue.push(current.left);
        parent_track.set(current.left, current);
      }

      if (current.right) {
        queue.push(current.right);
        parent_track.set(current.right, current);
      }
    }
  }
  findMaxDistanceK(root, target) {
    let parent_track = new Map();
    this.bfsToMapParent(root, parent_track);

    let queue = [];
    queue.push(target);
    let time = 0;
    let visited = new Map();
    while (queue.length > 0) {
      let size = queue.length;
      let burn = 0;
      for (let i = 0; i < size; i++) {
        let current = queue.shift();
        if (current.left && !visited.get(current.left)) {
          burn = 1;
          visited.set(current.left, true);
          queue.push(current.left);
        }

        if (current.right && !visited.get(current.right)) {
          burn = 1;
          visited.set(current.right, true);
          queue.push(current.right);
        }

        if (
          parent_track.get(current) &&
          !visited.get(parent_track.get(current))
        ) {
          burn = 1;
          visited.set(parent_track.get(current), true);
          queue.push(parent_track.get(current));
        }
      }

      if (burn) time++;
    }
    return time;
  }
}

// Main function
function main() {
  // Create a sample tree for testing
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);

  let sol = new Solution();
  let target = root.right;

  // Find nodes at distance 2 from the target node
  let result = sol.findMaxDistanceK(root, target);

  console.log(` Time taken to burn from Nodes at ${target.val}: ${result}`);
}

main();

// Time Complexity: O(2N + log N ) The time complexity arises from traversing the tree to create the parent hashmap, which involves visiting every node once hence O(N), exploring all nodes at a distance of ‘K’ which will be O(N) in the worst case, and the logarithmic lookup time for the hashmap is O( log N) in the worst scenario as well hence O(N + N + log N) which simplified to O(N).

// Space Complexity: O(N) The space complexity stems from the data structures used, O(N) for the parent hashmap, O(N) for the queue of DFS, and O(N) for the visited hashmap hence overall our space complexity is O(3N) ~ O(N).
