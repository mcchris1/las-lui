/*
Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree. 

Hints:
#10: If each node has a link to its parent, we could leverage the approach from question 2.7. However, our interviewer might not let us make this assumption.
#16: The first common ancestor is the deepest node such that p and q are both descendants. Think about how you might identify this node.
#28: How would you figure out if p is a descendant of a node n?
#36: Start with the root. Can you identify if root is the first common ancestor? If it is not, can you identify which side of root the first common ancestor is on?
#46: Try a recursive approach. Check if p and q are descendants of the left subtree and the right subtree. If they are descendants of different subtrees, then the current node is the first common ancestor. If they are descendants of the same subtree, then that subtree holds the first common ancestor. Now, how do you implement this efficiently?
#70: In the more naive algorithm, we had one method that indicated if x is a descendant of n, and another method that would recurse to find the first common ancestor. This is repeatedly searching the same elements in a subtree. We should merge this into one firstCommonAncestor function. What return values would give us the information we need?
#80: The firstCommonAncestor function could return the first common ancestor (if p and q are both contained in the tree), p if p is in the tree and not q, q if q is in the tree and not p, and null otherwise.
#96: Careful! Does your algorithm handle the case where only one node exists? What will happen? You might need to tweak the return values a bit.
*/
