//词法作用域
aVariable = 'Outer'
function afun() {
    let aVariable = 'Middle'

    return _.map([1, 2, 3], function(e) {
        let aVariable = 'In'
        return [aVariable, e].join(' ')
    })
}