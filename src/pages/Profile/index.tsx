import React from 'react'
import Image from 'next/image'
import sky from '@/assets/img/darkSky.jpg'
import Icon from '@/components/Icon'

const Profile = () => {
  return (
    <div className="h-full relative">
      <Image
        src={sky}
        alt="profile_cover_image"
        className="w-full h-[200px] border-b border-invisible object-cover"
      />
      <div className="h-[200px]">
        <Image
          src={sky}
          alt="profile_photo"
          className="w-[150px] h-[150px] rounded-full absolute top-[120px] left-[40px] object-cover border-[3px] border-white"
        />
        <div className="pt-[80px] p-[10px]">
          <p className="font-bold text-[20px]">Nozimjon Shamsulloev</p>
          <p className="font-medium text-dGray">@nozimjon</p>
          <p className="text-[15px]">
            Hey, it's Nozimjon Shamsulloev, Welcome. I'm fullstack developer.{' '}
          </p>
          <br />
          <div className="flex text-dGray">
            <Icon name="calendar" size={24} />
            <p className="font-medium pl-[10px]">Joined December 2022</p>
          </div>
          <div>
            <p>
              <b className="pl-[5px] pr-[10px]">62</b>Following{' '}
              <b className="pl-[5px] pr-[10px]">13</b>
              Followers
            </p>
          </div>
          <br />
        </div>
        <div className="h-[50px] flex justify-evenly items-center border-b border-invisible">
          <p className="font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center">
            Posts
          </p>
          <p className="font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center">
            Questions
          </p>
          <p className="font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center">
            Replies
          </p>
          <p className="font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center">
            Media
          </p>
          <p className="font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center">
            Likes
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
