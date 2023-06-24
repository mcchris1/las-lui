/*
Given a list of people with their birth and death years, implement a method to compute the year with the most number of people alive. You may assume that all people were born between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should be included in that year's count. For example, Person (birth = 1908, death = 1909) is included in the counts for both 1908 and 1909. 

Hints:
#476: Solution 1: Can you count the number of people alive in each year?
#490: Solution 1: Try using a hash table, or an array that maps from a birth year to how mamy people are alive in that year.
#507: Solution 2: What if you sorted the years? What would you sort by?
#514: Solution 2: Do you actually need to match the birth years and death years? Does it matter when a specific person died, or do you just need a list of the years of deaths?
#523: Solution 2: Observe that people are "fungible." It doesn't matter who was born and when they died. All you need is a list of birth years and death years. This might make the question of how you sort the list of people easier.
#532: Solution 2: Try creating a sorted list of births and a sorted list of deaths. Can you iterate through both, tracking the number of people alive at any one time?
#541: Solution 3: Each birth adds one person and each death removes a person. Try writing an example of a list of people (with birth and death years) and then re-formatting this into a list of each year and a+1 for a birth and a-1 for a death.
#549: Solution 3: What if you created an array of years and how the population changed in each year? Could you then find the year with the highest population?
#576: Solution 3: Be careful with the little details in this problem. Does your algorithm/code handle a person who dies in the same year that they are born? This person should be counted as one person in the population count.
*/
