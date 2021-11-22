import swapArr from "../Functions/helpers"
// make bubble sort

// save all steps of the array to an array
// bubbleSort([7,1,3,6])
// [7,1,3,6]
// [1,7,3,6]
// [1,3,6,7]

// return [[7,1,3,6], [1,7,3,6], [1,3,6,7]]

const bubbleSort = (arr) => {
    // loop each array data
    // [7,1,3,6]
    // make new arr to not modify state arr
    const newArr = arr.slice()
    const steps = [[...newArr]]
    const compareSteps = [[-1, -1]]
    for (let i = 0; i < newArr.length; i++) {
        let swapped = false
        for (let j = 0; j < newArr.length - i; j++) {
            // check if currentIndex data "7" is greater than next index data "1"
            // if it is, swap both items
            if (newArr[j] > newArr[j + 1]) {
                steps.push([...newArr])
                compareSteps.push([j + 1, j])
                swapArr(newArr, j, j + 1)
                swapped = true
                // compareSteps.push([i, j])
            }
            compareSteps.push([j, j + 1])
            steps.push([...newArr])
            // console.log(i, j, "[]", newArr[i], newArr[j])
            // if its not, continue.
        }
        if (!swapped) break;

    }
    compareSteps.push([])
    return { steps, compareSteps }
}


export default bubbleSort