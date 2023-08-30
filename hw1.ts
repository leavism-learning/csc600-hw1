/* ==========================================================================  **
## HW Instructions

See this Google doc for clarifications:

https://docs.google.com/document/d/17CNgY4VPNsYECnZKgZJnb6NAIJFn4k0IIBe5yl6XdNY/edit?usp=sharing

** ==========================================================================  **


1. Push your solution, contained entirely in hw1.ts, back to the github classroom
   repository. Please make sure you solution compiles!!! 

   To run the typescript compiler (`tsc`), make sure you have it installed
   ```
   tsc -v
   >> Version 4.4.3
   ```
   Then run the compiler
   ```
   tsc --strict --target es2019 --module commonjs hw1.ts
   ```
   to produce a file `hw1.js`. If we cannot compile your solution with `tsc`, we
   will not grade your submission. Even if you are looking for partial credit,
   your entire hw1.ts must compile, and we must be able to run the compiled js file
   in `node`.
2. **Do not** change any of the function interfaces.
3. **Do not** use any external libraries.
4. Replace `throw Error("TODO")` with your code. If you do not attempt a problem,
   please leave the `throw Error("TODO")` code there unmodified.
5. Always remember to check the function input types and the output types.
6. You can create any other additional helper functions that you would like.
7. You can leave testing code in provided that your code compiles and does not
   depend on external libraries. Remember it is up to you to test your own code.
8. You can use your solutions to questions in this assignment to answer other question
   in this assignment.

** ============================================================================ */

/* ==========================================================================  **
## AI Copilot
** ============================================================================ */

// If you used any resources, please list them here
export const AI_COPILOT_HISTORY = [
  'https://chat.openai.com/c/', // TODO: please paste the link to your AI CoPilot history here
];

/* ==========================================================================  **
## 1. Fun with TypeScript Arrays (40 pts)

This problem is a warmup to get you familiar with TypeScript syntax.
Throughout these problems, please just use basic TypeScript features:
for loops, conditionals, basic arithmetic expressions, basic string operations.

Hint: The `for` `of` construct below can be used to traverse an array.

const arr = [1, 2, 3];
for (const x of arr) {
    console.log(x);
}
>> 1
>> 2
>> 3
** ============================================================================ */

/* ----------------------------------------------------- **
### 1a. Complete the function definition below. (8 pts)

`multArray` takes an array of numbers and produces the product of all the numbers in the array.

Example:
  multArray([]) = 1

Example:
  multArray([1, 2, 3]) = 6

Example:
  multArray([-1, -2, 3, 10]) = 60
** ----------------------------------------------------- */

