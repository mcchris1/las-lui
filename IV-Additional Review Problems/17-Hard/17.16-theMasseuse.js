/*
A popular masseuse receives a sequence of back-to-back appointment requests and is debating which ones to accept. She needs a 15-minute break between appointments and therefore she cannot accept any adjacent requests. Given a sequence of back-to-back appointment requests (all multiples of 15 minutes, none overlap, and none can be moved), find the optimal (highest total booked minutes) set the masseuse can honor. Return the number of minutes.

EXAMPLE
Input:  {30, 15, 60, 75, 45, 15, 15, 45}
Output: 180 minutes ({30, 60, 45, 45})

Hints:
#495: There are recursive and iterative solutions to this problem, but it's probably easier to start with the recursive solution.
#504: Recursive solution: You have two choices at each appointment (take the appointment or reject the appointment). As a brute force approach, you can recurse through all possibilities. Note, though, that if you take request i, your recursive algorithm should skip request i + 1.
#516: Recursive solution: You can optimize this approach through memoization. What is the runtime of this approach?
#526: Recursive solution: The runtime of your memoization approach should be O(N), with O(N) space.
#542: Iterative solution: Take the recursive solution and investigate it more. Can you implement a similar strategy iteratively?
#554: Iterative solution: It's probably easiest to start with the end of the array and work backwards.
#562: Iterative solution: Observe that you would never skip three appointments in a row. Why would you? You would always be able to take the middle booking.
#568: Iterative solution: If you take appointment i, you will never take appointment i + 1, but you will always take appointment i + 2 or i + 3.
#578: Iterative solution: Use an example and work backwards. You can easily find the optimal solution for the subarrays {rₙ}, {rₙ₋₁, rₙ}, {rₙ₋₂, ..., rₙ}. How would you use those to quickly find the optimal solution for {rₙ₋₃, ..., rₙ}?
#587: Iterative solution: If you take an appointment, you can't take the next appointment, but you can take anything after that. Therefore, optimal(rᵢ, ..., rₙ) = max(rᵢ + optimal(rᵢ₊₂, ..., rₙ), optimal(rᵢ₊₁, ..., rₙ)). You can solve this iteratively by working backwards.
#607: Iterative solution: If you're careful about what data you really need, you should be able to solve this in O(n) time and O(1) additional space.
*/
