

// Exercise 1 : greet message to the user
function greet(name) {
    console.log(`Hello ${name} Welcome Back`);
}
greet("saad");
greet("Ali");
greet("alex");

// Exercise 2: Sum of Numbers
function sumNumbers(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum;
}

sumNumbers([1, 2, 3, 4, 5])
sumNumbers([1, 2, 3, 4, 5])

// Exercise 3: Even or Odd
function isEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} even`);
    } else {
        console.log(`${number} odd`);
    }
}
isEven(4)
isEven(7)
isEven(0)


// Exercise 5: Palindrome Check
function isPalindrome(str) {


    const text = str.toLowerCase()
    const str_length = text.length;

    for(let index = 0 ; index < str_length / 2 ; index++)
    {
        if(text[index] !== text[str_length - 1 - index])
        {
            console.log(str + " is Not Palindrome")
            return false
        }
    }
    console.log( str + " isPalindrome")
    return true
}

isPalindrome("racecar")
isPalindrome("racecarz")

// Exercise 6: Maximum of Two Numbers
function maxOfTwo(num_1 , num_2) {
    if (num_1 > num_2){
        console.log(num_1 + " Larger than " + num_2)
    }
    else if(num_2 > num_1){
        console.log(num_2 + " is Larger than "+ num_1)
    }
    else{
        console.log(num_1 + " = " + num_2)
    }
    
}
maxOfTwo(6,5)
maxOfTwo(5,5)
maxOfTwo(5555,333333)


// Exercise 7: Array Sum
function arraySum(nums) {
    console.log(nums)
    let sum = 0
    for(num of nums) //let index = 0;index < nums.length;index++
    {
        sum+=num
    }
    console.log("sum : "+sum)
    return sum

    
}

arraySum([1,2,3])
arraySum([55,25,55])


// Exercise 8: Factorial Without Recursion
function factorial(number) {

    if (number < 0)
    {
        console.log("Number should be positive")
    }

    let result = 1;
    for (let index = 2; index <= number; index++) {
        result *= index;
    }
    console.log("The Factorial of " + number + " Is " + result)
    return result;
}

factorial(5)
factorial(8)


// Exercise 9: Vowel Checker
function isVowel(s_char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(s_char.toLowerCase())) {
        console.log(s_char + " is a vowel");
    } else {
        console.log(s_char + " is not a vowel");
    }
}
isVowel("r")
isVowel("1") //maniiik
isVowel("a")

// Exercise 10: Largest in Array
function largestInArray(numbers) {
    const max = Math.max(...numbers);
    console.log("The Largest Number is " + max);
    return max;
}
largestInArray([1, 2, 3, 4, 5]);
largestInArray([-10, -5, -1]);
largestInArray([100, 200, 50]);


// Exercise 1: Prime Number Checker
function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
  
    for (let index = 2; index < number; index++) {
      if (number % index === 0) {
        console.log(number +" not prime")
        return false; 
      }
    }
    console.log(number + " Is prime")
    return true; 
  }
  

isPrime(5)
isPrime(14)

// Exercise 12: Sum of Digits
function sumOfDigits(numbers) {
    let total = 0;
    let str = numbers.toString();  
    for (let index = 0; index < str.length; index++) {
      total += parseInt(str[index]);
     }
    console.log("Sum Of "+ numbers +total);
  }
  
sumOfDigits(752);
  
sumOfDigits(123);
sumOfDigits(4567);
sumOfDigits(9);

//Exercise 13: Array Intersection
function arrayIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(arrayIntersection([4,4,5,8],[8,5,4,7,9]))


