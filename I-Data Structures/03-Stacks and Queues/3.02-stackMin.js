/*
How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

Hints:
#27: Observe that the minimum element doesn't change very often. It only changes when a smaller element is added, or when the smallest element is popped.
#59: What if we kept track of extra data at each stack node? What sort of data might make it easier to solve the problem?
#78: Consider having each node know the minimum of its "substack" (all the elements beneath it, including itself).
*/
