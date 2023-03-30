/* eslint-disable no-undef */
import React from 'react'
import Image from 'next/image'
import NavLinks from './NavLinks'
import INav from './interface'
import Logo from '@/assets/img/svg-logo.png'
import Icon from '../icon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter().pathname

  return (
    <div className="w-full h-screen flex justify-between flex-col border-r-[1px] border-invisible">
      <div className="w-full h-[150px] flex items-center pt-[20px] pl-[40px]">
        <Image src={Logo} alt="Javobho logo" className="w-[50px]" />
        <h1 className="font-bold text-[20px] text-[#1D9BF0] pl-[20px]">
          Javobho
        </h1>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-start gap-[20px] pl-[30px] py-[10px]">
        {NavLinks.map((nav: INav.nav, i: number) => (
          <Link
            href={nav.path}
            className={`flex items-center min-w-[100px] w-[252px] h-[48px] px-[16px] py-[14px] text-start ${
              router === nav.path && 'text-white'
            } cursor-pointer select-none rounded-[6px] ${
              router === nav.path && 'bg-[#3C87DF]'
            } hover:bg-[#3C87DF] hover:text-white duration-500`}
            key={i}
          >
            <Icon name={router === nav.path ? nav.activeIcon : nav.icon} />
            <h1 className={`pl-[13px] text-[14px] font-medium`}>{nav.label}</h1>
          </Link>
        ))}
      </div>
      <div className="w-full h-[100px] flex justify-center items-center border-t border-invisible ">
        <Icon name="logout" />
        LOGOUT
      </div>
    </div>
  )
}

export default Nav
