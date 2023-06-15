/*
Given an arithmetic equation consisting of positive integers, +, -, * and / (no parentheses), compute the result.

EXAMPLE
Input:  2*3+5/6*3+15
Output: 23.5

Hints:
#521: Can we just process the expression from left to right? Why might this fail?
#624: Multiplication and division are higher priority operations. In an expression like 3*4 + 5*9/2 + 3, the multiplication and division parts need to be grouped together.
#665: Consider thinking about it as, when you get to a multiplication or division sign, jumping to a separate "process" to compute the result of this chunk.
#698: You can also maintain two stacks, one for the operators and one for the numbers. You push a number onto the stack every time you see it. What about the operators? When do you pop operators from the stack and apply them to the numbers?
*/
