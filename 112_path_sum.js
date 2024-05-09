function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// [5,4,8,11,null,13,4,7,2,null,null,null,1]

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.right = new TreeNode(1);

const target = 22;


const dfs = function (node, curSum, targetSum) {
    if (!node) {
        return false;
    }
    curSum += parseInt(node.val);
    if (!node.left && !node.right && curSum == targetSum) {
        return true;
    }
    return (dfs(node.left, curSum, targetSum) || dfs(node.right, curSum, targetSum))
}

const hasPathSum = function (root, targetSum) {
    const found = dfs(root, 0, targetSum);
    return found
};

console.log(hasPathSum(root, target));