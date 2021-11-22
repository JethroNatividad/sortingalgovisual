// [6,2,4,10,3]


// 0, 1
// 1, 2
// 2, 3
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            console.log(j, j + 1)
        }
        console.log('\n')
    }

}
// console.log('hi')
bubbleSort([6, 2, 4, 10, 3])