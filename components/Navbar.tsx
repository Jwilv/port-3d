import Link from 'next/link'
import { useEffect, useState } from 'react'

import { navLinks } from '../constants'
import { logo } from '../assets'
import { styles } from '../styles'
import Image from 'next/image'


const Navbar = () => {

  const [active, setActive] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex items-center 
    py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between 
      items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt='logo'
            className='w-9 h-9 object-contain'
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar