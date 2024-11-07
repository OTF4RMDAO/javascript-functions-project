# javascript-functions-project

This project contains various JavaScript functions for String Manipulation, Array Operations, and Mathematical Calculations.

## Table of Contents

1. [String Manipulation Functions](#string-manipulation-functions)
2. [Array Functions](#array-functions)
3. [Mathematical Functions](#mathematical-functions)

### String Manipulation Functions

1. **Reverse a String**
   - **Description**: Reverses a given string.
   - **Function**: `reverseString(str)`
   - **Usage**:
     ```javascript
     reverseString("hello"); // returns "olleh"
     ```

2. **Count Characters**
   - **Description**: Counts the number of characters in a string.
   - **Function**: `countCharacters(str)`
   - **Usage**:
     ```javascript
     countCharacters("hello"); // returns 5
     ```

3. **Capitalize Words**
   - **Description**: Capitalizes the first letter of each word in a sentence.
   - **Function**: `capitalizeWords(sentence)`
   - **Usage**:
     ```javascript
     capitalizeWords("hello world"); // returns "Hello World"
     ```

### Array Functions

1. **Find Maximum and Minimum**
   - **Description**: Finds the maximum and minimum values in an array.
   - **Functions**: `findMax(arr)`, `findMin(arr)`
   - **Usage**:
     ```javascript
     findMax([1, 2, 3]); // returns 3
     findMin([1, 2, 3]); // returns 1
     ```

2. **Sum of Array**
   - **Description**: Calculates the sum of all elements in an array.
   - **Function**: `sumArray(arr)`
   - **Usage**:
     ```javascript
     sumArray([1, 2, 3]); // returns 6
     ```

3. **Filter Array**
   - **Description**: Filters out elements from an array based on a condition.
   - **Function**: `filterArray(arr, condition)`
   - **Usage**:
     ```javascript
     filterArray([1, 2, 3, 4], x => x > 2); // returns [3, 4]
     ```

### Mathematical Functions

1. **Factorial**
   - **Description**: Calculates the factorial of a given number.
   - **Function**: `factorial(n)`
   - **Usage**:
     ```javascript
     factorial(5); // returns 120
     ```

2. **Prime Number Check**
   - **Description**: Checks if a number is prime.
   - **Function**: `isPrime(num)`
   - **Usage**:
     ```javascript
     isPrime(7); // returns true
     ```

3. **Fibonacci Sequence**
   - **Description**: Generates the Fibonacci sequence up to a given number of terms.
   - **Function**: `fibonacci(n)`
   - **Usage**:
     ```javascript
     fibonacci(5); // returns [0, 1, 1, 2, 3]
     ```

---

## Getting Started

Clone the repository:
```bash
git clone https://github.com/OTF4RMDAO/javascript-functions-project.git
