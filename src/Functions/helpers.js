const swapArray = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}
export const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default swapArray
