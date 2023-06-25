/*
Consider a simple data structure called BiNode, which has pointers to two other nodes. 

public class BiNode {
    public BiNode node1, node2;
    public int data;
}

The data structure BiNode could be used to represent both a binary tree (where node1 is the left node and node2 is the right node) or a doubly linked list (where node1 is the previous node and node2 is the next node). Implement a method to convert a binary search tree (implemented with BiNode) into a doubly linked list. The values should be kept in order and the operation should be performed in place (that is, on the original data structure).

Hints:
#509: Try a recursive approach.
#608: Think about it this way: If you had methods called convertLeft and convertRight (which would convert left and right subtrees to doubly linked lists), could you put those together to convert the whole tree to a doubly linked list?
#646: Once you have a basic idea for a recursive algorithm, you might get stuck on this: sometimes your recursive algorithm needs to return the start of the linked list, and sometimes it needs to return the end. There are multiple ways of solving this issue. Brainstorm some of them.
#680: To handle whether your recursive algorithm should return the start or the end of the linked list, you could try to pass a parameter down that acts as a flag. This won't work very well, though. The problem is that when you call convert(current.left), you want to get the end of left's linked list. This way you can join the end of the linked list to current. But, if current is someone else's right subtree, convert(current) needs to pass back the start of the linked list (which is actually the start of current.left's linked list). Really, you need both the start and end of the linked list.
#701: Many people get stuck at this point and aren't sure what to do. Sometimes they need the start of the linked list, and sometimes they need the end. A given node doesn't necessarily know what to return on its convert call. Sometimes the simple solution is easiest: always return both. What are some ways you could do this?
#719: You could return both the start and end of a linked list in multiple ways. You could return a two-element array. You could define a new data structure to hold the start and end. You could re-use the BiNode data structure. If you're working in a language that supports this (like Python), you could just return multiple values. You could solve the problem as a circular linked list, with the start's previous pointer pointing to the end (and then break the circular list in a wrapper method). Explore these solutions. Which one do you like most and why?
*/
