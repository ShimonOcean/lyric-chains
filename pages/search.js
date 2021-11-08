import Head from "next/head";
import Header from "../components/Header";
const client_id = process.env.GENIUS_CLIENT_ID;
const redirect_uri = "https://httpbin.org/anything";


function Search({ results }) {
    return <div>
          <Head>
            <title>Artist Search Result</title>
          </Head>  

        {/* Header */}
        <Header />

        </div>
}

export default Search

// export async function getServerSideProps() {
//   let params = {
//     client_id: client_id,
//     redirect_uri: redirect_uri,
//     response_type: "code",
//     scope: "me",
//   };

//   // let drakeEndpoint = "https://genius.com/api/search/artist?q=Drake"
//   let endpoint = "https://api.genius.com/oauth/authorize?"; 
//   endpoint = endpoint + new URLSearchParams(params);
//   const res = await fetch(drakeEndpoint)
//   const data = await res.json()

//   if (!data) {
//     console.log('no data')
//     return {
//       notFound: true,
//     }
//   }
//   console.log('data gotten')
//   return {
//     props: {
//       results: data
//     }, // will be passed to the page component as props
//   }
// }

