//动态作用域
const _ = require('underscore')

let globals = {}

function makeBindFun(resolver) {
    return function(k, v) {
        let stack = globals[k] || []
        globals[k] = resolver(stack, v)
        return globals
    }
}

let stackBinder = makeBindFun(function(stack, v) {
    stack.push(v)
    return stack
})

let stackUnbinder = makeBindFun(function(stack) {
    stack.pop()
    return stack
})

let dynamiclookup = function(k) {
    let slot = globals[k] || []
    return _.last(slot)
}

stackBinder('a', 1)
stackBinder('b', 1000)
stackBinder('a', '*')

let result = dynamiclookup('a')
console.log(result)
console.log(globals)


//js的动态作用域

const _ = require('underscore')

function globalThis() { return this }
globalThis()
globalThis.call('barnabas')
globalThis.apply('orsulak', [])

let nopeThis = _.bind(globalThis, 'nope')
nopeThis.call('wat')


