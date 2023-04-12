/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon'
import Link from 'next/link'
import Read from '@/components/Read'
import { formatDistanceToNowStrict } from 'date-fns'

interface data {
  createdAt: string
  username: string
  text: string
  verified: boolean
  fullname: string
  liked: boolean
  likes: number
  avatar: string
}

const PostWithoutImage = ({
  createdAt,
  username,
  fullname,
  text,
  verified,
  liked,
  likes,
  avatar,
}: data) => {
  const distanceString =
    createdAt &&
    formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    })

  return (
    <div className="w-[580px] border my-[10px] border-invisible p-[10px] flex gap-[10px] duration-500">
      <div className="flex w-[99%] gap-[10px]">
        <img
          src={avatar}
          alt="comment image"
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="flex gap-[5px] flex-col">
          <div className="flex flex-col">
            <div className="flex">
              <p className="font-semibold text-[13px] select-none pr-[3px]">
                {fullname}
              </p>
              {verified ? <Icon name="verified" size={20} /> : ''}
              <Link
                href={`/${username}`}
                className="font-medium text-[13px] cursor-pointer hover:underline pl-[5px]"
              >
                @{username}
              </Link>
            </div>
            <p className="font-semibold text-[10px] text-indigo">
              {distanceString}
            </p>
          </div>
          <div className="font-semibold">
            <Read text={text} className="text-[16px] font-medium " />
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
              name="liked"
              className="text-main cursor-pointer duration-500"
            />
          ) : (
            <Icon
              size={15}
              name="like"
              className="text-main cursor-pointer duration-500"
            />
          )}
          <p className="text-[12px] font-medium">{likes || 0}</p>
        </div>
      </div>
    </div>
  )
}

export default PostWithoutImage
