function vadd(a, b) {
    let r = []
    for (let i = 0; i < a.length; i++) {
        r[i] = a[i] + b[i];
    }
    return r
}
var a = [2, 4, 6, 7], b = [8, 6, 4, 3];
console.log(vadd(a, b));
