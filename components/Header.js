import { SearchIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Footer from "./Footer";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if (!term) return;
    
        router.push(`/search?term=${term}`)
    };

    return (
        <header className="sticky top-0 bg-white"> 
        <div className="flex w-full p-6 items-center">
            <div className='font-serif text-center text-xl text-indigo-600 font-semibold border-gray-200'>
                <p className="link">generate lyrics</p>
            </div>

            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-4xl items-center">
                <input ref={searchInputRef} 
                    className="flex-grow w-full focus:outline-none" 
                    type="text"
            />
                <XIcon 
                    className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick={() => (searchInputRef.current.value = "")}
                />
                <SearchIcon 
                    className="mr-3 h-6 hidden sm:inline-flex text-gray-500 border-l-2 pl-4 cursor-pointer " 
                    onClick={search}
                />
                <button hidden type='submit' onClick={search}>Search</button>
            </form>
        </div>


        
        </header>
        
        
    );

}

export default Header;
