//全局作用域
a = 'hhhh'
_.map(_.range(2), function() { return a })

function makeEmptyObject() {
    return new Object()
}