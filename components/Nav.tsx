import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <nav className='w-full h-20 flex items-center justify-center gap-12'>
      <Link href='/bags'>Bags</Link>
      <Link href='/'><Image
        src="/assets/leaf.png" 
        alt="Logo" 
        width={50}
        height={50}
      /></Link>
      <Link href='/about'>About</Link>
      {/* <Link href='/bags'>Contact</Link> */}
    </nav>
  )
}
