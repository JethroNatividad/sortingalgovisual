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
// i start from 0
// j start from i + 1
// [6{i},2{j},4]
// {j - i} > {j} ?
// move {j - i} to j
// [2{j}, 6{i},4]

// [2,6{i},4{j}]
[6, 2, 4]


function insertionSort(arr) {
    // start from next item
    // [2,6,4]
    const steps = [[...arr]]
    for (let i = 1; i < arr.length; i++) {
        // save arr[i] to currentItem variable
        let currentItem = arr[i];
        let j = i - 1
        // example i = 3 {last index of arr}
        // compare it to 2, or i - 1 up to zero
        while (j > -1 && arr[j] > currentItem) {
            arr[j + 1] = arr[j]
            steps.push([...arr])
            j--

        }
        arr[j + 1] = currentItem
        steps.push([...arr])


    }
    console.log(steps)
    return arr
}

// [6,2,4]
// min = 6 {0}
// 2 < 6 ? {1} < {min}
// min = 2 {min = 1}
// 4 < 2 ? {min} < {2}
// nop
// swap 2 and 6

function merge(arr1, arr2) {
    const result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    return result
}

// console.log('hi')
// const res = insertionSort([6, 2, 4, 10, 3])
// console.log(res)

console.log(merge([4], [1]))