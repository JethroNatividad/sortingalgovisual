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
        // example i = 3 {last index of arr}
        // compare it to 2, or i - 1 up to zero
        for (let j = i - 1; j > -1; j--) {
            // console.log(j, i)

            // example j is 2
            // compare arr[j] and arr[i]
            // if arr[j] > currentItem
            if (arr[j] > currentItem) {
                // move arr[j] up, arr[j+1] = arr[j]
                arr[j + 1] = arr[j]
                steps.push([...arr, [j, i, currentItem]])
            }
            if (currentItem > arr[j]) {
                // if currentItem > arr[j]
                // set currentItem to arr[j+1]
                arr[j + 1] = currentItem
                steps.push([...arr, [j, i, currentItem]])
            }
            if (j === 0) {
                // if currentItem > arr[j]
                // set currentItem to arr[j+1]
                arr[j] = currentItem
                steps.push([...arr, [j, i, currentItem]])
            }

            steps.push([...arr, [j, i, currentItem]])
        }

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


// console.log('hi')
const res = insertionSort([6, 2, 4, 10, 3])
console.log(res)