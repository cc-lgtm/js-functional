const _ = require('underscore')

/***
 * 
//函数是一等公民

//函数作为一等公民，就会拥有类似数字的性质

//可以储存为变量
let fortytwo = function() { return 42 }
//可以储存为数组的一个元素
let fortytwos = [42, function() { return 42 }]
//可以储存为对象的成员变量
let fortytwos = { number: 42, fun: function() { return 42 }}
//可以直接创建出来
42 + (function() { return 42 })()
//可以被传递给另一个函数
function weirdAdd(n, f) { return n + f() }
weirdAdd(42, function() { return 42 })
//可以被另一个函数返回
return 42
return function() { return 42 }
//高阶函数
//以一个函数作为参数
//返回一个函数作为结果
***/

//多种编程方式
//命令式编程，通过详细描述行为的编程方式
//基于原型的面向对象编程
//元编程，对执行模型数据进行编写和操作的编程方式

//命令式
let lyrics = []
for(let bottles = 99; bottles > 0; bottles--) {
    lyrics.push('墙上有' + bottles + '啤酒')
    lyrics.push(bottles + '瓶啤酒')
    lyrics.push('拿一个下来分给大家')

    if(bottles > 1) {
        lyrics.push((bottles - 1) + 'bottles of beer on the wall')
    } else {
        lyrics.push('no more bottles of beer on the wall')
    }
}

//面向对象
let a = { name: 'gray', fun: function() { return this } }
console.log(a.fun())

let bFunc = function() { return this }
let b = { name: 'b', fun: bFunc}
console.log(b.fun())

//元编程
function point2D(x, y) {
    this._x = x
    this._y = y
}
console.log(new point2D(0, 1))

function point3D(x, y, z) {
    point2D.call(this, x, y)
    this._z = z
}
console.log(new point3D(10, -1, 1000))

