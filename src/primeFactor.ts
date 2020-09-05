export class LargestPrimeFactor {

    primeNumber(num : number): number {
        let largestPrime = 1;
        while(num %2 === 0) {
            num/=2;
        }

        for (let i = 3; i < Math.sqrt(num); i+= 2) {

            while (num % i === 0) {
                num /= i;
            }
            largestPrime = num;
        }

        return largestPrime;
    }
}