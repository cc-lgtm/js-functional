const _ = require('underscore')

function existy(x) { return x != null }

existy(null)
existy(undefined)
existy({}.noHere)
existy((function(){})())
existy(0)
existy(false)

function truthy(x) { return (x !== false) && existy(x) }

truthy(false)
truthy(undefined)
truthy(0)
truthy('')

{
    if(condition)
        return _.isFunction(doSomething) ? doSomething() : doSomething
    else
        return undefined
}

function doWhen(cond, action) {
    if(truthy(cond))
        return action()
    else
        return undefined
}

//一个对存在的抽象函数的定义
//一个建立在存在函数之上的，对真的抽象函数的定义
//通过其他函数来使用上面的两个函数，以实现更多的行为