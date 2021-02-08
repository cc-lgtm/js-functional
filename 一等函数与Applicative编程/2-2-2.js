const _ = require('underscore')

//reduceRight

let nums = [100, 2, 25]

function div(x, y) { return x / y}
_.reduce(nums, div) //2
_.reduceRight(nums, div) //0.125

function allOf(/* funs */) {
    return _.reduceRight(arguments, function(truth, f) {
        return truth && f()
    }, true)
}

function anyOf(/* funs */) {
    return _.reduceRight(arguments, function(truth, f) {
        return truth || f()
    }, false)
}

function T() { return true }
function F() { return false }

console.log(allOf()) //true
console.log(allOf(T, T)) //true
console.log(allOf(T, T, T, T, F)) //false
console.log(anyOf(T, T, F)) //true
console.log(anyOf(F, F, F, F)) //false
console.log(anyOf()) //false

//find

_.find(['a', 'b', '3', 'd'], _.isNumber)  //3

//reject

_.reject(['a', 'b', 3, 'd'], _.isNumber) // ['a', 'b', 'd']

function complement(pred) {
    return function() {
        return !pred.apply(null, _.toArray(arguments))
    }
}
_.filter(['a', 'b', 3, 'd'], complement(_.isNumber))   // ['a', 'b', 'd']

//all

_.all([1, 2, 3,4], _.isNumber) //true

//any

_.any([1, 2, 'c', 4], _.isString) //true

//sortBy, groupBy, countBy

let people = [{name: 'a', age: 30}, {name: 'b', age: 24}]
_.sortBy(people, function(p) { return p.age })  //排序

let albums = [{title: 'a b c', genre: 'm' },
              {title: ' b c', genre: 'm' },
              {title: 'a b c', genre: 'c' }]
_.groupBy(albums, function(a) { return a.genre }) //分组

_.countBy(albums, function(a) { return a.genre }) //统计次数


