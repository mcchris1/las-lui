/*
Each year, the government releases a list of the 10000 most common baby names and their frequencies (the number of babies with that name). The only problem with this is that some names have multiple spellings. For example, "John" and "Jon" are essentially the same name but would be listed separately in the list. Given two lists, one of names/frequencies and the other of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each name. Note that if John and Jon are synonyms, and Jon and Johnny are synonyms, then John and Johnny are synonyms. (It is both transitive and symmetric.) In the final list, any name can be used as the "real" name.

EXAMPLE
Input:  Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
        Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
Output: John (27), Kris (36)

Hints:
#478: Discuss the naive approach: merging names together when they are synonyms. How would you identify transitive relationships? A == B, A == C, and C == D implies A == D == B == C.
#493: The core part of the problem is to group names into the various spellings. From there, figuring out the frequencies is relatively easy.
#512: One thing to try is maintaining a mapping of each name to its "true" spelling. You would also need to map from a true spelling to all the synonyms. Sometimes, you might need to merge two different groups of names. Play around with this algorithm to see if you can get it to work. Then see if you can simplify/optimize it.
#537: An easier way of taking the above approach is to have each name map to a list of alternate spellings. What should happen when a name in one group is set equal to a name in another group?
#586: If each name maps to a list of its alternate spellings, you might have to update a lot of lists when you set X and Y as synonyms. If X is a synonym of {A, B, C}, and Y is a synonym of {D, E, F} then you would need to add {Y, D, E, F} to A's synonym list, B's synonym list, C's synonym list, and X's synonym list. Ditto for {Y, D, E, F}. Can we make this faster?
#605: Instead, X, A, B, and C should map to the same instance of the set {X, A, B, C}. Y, D, E, and F should map to the same instance of {Y, D, E, F}. When we set X and Y as synonyms, we can then just copy one of the sets into the other (e.g., add {Y, D, E, F} to {X, A, B, C}). How else do we change the hash table?
#655: An alternative approach is to think of this as a graph. How would this work?
#675: We can treat adding X, Y as synonyms as adding an edge between the X node and the Y node. How then do we figure out the groups of synonyms?
#704: Each connected subgraph represents a group of synonyms. To find each group, we can do repeated breadth-first (or depth-first) searches.
*/
