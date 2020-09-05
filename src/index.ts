"use strict";

import {Multiples3x5} from "./mul3x5";
import {FibonacciSeq} from "./fibonacci";
import {LargestPrimeFactor} from "./primeFactor";

/*let src = new Multiples3x5();
console.log(`Result of Euler Problem 1 - Multiple Sum of 5, 3 below 1000 is ::: ${src.findWhole()}`);


let evenFib = new FibonacciSeq();
console.log(`Result of Euler Problem 2 - Even fibonacci sum below 4 million is ::: ${evenFib.evenFibonacciSum()}`);*/

let largestPrime = new LargestPrimeFactor();
console.log(`Result of Euler Problem 3 - Largest Prime Number ::: ${largestPrime.primeNumber(600851475143)}`);