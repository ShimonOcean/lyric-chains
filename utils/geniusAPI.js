const axios = require('axios');


const getURLResponse = (url) => {
    const axiosResp = axios.get(url);
    return axiosResp;
}

const geniusArtistTopTen = (artist) => {
    return new Promise((res, rej) => {
        getURLResponse(`api.genius.com/search?q=${Drake}`)
            .then((response) => {
                var result = response.data.response.sections[0].hits[0].result;
                console.log(result)
            })
    })
}

module.exports = {
    getArtistTopTen,
}

