/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
        const current = first + second;
        //крч просто двигаем [f][s][c][][][] считая числа фибоначи
        first = second;
        second = current;
    }

    return second;
};