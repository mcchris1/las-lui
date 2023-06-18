/*
Using Lambda expressions, write a function List<Integer> getRandomSubset(List<Integer> list) that returns a random subset of arbitrary size. All subsets (including the empty set) should be equally likely to be chosen.

Hints:
#443: A naive approach is to pick a random subset size z and then iterate through the elements, putting it in the set with probability z/list_size. Why would this not work?
#450: Pick the list of all the subsets of an n-element set. For any given item x, half of the subsets contain x and half do not.
#457: Do not pick the length of the subset in advance. You don't need to. Instead, think about this as picking whether each element will be put into the set.
*/
