import Head from 'next/head'
import Image from 'next/image'
import { SearchIcon } from "@heroicons/react/outline"
import Footer from '../components/Footer'
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const {
    geniusArtistTopTen,
  } = require('./utils/geniusAPI.js')

  const router = useRouter();
  const searchInputRef = useRef(null);
 
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)
  };

  geniusArtistTopTen('placeholder, always Drake')

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Lyrics Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <header>
        <div className='font-serif text-center p-10 text-4xl text-indigo-600 font-semibold border-gray-200'>
          <p className="link">generate lyrics</p>
        </div>

        <div>
          <p className='text-center mt-10'>Generate lyrics from your favorite artists from Frank Ocean to Future, with the power of Markov Chains</p>
        </div>
        
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-30 flex-grow w-4/5">
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl
         lg:max-w-2xl'> 
          <input 
            ref={searchInputRef} 
            type="text" 
            placeholder="Enter Artist Name" 
            className="flex-grow focus:outline-none" 
          />
          <SearchIcon className="h-5 mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={search}/>
        </div>
        <div className="mt-5">
          <button onClick={search} className="btn bg-indigo-600 p-3 rounded-md ring-gray-200 text-sm text-white
          hover:ring-2 focus:outline-none active-ring-blue-300 hover:shadow-md">Generate New Lyrics</button>
        </div>
      </form>

      <Footer />

    </div>
  )
}
