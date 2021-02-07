//数据抽象

const _ = require('underscore')

function lameCSV(str) {
    return _.reduce(str.split('\n'), function(table, row) {
        table.push(_.map(row.split(','), function(c) { return c.trim() }))
        return table
    }, [])
}
let peopleTable = lameCSV('name, age, hair \n Merbel, 35, red \n nbob, 64, blonde')
console.log(peopleTable)
/***
[
  [ 'name', 'age', 'hair' ],
  [ 'Merbel', '35', 'red' ],
  [ 'nbob', '64', 'blonde' ]
]
*/

