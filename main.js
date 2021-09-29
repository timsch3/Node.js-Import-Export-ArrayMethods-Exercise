arr = require('./data').arr
arr2 = require('./data').arr2
arr3 = require('./data').arr3
funcs = require('./functions')

console.log('Only first: ', funcs.onlyFirst(arr))
console.log('All but last: ', funcs.allButLast(arr))
console.log('Only last: ', funcs.onlyLast(arr))
console.log('All but first: ', funcs.allButFirst(arr))
console.log('Return index 2: ', funcs.returnN(arr, 2))
console.log('Return index -2 (last index instead): ', funcs.returnN(arr, -2))
console.log('Return all but string: ', funcs.returnAllButStr(arr2, 'remove'))
console.log('Remove duplicates: ', funcs.removeDuplicates(arr3))
console.log('Return sum: ', funcs.returnSum(arr3))