import { merge } from "../Functions/helpers"

const mergeSort = (arr) => {
    const newArr = arr.slice()
    const steps = [[...newArr]]
    const compareSteps = [[-1, -1]]

    return { steps, compareSteps }
}


export default mergeSort