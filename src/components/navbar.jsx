import React, { useState } from 'react'
import { styles } from '../utils/style'
import { navigationLinks } from '../utils/constants'
import { logo } from '../assets'

const Navbar = () => {

  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState('home');

  const toggleHandler = () => setToggleNav(prev => !prev);
  const handleLinkClick = (id) => setActive(id);

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className='w-[100px] h-[35px] cursor-pointer'/>
        </a>

        {/* navigation links */}
        <ul className={`list-none sm:flex hidden justify-end items-center flex-1`}>
          {navigationLinks.map((nav, idx) => (
            <li
              key={nav.id}
              className={`
                ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}
                ${active === nav.id ? 'text-white' : 'text-lightWhite'}
                font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500`}
              onClick={() => handleLinkClick(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Navigation btn */}
        <div className={`sm:hidden flex flex-1 justify-end items-center`}>
          <i 
            className={`${toggleNav ? 'bi-x-lg' : 'bi-list'} text-white text-2xl`}
            onClick={toggleHandler}
          />

          <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6  absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient z-[99]`}>
            <ul className={`list-none flex justify-center items-center flex-1`}>
              {navigationLinks.map((nav, idx) => (
                  <li 
                  key={nav.id} 
                  className={`
                    ${idx === navigationLinks.length-1 ? 'mr-0' : 'mr-10'}
                    ${active === nav.id ? 'text-white' : 'text-lightWhite'}
                    font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500
                    `}
                  onClick={() => handleLinkClick(nav.id)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar