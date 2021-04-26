## Part 1a
1. 20
2. 20
3. 20
4. Error, let only defined result in the scope of the if/else statement, not the whole function
5. Error, cannot redefine the value of result
6. Error, cannot redefine the value of result
   
## Part 1b
1. 3 (prices.length)
2. 150 (300 * 0.5), discounted price of the final item
3. 150, The final decimal price of the final item
4. An array of the items with their new discounted price ( [50,100,150] )
5. Error, i is not defined outside of the scope of the for loop
6. Error, discountedPrice is not defined outside of the scope of the for loop
7. Print 150, finalPrice was defined in within the function
8. An array of the items with their new discounted price ( [50,100,150] ), we note that we are pushing to discounted within the scope of the for loop, so all variables are in scope.
9. Error, i is not defined outside of the scope of the for loo
10. 3, length was defined within the function (and was not changed)
11. An array of the items with their new discounted price ( [50,100,150] ), we simply calculate the discounted price and push it into discounted. We note that const does not cause a problem here since we don't change it after its declaration and every iteration creates a new declaration

12A. student.name

12B. student["Grad Year"]

12C. student.greeting()

12D. student['Favorite Teacher'].name

12E. student.courseLoad[0]

13A. 32, concatenate 2 to 3.

13B. 1, converted string 3 to 
number 3

13C. 3, converted null to 0

13D. 3null, concatenated together

13E. 4, true got converted to 1

13F. 0, false got converted to 0, null got converted to 0

13G. 3undefined, concatenated

13H. NaN, undefined converted to NaN

14A. True, '2' converted to 2

14B. False, strings converted to numbers

14C. True, '2' converted to 2

14D. False, === is strictly equals - also checks types. String is not int

14E. False, true is 1

14F. True, Boolean() returns true for non-False values. 2 is a non-false value so it returns true

15. == checks equality with type conversions, === checks equality without type conversions
16. Refer to [file](part1b-question16.js)
17. [2,4,6], we can see that callback is refering to doSomething which is a function that returns double the passed in parameter. So, since we are populating the newArr with doubles of the values of the parameter array. The line "callback(array[i])" is really just "doSomething(array[i])" for this specific case.
18. Refer to [file](part1b-question18.js)
19. 1 4 3 2