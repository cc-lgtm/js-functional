const _ = require('underscore')

function repeat(times, VALUE) {
  return _.map(_.range(times), function() {
    return VALUE
  })
}
let reslut1 = repeat(4, 'Major')
console.log(reslut1) //[ 'Major', 'Major', 'Major', 'Major' ]2