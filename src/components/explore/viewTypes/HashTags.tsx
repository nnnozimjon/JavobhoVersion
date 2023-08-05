import React from 'react'
import Ico from '@/components/icon'
import Link from 'next/link'

const HashTag: React.FC<any> = ({ hash, size, category }: any) => {
  return (
    <div className="px-[10px] py-[5px] flex select-none hover:bg-hover border-b border-invisible">
      <Link href={''} className="w-[80%]">
        <p className="font-medium text-[14px] text-indigo">{category}</p>
        <p className="font-bold text-[16px] text-main">#{hash.toLowerCase()}</p>
      </Link>
      <div className="flex flex-col items-end w-full">
        <Ico
          name="moreHorizontal"
          className="cursor-pointer rounded-full text-main hover:bg-[#73fffd5b] duration-500"
        />
        <p className="font-medium text-[14px] text-indigo">{size} Posts</p>
      </div>
    </div>
  )
}
export default HashTag
