const _ = require('underscore')

function finder(valueFun, bestFunc, coll) {
    return _.reduce(coll, function(best, current) {
        let bestValue = valueFun(best) 
        let currentValue = valueFun(current)

        return (bestValue === bestFunc(bestValue, currentValue)) ? best : current
    })
}

let result = finder(_.identity, Math.max, [1, 2, 3, 4, 5])
console.log(result) //5

function best(fun, coll) {
    return _.reduce(coll, function(x, y) {
        return fun(x, y) ? x : y
    })
}

let result2 = best(function(x, y) {
    return x > y
},
[1,2,3,4,5]
)
console.log(result2) //5