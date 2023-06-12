/*
You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through i have enough space to fit all of M. That is, if M = 10011, you can assume that there are at least 5 bits between j and i. You would not, for example, have j = 3 and i =2, because M could not fully fit between bit 3 and bit 2. 

EXAMPLE
Input:  N = 10000000000, M = 10011, i =2, j = 6
Output: N = 10001001100

Hints:
#137: Break this into parts. Focus first on clearing the appropriate bits.
#169: To clear the bits, create a "bit mask" that looks like a series of 1s, then 0s, then 1s.
#215: It's easy to create a bit mask of 0s at the beginning or end. But how do you create a bit mask with a bunch of zeroes in the middle? Do it the easy way: Create a bit mask for the left side and then another one for the right side. Then you can merge those.
*/
