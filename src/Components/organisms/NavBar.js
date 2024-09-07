import Image from 'next/image'
import React from 'react'
import icon from '@/assets/images/icon.png'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='container mx-auto h-14 border border-red-500'>
        <Link href="/" className='flex gap-2'>
            {/* <Image src={icon} alt='company' className='w-3 h-3 object-contain' /> */}
            <h1 className='text-xl font-bold text-gray-500'>Food</h1>
        </Link>
    </nav>
  )
}

export default NavBar