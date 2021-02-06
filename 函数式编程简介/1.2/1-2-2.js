//抽象方法是指隐藏实现细节的函数
//使之运行，使之正确， 使之快速

const _ = require('underscore')

/***

function parseAge(age) {
    if(!_.isString(age)) throw new Error('Expecting a string')
    let a;
    console.log('Attempting to parse an age')

    a = parseInt(age, 10)
    if(_.isNaN(a)) {
        console.log(['Could not parse age:', age].join(' '))
        a = 0
    }
    return a
}
let age1 = parseAge('42')
console.log(age1)
// let age2 = parseAge(42)
// console.log(age2)
let age3 = parseAge('ford')
console.log(age3)

***/

//以函数为抽象单元进行抽象成不同的函数

function fail(thing) {
    throw new Error(thing)
}
function warn(thing) {
    console.log(['WARNING:', thing].join(' '))
}
function note(thing) {
    console.log(['NOTE:', thing].join(' '))
}
function parseAge(age) {
    if(!_.isString(age)) fail('Expecting a string')
    let a

    note('Attempting to parse an age')
    a = parseInt(age, 10)

    if(_.isNaN(a)) {
        warn(['Could not parse age:', age].join(' '))
        a = 0
    }
    return a
}
let age1 = parseAge('42')
console.log(age1)
// let age2 = parseAge(42)
// console.log(age2)
let age3 = parseAge('ford')
console.log(age3)

export { fail, warn, note }
