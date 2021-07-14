// function multiplyBy(num1) {
//   return function(num2) {
//     return num1 * num2
//   }
// }

// const multiplyByThree = multiplyBy(3)
// console.log(multiplyByThree(4))


function add(...args) {
  return args.reduce((total, currentVal) => {
    total += currentVal
    return total
  }, 0)
}

function curry(fn) {
  let allArgs = []
  return function reFn(...args) {
    if (args.length === 0) {
      return fn.apply(this, allArgs)
    } else {
      allArgs = allArgs.concat(args)
      return reFn
    }
  }
}

const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3)(4, 5)())