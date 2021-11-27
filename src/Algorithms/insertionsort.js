function insertionSort(arr) {
    // loop arr
    const newArr = arr.slice()
    const steps = [[...newArr]]
    const compareSteps = [[-1, -1]]
    for (let i = 1; i < newArr.length; i++) {
        // save newArr[i] to currentItem variable
        let currentItem = newArr[i];
        let j = i - 1
        // example i = 3 {last index of newArr}
        // compare it to 2, or i - 1 up to zero
        while (j > -1 && newArr[j] > currentItem) {
            newArr[j + 1] = newArr[j]
            steps.push([...newArr])
            // compareSteps.push([i, j])
            j--

        }
        newArr[j + 1] = currentItem
        steps.push([...newArr])
        // compareSteps.push([i, j])
    }
    compareSteps.push([])
    return { steps, compareSteps }
}


export default insertionSort