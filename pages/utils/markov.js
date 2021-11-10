
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
}

const rawTextToWords = (text) => {
    return text.trim().toLowerCase()
        .split(' ')
        .filter(s => s != '')
}