export function multArray(arr: number[]): number {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

/* ----------------------------------------------------- **
### 1b. Complete the function definition below. (8 pts)

`maxArray` takes an array of numbers and returns the largest number in the array.

Example:
  maxArray([]) = Number.POSITIVE_INFINITY

Example:
  maxArray([1, 2, 3]) = 3

Example:
  maxArray([-1, -2, 3, 10]) = 10
** ----------------------------------------------------- */

export function maxArray(arr: number[]): number {
  if (!arr.length) {
    return Number.POSITIVE_INFINITY;
  }

  return Math.max(...arr);
}

/* ----------------------------------------------------- **
### 1c. Complete the function definition below. (8 pts)

`longestWord` takes an array of strings and returns the longest
word found. If there are multiple words of the same length, return
the last one found.

Example:
  longestWord([]) = ""

Example:
  longestWord(["hello", "world"]) = "world"

Example:
  longestWord(["csc600", "is", "fun"]) = "csc600"

** ----------------------------------------------------- */

export function longestWord(arr: string[]): string {
  if (!arr.length) {
    return '';
  }

  let longest: string = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length >= longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

/* ----------------------------------------------------- **
### 1d. Complete the function definition below. (8 pts)

`shortestWord` takes an array of strings and returns the shortest
word found. If there are multiple words of the same length, return
the first one found.

Example:
  shortestWord([]) = ""

Example:
  shortestWord(["hello", "world"]) = "hello"

Example:
  shortestWord(["csc600", "is", "fun"]) = "is"
** ----------------------------------------------------- */

export function shortestWord(arr: string[]): string {
  if (!arr.length) {
    return '';
  }

  let shortest: string = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }

  return shortest;
}

/* ----------------------------------------------------- **
### 1e. Complete the function definition below. (8 pts)

`shortestAndLongestWord` takes an array of strings and returns both
the shortest and longest words found.
1. If there are multiple shortest words of the same length, return
   the first one found.
2. If there are multiple longest words of the same length, return
   the last one found.
Thus `shortestAndLongestWord` returns a tuple of 2 strings.

Example:
  shortestAndLongestWord([]) = ["", ""]

Example:
  shortestAndLongestWord(["hello", "world"]) = ["hello", "world"]

Example:
  shortestAndLongestWord(["csc600", "is", "fun"]) = ["is", "csc600"]
** ----------------------------------------------------- */

export function shortestAndLongestWord(arr: string[]): [string, string] {
  if (!arr.length) {
    return ['', ''];
  }

  let shortest: string = arr[0];
  let longest: string = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Check for shortest word
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }

    // Check for longest word
    if (arr[i].length >= longest.length) {
      longest = arr[i];
    }
  }

  return [shortest, longest];
}

/* ==========================================================================  **
## 2. Pure Functions (30 pts)


This problem is a warmup to get you familiar with the concept of a **pure** function.
As a reminder, a pure function is a function that always produces the same outputs
given the same inputs. Also pure functions do not modify their arguments. Pure functions
are very valuable in distributed and collaborative settings because different consumers of
pure functions can trust that their own data will not be clobbered by calling a pure function.

Throughout these problems, please just use basic TypeScript features:
for loops, conditionals, basic arithmetic expressions, basic string operations.

** ============================================================================ */

/* ----------------------------------------------------- **
### 2a. Complete the function definition below. (10 pts)

`impureNegate` takes an array of numbers and replaces each element in the array
with its negation. Thus `impureNegate` is not a pure function. This style of
coding might be what you are familiar with from an imperative programming (e.g., 
C/Java) background. Note that `impureNegate` returns nothing, i.e., has 
return type of `void`.

Example:
  const arr = [1, 2, 3];
  impureNegate(arr);
  console.log(arr);
  >> [-1, -2, -3]

  impureNegate(arr);
  console.log(arr);
  >> [1, 2, 3]

  impureNegate(arr);
  console.log(arr);
  >> [-1, -2, -3]

  const arr2 = [1, 2, 3];
  impureNegate(arr2);
  console.log(arr2);
  >> [-1, -2, -3]
** ----------------------------------------------------- */

export function impureNegate(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = -arr[i];
  }
}

/* ----------------------------------------------------- **
### 2b. Complete the function definition below. (10 pts)

`copyNumArray` takes an array of numbers and returns a duplicate.
`copyNumArray` is an example of a *pure* function. In particular,
creating a copy of an input data structure is a good heuristic for
making a function pure. However, creating a copy of a data structure
is not necessary to make a function pure.

Example:
  const arr1 = [1, 2, 3];
  const arr2 = copyNumArray(arr1);
  impureNegate(arr1);
  console.log(arr1);
  >> [-1, -2, -3]

  console.log(arr2);
  >> [1, 2, 3]

Example:
  const arr = [1, 2, 3, 4];
  console.log(impureNegate(copyNumArray(arr)));
  >> undefined

  const arr2 = copyNumArray(arr);
  impureNegate(arr2);
  console.log(arr2);
  >> [-1, -2, -3, -4]
  console.log(arr);
  >> [1, 2, 3, 4]
** ----------------------------------------------------- */

export function copyNumArray(arr: number[]): number[] {
  throw Error('TODO');
}

