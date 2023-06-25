/*
Given a list of millions of words, design an algorithm to create the largest possible rectangle of letters such that every row forms a word (reading left to right) and every column forms a word (reading top to bottom). The words need not be chosen consecutively from the list, but all rows must be the same length and all columns must be the same height.

Hints:
#477: Start by grouping the dictionary by the word lengths, since you know each column has to be the same length and each row has to be the same length.
#500: Can you find a word rectangle of a specific length and width? What if you just tried all options?
#748: Can you use a trie to terminate early when a rectangle looks invalid?
*/
