import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full z-10 absolute'>
        {/* <nav className='mx-auto max-w-[1440px] flex justify-between items-center px-6 py-4 sm:px-16'> */}
            <nav className='flex justify-between'>
          <Link href="/" className='flex items-center justify-center'>
          <Image src="/logo.svg" alt='car-logo' width={118} height={18} className='object-contain'/>
          </Link>
          <CustomButton
          title="Sign"
          btnType='button'
          containerStyles='text-primary-blue bg-white rounded-full min-w-[130px]'
          />
         
        </nav>
    </header>
  )
}

export default Navbar
