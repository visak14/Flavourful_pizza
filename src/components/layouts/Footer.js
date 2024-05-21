import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-white-100 sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-orange-500 to-red-300 body-font">
            <div className="container mx-auto flex flex-wrap flex-col p-3 md:flex-row items-center">
            <Link href={"/"} className='flex title-font font-extrabold items-center uppercase text-gray-100'>
                    {/* <Image src="/path/to/your/image.jpg" alt="Pizza" className="w-10 h-10" /> */}
                    <p className='leading-5 text-xl mx-2'> Flavorful Pizza</p>
                </Link>
                <p className=' text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
                  Copyright 2024 Flavorful Pizza
                </p>
            </div>
            </footer>
  )
}

export default Footer
