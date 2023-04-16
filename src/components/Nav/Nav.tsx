/* eslint-disable no-undef */
import React, { useState } from 'react'
import Image from 'next/image'
import NavLinks from './NavLinks'
import INav from './interface'
import Logo from '@/assets/img/svg-logo.png'
import Icon from '../Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavButton from './components/NavButton'
import Cookies from 'js-cookie'

const Nav = () => {
  const router = useRouter().pathname
  // const [showMore, setShowMore] = useState<boolean>(false)

  const handleLogout = async () => {
    Cookies.remove('access_token')
    window.location.replace('/login')
  }

  return (
    <div className="w-full h-screen flex justify-between flex-col border-r-[1px] border-invisible">
      <div className="w-full h-[150px] flex items-center pt-[20px] pl-[40px]">
        <Image src={Logo} alt="Javobho logo" className="w-[50px]" />
        <h1 className="font-bold text-[20px] text-[#1D9BF0] pl-[20px]">
          Javobho
        </h1>
      </div>
      <div className="w-full h-full pl-[30px] px-[20px]">
        {NavLinks.map((nav: INav.nav, i: number) => (
          <Link href={nav.path} key={i}>
            <NavButton
              className={`${router === nav.path && 'text-white'} ${
                router === nav.path && 'bg-[#3C87DF]'
              } `}
              icon={router === nav.path ? nav.activeIcon : nav.icon}
              label={nav.label}
            />
          </Link>
        ))}

        {/* <div className="relative">
          <NavButton
            id="dropdownDefaultButton"
            data_dropdown_toggle={'dropdown'}
            icon={'moreHorizontalScale'}
            label={'More'}
            onClick={() => setShowMore(!showMore)}
          />
        </div> */}
      </div>
      <div className="w-full h-[100px] flex justify-center items-center border-t border-invisible ">
        <div
          onClick={() => handleLogout()}
          className="flex p-[10px_20px] rounded-[6px] w-[252px] hover:bg-[#FC8181] hover:text-white duration-500 select-none cursor-pointer"
        >
          <Icon name="logout" />
          <button className="pl-[20px] font-medium">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
