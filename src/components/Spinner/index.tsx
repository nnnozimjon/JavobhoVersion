import React from 'react'
import loading from '@/assets/loading.gif'
import Image from 'next/image'

function Spinner() {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-hover">
      <Image src={loading} alt="loading" className="w-[56px]" />
    </div>
  )
}

export default Spinner
