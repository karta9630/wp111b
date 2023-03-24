function mmul(a, b) {
    let r = []
    for (let i = 0; i < a.length; i++) {
        r[i] = []
        for (let j = 0; j < a.length; j++) {
            r[i][j] = 0
            for (let k = 0; k < a.length; k++) {
                r[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return r
}
var a = [[1, 2, 3], [4, 5, 6], [1,2,3]],
 b = [[1,2,3], [6, 5, 4], [3, 2, 1]];
console.log(mmul(a, b));