/* ----------------------------------------------------- **
### 2c. Complete the function definition below. (10 pts)

`pureNegate` is a *pure* function that increments each element of an array
without modifying the array passed in. Now would be a good time to compare
and contrast `pureNegate` and `imppureNegate` to see how different the
reasoning with a pure and impure function is.

Example:
  const arr = [1, 2, 3];
  console.log(pureNegate(arr));
  >> [-1, -2, -3]
  console.log(arr);
  >> [1, 2, 3]
  console.log(pureNegate(arr));
  >> [-1, -2, -3]
  console.log(arr);
  >> [1, 2, 3]
** ----------------------------------------------------- */

export function pureNegate(arr: number[]): number[] {
  throw Error('TODO');
}

/* ==========================================================================  **
## 3. Other TypeScript Features (30 pts)

This problem is a warmup to get you familiar with other TypeScript features,
including generics, dictionary types, and record types. You should have encountered
these language features in other languages (e.g., C/Java). We'll also get more practice
with writing pure functions.

** ============================================================================ */

/* ----------------------------------------------------- **
### 3a. Complete the function definition below. (10 pts)

`copyArray` is a *generic* and *pure* function that returns a copy of an array.

Example:
  const arr = ["csc600", "is", "fun"];
  const arr2 = copyArray(arr);
  arr[0] = "life";
  console.log(arr2);
  >> ["csc600", "is", "fun"]

Example:
  const arr = [1, 2, 3, 4];
  const arr2 = copyArray(arr);
  arr[0] = -1;
  console.log(arr2);
  >> [1, 2, 3, 4]
** ----------------------------------------------------- */

export function copyArray<T>(arr: T[]): T[] {
  throw Error('TODO');
}

/* ----------------------------------------------------- **
### 3b. Complete the function definition below. (10 pts)

`copyDictionary` is a *pure* function that returns a copy of a dictionary.

Example:
  const dict = {
      "hello": 1,
      "world": 2
  };
  const dict2 = copyDictionary(dict);
  dict["hello"] = -1;
  console.log(dict2);
  >> {"hello": 1, "world": 2}


Hint: you may want to use the code below to traverse a dictionary

for (const [key, val] of Object.entries(dict)) {
    console.log(key, val);
}
>> "hello" 1
>> "world" 2
** ----------------------------------------------------- */

export function copyDictionary(dict: { [key: string]: number }): {
  [key: string]: number;
} {
  throw Error('TODO');
}

/* ----------------------------------------------------- **
### 3c. Complete the function definition below. (10 pts)

`copyTsRecord` returns a copy of a user-defined data structure.
It is a *pure* and *generic* function.
Make sure to also copy the dictionary! Hint: can you use a function that you previously defined?

Example:
  const rec = {
    myStr: "hello",
    myNum: 42,
    myDict: {
        "csc600": -1,
        "is": -2,
        "fun": 3
    }
  };
  const rec2 = copyTsRecord(rec);
  rec.myStr = "foobar";
  console.log(rec2);
  >> {myStr: "hello", myNum: 42, myDict: {"csc600": -1, "is": -2, "fun": 3}}
** ----------------------------------------------------- */

type tsRecord = {
  myStr: string;
  myNum: number;
  myDict: { [key: string]: number };
};

export function copyTsRecord(tsRec: tsRecord): tsRecord {
  throw Error('TODO');
}

/* ==========================================================================  **
## Bonus. (10 pts)

This is a bonus that introduces a generic dictionary and record.
It behaves just like tsRecord, except that the dictionary can contain values of
any type T. Write the `copyGenericTsRecord` function. Make sure to also copy the
dictionary!
** ============================================================================ */

type genericTsRecord<T> = {
  myStr: string;
  myNum: number;
  myDict: { [key: string]: T };
};

export function copyGenericTsRecord<T>(
  tsRec: genericTsRecord<T>
): genericTsRecord<T> {
  throw Error('BONUS TODO');
}
