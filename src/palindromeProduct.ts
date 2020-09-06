export class PalindromeProduct {

    maxPalindrome(n: number): number {

        let upper_bound = 0;
        for (let k = 1; k <= n; k++) {
            upper_bound *= 10;
            upper_bound += 9;
        }

        let lower_bound: number = Math.floor(1 + (upper_bound / 10));
        let max_product = 0;

        for (let i = upper_bound; i >= lower_bound; i--) {
            for (let j = i; j >= lower_bound; j--) {

                let product: number = i * j;
                if (product < max_product) {
                    break;
                }

                let number: number = product;
                let reverse = 0;

                while (number != 0) {
                    reverse = reverse * 10 + number % 10;
                    number = Math.floor(number / 10);
                }

                if (product == reverse && product > max_product) {
                    max_product = product;
                }
            }
        }
        return max_product;
    }
}