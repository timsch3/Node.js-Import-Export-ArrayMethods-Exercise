onlyFirst = (arr) => {
    return arr.slice(0, 1)
}

allButLast = (arr) => {
    return arr.slice(0, -1)
}

onlyLast = (arr) => {
    return arr.slice(-1)
}

allButFirst = (arr) => {
    return arr.slice(1, arr.length)
}

returnN = (arr, n) => {
    if (n > 0 && n <= arr.length) {
        return arr.slice(n, n + 1)
    }
    else {
        return arr.slice(-1)
    }
}

returnAllButStr = (arr, str) => {
    return arr.filter(e => e != str)
}

removeDuplicates = (arr) => {
    return [...new Set(arr)]
}

returnSum = (arr) => {
    return arr.reduce((a, b) => a + b)
}

module.exports = { onlyFirst, allButLast, onlyLast, allButFirst, returnN, returnAllButStr, removeDuplicates, returnSum }