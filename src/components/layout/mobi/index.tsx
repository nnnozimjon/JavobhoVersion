import React from 'react'

const MobiLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-main">
      <div className="h-[46px] bg-black pl-[15px] flex items-center font-bold text-main">
        Javobho
      </div>
      <div className="h-[calc(100vh_-_92px)]">{children}</div>
      <div className="h-[46px] bg-black"></div>
    </div>
  )
}

export default MobiLayout
