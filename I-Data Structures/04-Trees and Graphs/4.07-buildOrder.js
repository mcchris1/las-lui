/*
You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error. 

EXAMPLE
Input:
    projects: a, b, c, d, e, f
    dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
Output: f, e, a, b, d, c

Hints:
#26: Build a directed graph representing the dependencies. Each node is a project and an edge exists from A to B if B depends on A (A must be built before B). You can also build it the other way if it's easier for you. 
#47: Look at this graph. Is there any node you can identify that will definitely be okay to build first?
#60: If you identify a node without any incoming edges, then it can definitely be built. Find this node (there could be multiple) and add it to the  build order. Then, what does this mean for its outgoing edges?
#85: Once you decide to build a node, its outgoing edge can be deleted. After you've done this, can you find other nodes that are free and clear to build?
#125: As a totally different approach: Consider doing a depth-first search starting from an arbitrary node. What is the relationship between this depth-first search and a valid build order?
#133: Pick an arbitrary node and do a depth-first search on it. Once we get to the end of a path, we know that this node can be the last one built, since no nodes depend on it. What does this mean about the nodes right before it?
*/
