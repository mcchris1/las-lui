/*
Imagine a web server for a simplified search engine. This system has 100 machines to respond to search queries, which may then call out using processSearch(string query) to another cluster of machines to actually get the result. The machine which responds to a given query is chosen at random, so you cannot guarantee that the same machine will always respond to the same request. The method processSearch is very expensive. Design a caching mechanism for the most recent queries. Be sure to explain how you would update the cache when data changes. 

Hints:
#259: You may need to make some assumptions (in part because you don't have an interviewer here). That's okay. Make those assumptions explicit.
#274: Think about how you could design this for a single machine. Would you want a hash table? How would that work?
#293: Can you combine a hash table and a linked list to get the best of both worlds?
#311: How would you scale this to a larger system?
*/
