/*
You have a large text file containing words. Given any two words, find the shortest distance (in terms of number of words) between them in the file. If the operation will be repeated many times for the same file (but different pairs of words), can you optimize your solution?

Hints:
#486: Consider first the algorithm for finding the closest distance if you will run the algorithm only once. You should be able to do this in O(N) time, where N is the number of words in the document.
#501: Adapt your algorithm for one execution of the algorithm for repeated executions. What is the slow part? Can you optimize it?
#538: You could build a lookup table that maps from a word to a list of the locations where each word appears. How then could you find the closest two locations?
#558: If you had a list of the occurrences of each word, then you are really looking for a pair of values within two arrays (one value for each array) with the smallest difference. This could be a fairly similar algorithm to your initial algorithm.
#633: Can you just iterate through both arrays with two pointers? You should be able to do it in O(A+B) time, where A and B are the sizes of the two arrays.
*/
