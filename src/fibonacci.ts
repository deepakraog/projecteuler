export class FibonacciSeq {

    evenFibonacciSum(): number {
        let sum = 1;
        let oldSum = sum;
        let temp = sum;
        let evenSum = 0;
        while( sum <= 4000000) {
            sum +=  oldSum;
            oldSum = temp;
            temp = sum;
            if (sum % 2 === 0) {
                evenSum += sum;
            }
        }
        return evenSum;
    }
}