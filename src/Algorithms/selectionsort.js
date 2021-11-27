import swapArr from "../Functions/helpers"
function selectionSort(arr) {
    // loop arr
    const newArr = arr.slice()
    const steps = [[...newArr]]
    const compareSteps = [[-1, -1]]
    for (let i = 0; i < newArr.length; i++) {
        // save current item to min var
        let min = i
        // loop starting from second item
        for (let j = i + 1; j < newArr.length; j++) {
            // check if second item lesser than min
            steps.push([...newArr])
            compareSteps.push([i - 1, min, j])
            if (newArr[j] < newArr[min]) {
                min = j
                steps.push([...newArr])
                compareSteps.push([i - 1, min, j])
            }
            // if yes, set it to min


        }
        if (min !== i) {
            steps.push([...newArr])
            compareSteps.push([i, min])
            swapArr(newArr, i, min)
            steps.push([...newArr])
            compareSteps.push([min, i])
        }
        // swap min to current item
    }
    compareSteps.push([])
    return { steps, compareSteps }
}


export default selectionSort