//集合中心编程

const _ = require('underscore')

_.map({a: 1, b: 2}, _.identity)

_.map({a: 1, b: 2}, function(v, k) {
    return [k, v]
})

_.map({a: 1, b: 2}, function(v, k, coll) {
    return [k, v, _.keys(coll)]
})

