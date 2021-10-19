function Footer() {
    return <footer className="grid w-full divide-y-[1px] bg-gray-100 text-gray-500"> 

            <div className="flex justify-center px-8 py-3">
                <div className="mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div>
                    <p>Created by
                        <a href="https://github.com/ShimonOcean" target="_blank"> Shimon</a>
                    </p>
                </div>

            </div>
    </footer>;
    
}

export default Footer
