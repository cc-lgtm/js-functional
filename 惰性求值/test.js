const range = function* (from , to) {
  for (let i = from; i < to; i++) {
    console.log('range\t', i)
    yield i
  }
}

const map = function* (iterator, transform) {
  for (const data of iterator) {
    console.log('map\t', data)
    yield transform(data)
  }
}

const filter = function* (iterator, condition) {
  for (const data of iterator) {
    console.log('filter\t', data)
    if (condition) {
      yield data
    }
  }
}

const stop = function* (iterator, condition) {
  for (const data of iterator) {
    yield data
    if (condition(data)) {
      break
    }
  }
}

const take = function (iterator, number) {
  let count = 0
  const _condition = function (data) {
    count++
    return count >= number
  }
  return stop(iterator, _condition)
}

function Lazy(iterator) {
  const Fn = {
    range(...args) {
      iterator = range(...args)
      return Fn
    },
    map(...args) {
      iterator = map(iterator, ...args)
      return Fn
    },
    filter(...args) {
      iterator = filter(iterator, ...args)
      return Fn
    },
    take(...args) {
      iterator = take(iterator, ...args)
      return Fn
    },
    values() {
      let arr = []
      for (const num of this) {
        arr.push(num)
      }
      return arr
    },
    [Symbol.iterator]() {
      return iterator
    }
  }
  return Fn
}

const nums = Lazy().range(0, 100_000_000_000_00).map(n => n * 10).filter(n => n % 3 === 0).take(2)
for (let n of nums) {
  console.log('num:\t', n, '\n')
}