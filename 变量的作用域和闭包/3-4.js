//函数作用域

const _ = require('underscore')

function strangeIdentity(n) {
    let i
    for(i = 0; i < n; i++) {}
    return i
}
console.log(strangeIdentity(138))

function f() {
    this['a'] = 200
    return this['a'] + this['b']
}
let global = { 'b': 2 }
console.log(f.call(global))
