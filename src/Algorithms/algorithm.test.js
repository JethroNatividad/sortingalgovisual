// [6,2,4,10,3]


// 0, 1
// 1, 2
// 2, 3
const swapArray = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            console.log(j, j + 1)
        }
        console.log('\n')
    }

}

function selectionSort(arr) {
    // loop arr
    for (let i = 0; i < arr.length; i++) {
        // save current item to min var
        let min = i
        // loop starting from second item
        for (let j = i + 1; j < arr.length; j++) {
            // check if second item lesser than min
            if (arr[j] < arr[min]) {
                min = j
            }
            // if yes, set it to min
        }
        if (min !== i) {
            swapArray(arr, i, min)
        }
        // swap min to current item
    }
    return arr
}

// [6,2,4]
// min = 6 {0}
// 2 < 6 ? {1} < {min}
// min = 2 {min = 1}
// 4 < 2 ? {min} < {2}
// nop
// swap 2 and 6


// console.log('hi')
const res = selectionSort([6, 2, 4, 10, 3])
console.log(res)