import React from 'react'
import Nav from '../Nav/Nav'
import { ILayout } from './layout'
import NavLinks from '../Nav/NavLinks'
import { useRouter } from 'next/router'

const DesktopLayout = ({ children }: ILayout) => {
  const { pathname } = useRouter()

  return (
    <div className="w-screen h-screen flex justify-between invisible lg:visible xl:visible">
      <div className="w-[300px] min-w-[300px]">
        <Nav />
      </div>
      <div className="w-full">
        <div className="w-full h-14 px-[20px] flex items-center border-b border-invisible">
          <h1 className="font-bold">
            {NavLinks.filter(path => path.path == pathname)[0].label}
          </h1>
        </div>
        <div className="h-[calc(100vh_-_56px)] w-full min-w-[600px]">
          {children}
        </div>
      </div>
      <div className="w-[400px] min-w-[400px] border-l border-invisible">
        Ads
      </div>
    </div>
  )
}

export default DesktopLayout
