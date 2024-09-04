# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

-----------------------------

This can be split up into multiple parts using T(n) where n is the size of the array, when n is less than or equal to 2 and when it's greater than 2.
When it is less than or equal to 2 it is constant since it will return 0, the first element, or the just the first and second added together.
However when n is greater than 2 it needs to split into 3 parts which is done at the same time everytime plus the recursive calls, since it is 3 recursive calls in 3 parts it can be represented with 3T(n/3) where it's 3T(n) for the calls, and (n/3) for the 3 parts.

This gives us an equation of T(n) = 3T(n/3) + n

Then we can use T(n/3) = 3T(n/9) + n/3

And T(n) = 3(3T(n/9) + n/3) + n = 9T(n/9) + n + n = 9T(n/9) + 2n

Which forms a pattern where $3^iT(\frac{n}{3^i}) + in$

Where as i $\rightarrow \infty$, $\frac{n}{3^i} = 1$ and n = $3^i$

Using the logarithm rules; n = $3^i$ = $log{_3}{n} = i$

So T(n) = $3^{log{_3}{n}}T(1) + nlog{_3}{n}$

Using more log rules we get; T(n) = $nT(1) + nlog{n}$

And using the largest part of the equation we can form a bound that dictates the behavior with $\Theta(nlog{n})$

I'm also sourcing Ali because I had gotten stuck at the beginning of the manipulation and he got me going again in the lab.
I did also use some pre-existing Stack Overflow pages for help on the markdown code.


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.








