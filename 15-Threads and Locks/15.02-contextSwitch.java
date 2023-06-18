/*
How would you measure the time spent in a context switch?
 
Hints:
#403: A context switch is the time spent switching between two processes. This happens when you bring one process into execution and swap out the existing process.
#407: Ideally, we would like to record the timestamp when one process "stops" and the timestamp when another process "starts." But how do we know when this swapping will occur?
#415: Try setting up two processes and have them pass a small amount of data back and forth. This will encourage the system to stop one process and bring the other one in.
#441: It's okay if your solution isn't totally perfect. That might not be possible. Discuss the tradeoffs of your approach.
*/
