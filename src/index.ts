"use strict";

import {Multiples3x5} from "./mul3x5";
import {FibonacciSeq} from "./fibonacci";

let src = new Multiples3x5();
console.log(`Result of Euler Problem 1 - Multiple Sum of 5, 3 below 1000 is ::: ${src.findWhole()}`);


let evenFib = new FibonacciSeq();
console.log(`Result of Euler Problem 2 - Even fibonacci sum below 4 million is ::: ${evenFib.evenFibonacciSum()}`);