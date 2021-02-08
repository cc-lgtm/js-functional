//Applicative编程定义为函数A作为参数提供给函数B

const _ = require('underscore')

let nums = [1, 2, 3, 4, 5]
function doubleAll(array) {
    return _.map(array, function(n) { return n * 2 })
}
doubleAll(nums)

function average(nums) {
    let sum = _.reduce(array, function(a, b) { return a + b })
    return sum / _.size(array)
}
average(nums)

function onlyEven(array) {
    return _.filter(array, function(n) {
        return (n % 2) === 0
    })
}
onlyEven(nums)

