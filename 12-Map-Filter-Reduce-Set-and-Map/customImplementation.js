/***********************************************************
 * CUSTOM IMPLEMENTATION OF:
 * 1. myMap
 * 2. myFilter
 * 3. mySort
 * 4. myTransform (map + filter + sort engine)
 ***********************************************************/

/* =========================================================
   1️⃣ Custom MAP
   ========================================================= */
Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function")
  }

  const result = []
  const arr = this

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr)
    }
  }

  return result
}

/* =========================================================
   2️⃣ Custom FILTER
   ========================================================= */
Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function")
  }

  const result = []
  const arr = this

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i])
      }
    }
  }

  return result
}

/* =========================================================
   3️⃣ Custom SORT (in-place like native sort)
   ========================================================= */
Array.prototype.mySort = function (compareFn) {
  const arr = this
  const len = arr.length

  const compare =
    typeof compareFn === "function"
      ? compareFn
      : (a, b) => (String(a) > String(b) ? 1 : -1)

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

/* =========================================================
   4️⃣ ONE ENGINE: MAP + FILTER + SORT
   ========================================================= */
Array.prototype.myTransform = function ({
  mapFn,
  filterFn,
  sortFn
} = {}) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue

    const value = this[i]

    if (!filterFn || filterFn(value, i, this)) {
      result.push(mapFn ? mapFn(value, i, this) : value)
    }
  }

  if (sortFn) {
    result.mySort(sortFn)
  }

  return result
}

/* =========================================================
   5️⃣ TEST CASES
   ========================================================= */
console.log("----- myMap -----")
console.log([1, 2, 3].myMap(x => x * 2))

console.log("----- myFilter -----")
console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0))

console.log("----- mySort -----")
const nums = [3, 1, 4, 2]
nums.mySort((a, b) => a - b)
console.log(nums)

console.log("----- myTransform: MAP -----")
console.log(
  [1, 2, 3].myTransform({
    mapFn: x => x * 10
  })
)

console.log("----- myTransform: FILTER -----")
console.log(
  [1, 2, 3, 4].myTransform({
    filterFn: x => x % 2 === 0
  })
)

console.log("----- myTransform: SORT -----")
console.log(
  [3, 1, 4, 2].myTransform({
    sortFn: (a, b) => a - b
  })
)

console.log("----- myTransform: MAP + FILTER + SORT -----")
console.log(
  [5, 1, 4, 2, 3].myTransform({
    filterFn: x => x % 2 !== 0,
    mapFn: x => x * 10,
    sortFn: (a, b) => b - a
  })
)
