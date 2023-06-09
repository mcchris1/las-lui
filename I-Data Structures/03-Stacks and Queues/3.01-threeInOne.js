/*
Describe how you could use a single array to implement three stacks.

Hints:
#2: A stack is simply a data structure in which the most recently added elements are removed first. Can you simulate a single stack using an array? Remember that there are many possible solutions, and there are tradeoffs of each.
#12: We could simulate three stacks in an array by just allocating the first third of the array to the first stack, the second third to the second stack, and the final third to the third stack. One might actually be much bigger than the others, though. Can we be more flexible with the divisions?
#38: If you want to allow for flexible divisions, you can shift stacks around. Can you ensure that all available capacity is used?
#58: Try thinking about the array as circular, such that the end of the array "wraps around" to the start of the array.
*/
