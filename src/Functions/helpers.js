const swapArray = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}
export const merge = (a, b) => {
    // this merges SORTED array
    // make result empty array
    const result = []
    // store i and j in variable
    let i = 0
    let j = 0
    // while i < a.length && j < b.length
    while (i < a.length && j < b.length) {
        // if a[i] less than b[j], add a[i] to result and increment 1 to i
        if (a[i] < b[j]) {
            result.push(a[i])
            i++
        } else {
            // else add b[j] to result and increment 1 to j
            result.push(b[j])
            j++
        }
    }
    // if a.length > b.length, add all a items starting from i to result
    while (i < a.length) {
        // console.log(a.slice(i))
        result.push(a[i])
        i++
    }
    // if b.length > a.length, add all b items starting from i to result
    while (j < b.length) {
        result.push(b[j])
        j++
    }
    return result
}
export const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default swapArray


