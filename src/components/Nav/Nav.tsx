import React from 'react'
import NavLinks from './NavLinks'
import INav from './interface'

const Nav = () => {
  return (
    <div className="w-full h-screen flex justify-between flex-col border-r-[1px]">
      <div className="w-full h-[150px] flex justify-center items-center border-b">
        ICON JAVOBHO
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-start gap-[20px] pl-[30px] py-[10px] ">
        {NavLinks.map((nav: INav.nav, i: number) => (
          <div
            className="flex items-center min-w-[100px] p-[10px] text-start hover:rounded-full hover:bg-cyan-300 cursor-pointer select-none"
            key={i}
          >
            <span>S</span>
            <h1 className="pl-[10px] font-bold text-[1.1875rem]">
              {' '}
              {nav.label}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full h-[100px] flex justify-center items-center border-t">
        LOGOUT
      </div>
    </div>
  )
}

export default Nav
