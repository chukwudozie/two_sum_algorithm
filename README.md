# Algorithm solution

### Question:
Given an Array of integers nums and an integer target, create a function that returns the two numbers such that they add up to target.

## Assumptions:
- Each input would have exactly one soluton.
- Each element in the input array may not be used twice

## Constraints
- Only one valid answer exists
- Answer can be returned in any order.


### Explanation
- Create a function that takes two parameters (nums array and target integer)
- create an object that will hold the two numbers as output
- Get the length of the input array
- Loop through the array from the the first element to the last
- check the numbers in the array to see if they have additive complement equal to the target
- x + y =  target. x = target - y.