

function plucker(FIELD) {
    return function(obj) {
        return ( obj && obj[FIELD] )
    }
}

let best = {title: 'Infinite Jest', author: 'DFW'}
let getTitle = plucker('title')
console.log(getTitle(best))  //Infinite Jest