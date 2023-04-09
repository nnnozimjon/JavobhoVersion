import Image from 'next/image'
import React from 'react'
import loadingImage from '@/assets/loading.gif'

export const Loading = () => {
  return (
    <div className="p-[50px] flex items-center justify-center">
      <Image src={loadingImage} alt="loading" width={50} />
    </div>
  )
}
