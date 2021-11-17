// Random Array Number generator

const RNG = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const RANG = (len, min, max) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        const randomNumber = RNG(min, max)
        arr.push(randomNumber)
    }
    return arr
}

export default RANG