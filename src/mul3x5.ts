export class Multiples3x5 {

    findWhole(): number {
        let sum = 0;
        let i = 1;
        while (i < 1000) {
            let flag = false;
            if (i % 3 == 0) {
                sum += i;
                flag = true;
            }
            if (i % 5 == 0 && !flag) {
                sum += i;
            }
            i++;
        }
        return sum;
    }
}