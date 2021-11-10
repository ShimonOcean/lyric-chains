
class MarkovChain {
    constructor() {
        this.chain = {};
    }

    addPair(prev, next) {
        if (prev == next){
            return
        }
        const nextDict = this.chain[prev] || {}
        const nextWord = nextDict[next] || 0
        nextDict[next] = nextWord + 1
        this.chain[prev] = nextDict
    }

    predictor(prev) {
        if (Object.keys(this.chain).length == 0){
            throw new Error('No elements in Markov Chain')
        }
        const nextDict = this.chain[prev]
        if (nextDict == undefined) {
            const randIdx = randInt(Object.keys(this.chain).length)
            return Object.keys(this.chain)[randIdx]
        }
    }
}

const randInt = (max) => {
    return Math.floor(Math.random() * max);
}

const rawTextToWords = (text) => {
    return text.trim().toLowerCase()
        .split(' ')
        .filter(s => s != '')
}