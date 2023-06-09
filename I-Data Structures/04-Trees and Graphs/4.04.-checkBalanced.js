/*
Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

Hints:
#21: Think about the definition of a balanced tree. Can you check that condition for a single node? Can you check it for every node?
#33: If you've developed a brute force solution, be careful about its runtime. If you are computing the height of the subtrees for each node, you could have a pretty inefficient algorithm.
#49: What if you could modify the binary tree node class to allow a node to store the height of its subtree?
#105: You don't need to modify the binary tree class to store the height of the subtree. Can your recursive function compute the height of each subtree while also checking if a node is balanced? Try having the function return multiple values.
#124: Actually, you can just have a single checkHeight function that does both the height computation and the balance check. An integer return value can be used to indicate both.
*/
