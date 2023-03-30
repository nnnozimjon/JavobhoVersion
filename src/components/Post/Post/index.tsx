import React from 'react'
import Image from 'next/image'

import image from '@/assets/img/darkSky.jpg'

const Post: React.FC<any> = () => {
  return (
    <div className="w-[580px] h-fit m-[20px] rounded-[20px] border border-invisible">
      <div className="rounded-t-[20px] p-[10px_20px] bg-white">
        <div className="border rounded-full w-[40px] h-[40px] flex justify-center items-center">
          I
        </div>
      </div>
      <div className="h-[600px] bg-main">CONTENT</div>
      <div className="rounded-b-[20px] p-[10px_20px] bg-white">FOOTER</div>
    </div>

    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <Image className="w-full" src={image} alt="Sunset in the mountains" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    //     <p className="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    //       quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    //       nihil.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #photography
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #travel
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #winter
    //     </span>
    //   </div>
    // </div>
  )
}

export default Post
