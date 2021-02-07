//隐藏数据和行为只是一种将函数作为抽象单元的方式，另外一种方式是提供一种简单地存储和传递基本行为的离散单元

import { fail, warn, note } from './1-2-2'
const _ = require('underscore')

let letters = ['a', 'b', 'c']

// letters[1]

function naiveNth(a, index) {
    return a[index]
}
naiveNth(letters, 1)    //'b'
naiveNth({}, 1)     //undefind

function isIndexed(data) {
    return _.isArray(data) || _.isArray(data)
}
function nth(a, index) {
    if(!_.isNumber(index)) fail('Expected a number as the index')
    if(!_.isIndexed(a)) fail('Not supported on non-indexed type')
    if((index < 0) || (index > a.length - 1))
        fail('Index value is out of bounds')

    return a[index]
}

console.log(nth(letters, 1))
console.log('abc', 0)
console.log(nth({}, 2))
console.log(nth(letters, 4000))
console.log(letters, 'aaaaa')

function second(a) {
    return nth(a, 1)
}

second(['a', 'b'])
second('fogus')
second({})