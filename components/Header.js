import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);


    return (
        <header> 
            <div>
                generate lyrics
            </div>
            <form className="flex border border-gray-200">
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text"/>
            </form>
        </header>
        
    );

}

export default Header;
