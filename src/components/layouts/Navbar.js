import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="text-white-100 sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-orange-500 to-red-300 body-font">
            <div className="container mx-auto flex flex-wrap flex-col p-3 md:flex-row items-center">
                <Link href={"/"} className='flex title-font font-extrabold items-center uppercase text-gray-100'>
                    {/* <Image src="/path/to/your/image.jpg" alt="Pizza" className="w-10 h-10" /> */}
                    <p className='leading-5 text-xl mx-2'> Flavorful Pizza</p>
                </Link>

                <nav className=' md:ml-auto flex flex-wrap items-center text-base justify-center'>
                    <Link
                        href={"/cart"}
                        className=' text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center'
                    >
                        Cart
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mx-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                        <span className="inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 ring-1 shadow-[0_0_15px_1px_rgba(220,38,38)]  ring-inset ring-red-600/10">
                            0
                        </span>
                    </Link>
                    <Link
                        href={"/orders"}
                        className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
                    >
                        My Orders
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mx-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </Link>
                    <Link
                        href={"/login"}
                        className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
                    >
                        Login
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                        </svg>
                    </Link>

                    <Link
                        href={"/signup"}
                        className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
                    >
                        Signup
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mx-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                            />
                        </svg>
                    </Link>
                </nav>
                <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white bg-black rounded-full p-1  dark:text-black dark:bg-white flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>{" "}
          /
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
            </div>
        </header>
    )
}

export default Navbar
