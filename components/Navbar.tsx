import Link from 'next/link'
import { useState } from 'react'

import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { styles } from '../styles'
import Image from 'next/image'

import stylesNav from './styles.module.css'


const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center 
    py-5 fixed top-0 z-20 bg-primary sm:px-16 px-6`}
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
          <p
            className='text-white text-[18px] font-bold cursor-pointer flex'
          >Juan &nbsp; <span className='sm:block'>| Wilvers</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">

          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          />

          <div className={`${!toggle ? "hidden" : "flex"} ${stylesNav.menu} bg-primary`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px] ${stylesNav.items}`}
              onClick={() => {
                setToggle(!toggle)
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>

        </div>


      </div>
    </nav>
  )
}

export default Navbar