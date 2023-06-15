/*
An ant is sitting on an infinite grid of white and black squares. It initially faces right. At each step, it does the following:

(1) At a white square, flip the color of the square, turn 90 degrees right (clockwise), and move forward one unit.
(2) At a black square, flip the color of the square, turn 90 degrees left (counter-clockwise), and move forward one unit.

Write a program to simulate the first K moves that the ant makes and print the final board as a grid. Note that you are not provided with the data structure to represent the grid. This is something you must design yourself. The only input to your method is K. You should print the final grid and return nothing. The method signature might be something like void printKMoves(int k).

Hints:
#474: The tricky bit is handling an infinite grid. What are your options?
#481: Option #1: Do you actually need an infinite grid? Read the problem again. Do you know the max size of the grid?
#533: Option #2: Think about how an ArrayList works. Can you use an ArrayList for this?
#540: Option #2: It's not impossible to use an ArrayList, but it would be tedious. Perhaps it would be easier to build your own, but specialized for matrices.
#559: Option #2: One approach is to just double the size of the array when the ant wanders to an edge. How will you handle the ant wandering into negative coordinates, though? Arrays can't have negative indices.
#570: Option #2: Observe that nothing in the problem stipulates that the label for the coordinates must remain the same. Can you move the ant and all cells into positive coordinates? In other words, what would happen if, whenever you needed to grow the array in a negative direction, you relabeled all the indices such that they were still positive?
#599: Option #3: Another thing to think about is whether you even need a grid to implement this. What information do you actually need in the problem?
#616: Option #3: All you actually need is some way of looking up if a cell is white or black (and of course the position of the ant). Can you just keep a list of all the white cells?
#627: Option #3: You could consider keeping a hash set of all the white cells. How will you be able to print the whole grid, though?
*/
