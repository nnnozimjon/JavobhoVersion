import React from 'react'
import Nav from '../Nav/Nav'
import { ILayout } from './layout'

const DesktopLayout = ({ title, children }: ILayout) => {
  return (
    <div className="w-screen h-screen flex justify-between">
      <div className="w-[300px] min-w-[300px]">
        <Nav />
      </div>
      <div className="w-full">
        <div className="w-full h-14 px-[20px] flex items-center border-b">
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="h-[calc(100vh_-_56px)]">{children}</div>
      </div>
      <div className="w-[400px] min-w-[400px] border">Ads</div>
    </div>
  )
}

export default DesktopLayout
