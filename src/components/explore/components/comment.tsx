/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon'
import Link from 'next/link'
import Read from '@/components/Read'
import { formatDistanceToNowStrict } from 'date-fns'

interface props {
  data: data
}
interface data {
  createdAt: string
  username: string
  name: string
  text: string
  verified: boolean
  fullname: string
  liked: boolean
  likes: number
  avatar: string
}

const BannerComment = ({ data }: props) => {
  const {
    createdAt,
    username,
    fullname,
    text,
    verified,
    liked,
    likes,
    avatar,
  } = data
  const distanceString = formatDistanceToNowStrict(new Date(createdAt), {
    addSuffix: true,
  })
  return (
    <div className="p-[10px] flex gap-[10px] hover:bg-[rgba(0,0,0,0.1)] duration-500">
      <div className="flex w-[99%] gap-[10px]">
        <img
          src={avatar}
          alt="comment image"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div className="flex gap-[5px] flex-col">
          <div className="flex flex-col">
            <div className="flex">
              <p className="font-semibold text-[15px] select-none pr-[5px]">
                {fullname}
              </p>
              {verified ? <Icon name="verified" size={20} /> : ''}
              <Link
                href={`/${username}`}
                className="font-medium text-[14px] cursor-pointer hover:underline pl-[5px]"
              >
                @{username}
              </Link>
            </div>
            <p className="font-medium text-[12px] text-indigo">
              {distanceString}
            </p>
          </div>
          <div className="font-semibold text-[16px]">
            <Read text={text} className="text-[14px] font-medium " />
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-between">
        <Icon
          name="moreHorizontal"
          className="rounded-full text-main hover:bg-[#73fffd5b] cursor-pointer duration-500"
        />
        <div className="flex flex-col items-center">
          {liked ? (
            <Icon
              size={15}
              name="loved"
              className="text-main cursor-pointer duration-500"
            />
          ) : (
            <Icon
              size={15}
              name="love"
              className="text-main cursor-pointer duration-500"
            />
          )}
          <p className="text-[12px] font-medium">{likes || 0}</p>
        </div>
      </div>
    </div>
  )
}

export default BannerComment
