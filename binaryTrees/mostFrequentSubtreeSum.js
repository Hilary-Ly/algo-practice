/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var findFrequentTreeSum = function(root) {
    const counts = {}
    const max = { val: -Infinity }
    const sums = []
    dfs(root, counts, max)
    
    for (let key in counts) {
        if (counts[key] === max.val) sums.push(key)
    }
    return sums
};

function dfs(root, counts, max) {
    if (!root) return 0
    const sum = root.val + dfs(root.left, counts, max) + dfs(root.right, counts, max)
    counts[sum] = counts[sum] + 1 || 1
    max.val = Math.max(max.val, counts[sum])
    return sum
}