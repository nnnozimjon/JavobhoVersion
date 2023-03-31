import React from 'react'
import Image from 'next/image'

import image from '@/assets/img/darkSky.jpg'
import ImagePost from '@/assets/img/back.jpg'
import Icon from '@/components/icon'
import Read from '@/components/Read'

const Post: React.FC<any> = () => {
  return (
    <div className="w-[580px] h-fit m-[20px] rounded-[20px] border border-invisible">
      <div className="rounded-t-[20px] p-[10px_20px] bg-white flex items-center border-b border-invisible">
        <Image
          src={image}
          className="bg-black text-white rounded-full w-[40px] h-[40px] flex justify-center items-center object-cover"
          alt="profile image"
        />
        <div className="flex justify-between w-full items-center">
          <div className="flex pl-[10px] m-0 flex-col">
            <div className="flex">
              <div className="pr-[10px] font-semibold text-[14px]">
                @nozimjon
              </div>
              <button className="font-semibold text-[14px] text-darkblue">
                Follow
              </button>
            </div>
            <div className="font-semibold text-[14px] text-invisible">
              Job || Profile Description
            </div>
          </div>
          <Icon name="moreHorizontal" className="cursor-pointer" />
        </div>
      </div>
      <div className="d-flex flex-col">
        <Read
          className="p-[15px_20px] font-semibold text-[14px]"
          text="TextFree is a mobile application and web service that allows users to
          send and receive text messages, as well as make and receive VoIP phone
          calls, for free over the internet. The service costs nothing because
          it is supported by ads, but users have the option of paying for an
          ad-free version with enhanced features."
        />
        <div className="h-[360px] bg-white">
          <Image src={ImagePost} alt="post" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center p-[15px]">
        <div className="flex justify-center items-center pl-[10px] text-darkblue">
          <Icon name="liked" className="cursor-pointer" size={20} />
          <p className="px-[10px] text-black">like</p>
          <Icon name="repost" className="cursor-pointer text-dGray" size={20} />
          <p className="px-[10px] text-black">repost</p>
          <Icon name="share" className="cursor-pointer text-dGray" size={20} />
          <p className="px-[10px] text-black">send</p>
        </div>
        <p className="text-gray">23 comments</p>
      </div>
      <div className="rounded-b-[20px] p-[10px_20px] bg-white border-t border-invisible">
        <div className="text-white flex justify-between w-[410px] p-[10px] h-[34px] bg-dGray rounded-[8px] items-center">
          <input
            placeholder="write a comment"
            className="bg-transparent w-full outline-none placeholder:text-white"
          ></input>
          <Icon name="publish" className="cursor-pointer" size={30} />
        </div>
      </div>
    </div>
  )
}

export default Post
