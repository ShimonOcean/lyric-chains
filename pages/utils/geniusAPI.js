const axios = require('axios');
const open = require('open');
const fetch = require('fetch');
const client_id = process.env.GENIUS_CLIENT_ID;
const client_secret = process.env.GENIUS_CLIENT_SECRET;
const redirect_uri = "https://httpbin.org/anything";

export const geniusArtistTopTen = () => {
    let params = {
        client_id: client_id,
        redirect_uri: redirect_uri,
        response_type: "code",
        scope: "me",
      };
    
    let endpoint = "https://api.genius.com/oauth/authorize?";
    endpoint = endpoint + new URLSearchParams(params);
    
    open(endpoint);

    let drakeEndpoint = "https://genius.com/api/search/artist?q=Drake"
    // let endpoint = "https://api.genius.com/oauth/authorize?"; 
    // endpoint = endpoint + new URLSearchParams(params);
    const res = fetch(drakeEndpoint)
    const data = res.json()

    if (!data) {
      console.log('no data')
    } else{
      console.log(data)
    }
}


// params["code"] = process.env.GENIUS_API_KEY
// params["grant_type"] = "authorization_code"

// const access_token_url = "https://api.genius.com/oauth/token?"
// let response = await fetch(access_token_url + new URLSearchParams(params), {
//     headers: { Accept: "application/json", method: "POST" },
// });
// let data = await response.json();
// const access_token = data["access_token"]
// console.log(access_token)

// const getURLResponse = (url) => {
//     const axiosResp = axios.get(url);
//     return axiosResp;
// }



// const geniusArtistTopTen = artist => {
//     return new Promise((res, rej) => {
//         getURLResponse(`api.genius.com/search?q=Drake&access_token=GA0HZyW06leR5KRTWR0StPP18hbCpOJdVf4OX-fhOICf9-hmrZFgaOccEYCfqH8l`)
//             .then((response) => {
//                 var result = response.data.response.sections[0].hits[0].result;
//                 console.log(response)
//                 console.log(artist)
//                 res(result)
//             }).catch(err => {
//                 console.log('Issue getting response');
//                 rej(err);
//             })
//     })
// }


export default geniusArtistTopTen;