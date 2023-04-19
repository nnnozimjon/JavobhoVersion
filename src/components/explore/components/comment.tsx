/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon'
import Link from 'next/link'
import Read from '@/components/Read'
import { formatDistanceToNowStrict } from 'date-fns'

interface Props {
  createdAt: string
  username: string
  text: string
  verified: boolean
  fullname: string
  liked: boolean
  likes: number
  avatar: string
}

const BannerComment = ({
  createdAt,
  username,
  fullname,
  text,
  verified,
  liked,
  likes,
  avatar,
}: Props) => {
  const time = createdAt.replace('Z', '+03:00')
  const [distanceString, setDistanceString] = React.useState(() =>
    formatDistanceToNowStrict(new Date(time), { addSuffix: true })
  )

  React.useEffect(() => {
    const interval = setInterval(() => {
      const distanceString = formatDistanceToNowStrict(new Date(time), {
        addSuffix: true,
      })
      setDistanceString(distanceString)
    }, 1000)

    return () => clearInterval(interval)
  }, [distanceString, time])
  return (
    <div className="w-full p-[10px] flex gap-[10px]">
      <div className="flex w-[99%] gap-[10px]">
        <img
          src={avatar}
          alt="comment image"
          className="w-[36px] h-[36px] rounded-full object-cover"
        />
        <div className="flex gap-[5px] flex-col">
          <div className="flex flex-col">
            <div className="flex">
              <Link
                href={`/${username}`}
                className="font-medium text-[13px] cursor-pointer hover:underline"
              >
                {fullname || '@' + username}
              </Link>
              {verified ? (
                <Icon name="verified" className="pl-[5px]" size={20} />
              ) : (
                ''
              )}
            </div>
            <p className="font-semibold text-[10px] text-indigo">
              {distanceString}
            </p>
          </div>
          <div className="font-semibold">
            <Read text={text} className="text-[13px] font-medium " />
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
