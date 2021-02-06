const _ = require('underscore')

_.each([1, 2, 3], print)
function print(value) {
    console.log(value)  //1  2  3
}


function splat(fn) {
    return function(array) {
        return fn.apply(null, array)
    }
}
let addArrayElements = splat(function(x, y) { return x + y })
let result = addArrayElements([1, 2])
console.log(result)   //3


function unsplat(fn) {
    return function() {
        return fn.call(null, _.toArray(arguments))
    }
}
let joinElements = unsplat(function(array) { return array.join(' ') })
let result1 = joinElements(1, 2)
console.log(result1)  //1  2
let result2 = joinElements('@', '#', '$', '%')
console.log(result2)  //@  #  $  %


