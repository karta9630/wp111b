
function count(list) {
    var x = {}
    for (var i of list) {
        if (i in x) {
            x[i]++
        }
        else {
            x[i] = 1
        }
    }
    return x
}

var list = ['a', 'dog', 'chase', 'a', 'cat']
console.log(count(list))