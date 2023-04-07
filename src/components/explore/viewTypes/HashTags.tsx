import React from 'react'
import Icon from '@/components/icon/Icon'
import Link from 'next/link'

const HashTag: React.FC<any> = ({ hash, size, category }: any) => {
  return (
    <div className="px-[10px] py-[5px] flex select-none hover:bg-hover">
      <Link href={hash} className="w-[99%]">
        <p className="font-medium text-[14px] text-indigo">{category}</p>
        <p className="font-bold text-[16px] text-black">{hash}</p>
        <p className="font-medium text-[14px] text-indigo">{size} Posts</p>
      </Link>
      <Icon
        name="moreHorizontal"
        className="cursor-pointer rounded-full text-main hover:bg-[#73fffd5b] duration-500 z-10"
      />
    </div>
  )
}
export default HashTag
