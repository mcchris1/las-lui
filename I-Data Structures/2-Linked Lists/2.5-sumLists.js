/*
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in *reverse* order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is, 912.

Hints:
#7: Of course, you could convert the linked list to integers, compute the sum, and then convert it back to a new linked list. If you did this in an interview, your interviewer would likely accept the answer, and then see if you could do this without converting it to a number and back.
#30: Try recursion. Suppose you have two lists, A = 1->5->9 (representing 951) and B = 2->3->6->7 (representing 7632), and a function that operates on the remainder of the lists (5->9 and 3->6->7). Could you use this to create the sum method? What is the relationship between sum(1->5->9, 2->3->6->7) and sum(5->, 3->6->7)?
#71: Make sure you have considered linked lists that are not the same length.
#95: Does your algorithm work on linked lists like 9->7->8 and 6->8->5? Double check that.
#109: For the follow-up question: The issue is that when the linked lists aren't the same length, the head of one linked list might represent the 1000's place while the other represents the 10's place. What if you made them the same length? Is there a way to modify the linked list to do that, without changing the value it represents?
*/
