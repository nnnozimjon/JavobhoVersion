/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon'
import Link from 'next/link'
import Read from '@/components/Read'
import { formatDistanceToNowStrict } from 'date-fns'
import { PostProps } from '@/components/page/profile/posts'

const QuestionPost = ({
  createdAt,
  username,
  fullname,
  text,
  verified,
  likedByUser,
  likedByUsers,
  comments,
  postId,
  userId,
  avatar,
}: PostProps) => {
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
              <Link
                href={`/${username}`}
                className="font-medium text-[13px] cursor-pointer hover:underline pr-[3px]"
              >
                {fullname || '@' + username}
              </Link>
              {verified ? <Icon name="verified" size={20} /> : ''}
              <p className="text-main font-semibold text-[13px] select-none pl-[10px]">
                {'Follow'}
              </p>
            </div>
            <p className=" font-semibold text-[10px] text-indigo">
              {distanceString}
            </p>
          </div>
          <div className="font-semibold">
            <Read text={text || ''} className="text-[16px] font-medium " />
          </div>
          <div className="flex items-center gap-[10px] mt-[5px]">
            {likedByUser ? (
              <Icon
                size={15}
                name="liked"
                className="text-dGray cursor-pointer duration-500"
              />
            ) : (
              <Icon
                size={15}
                name="like"
                className="text-dGray cursor-pointer duration-500"
              />
            )}
            <p className="text-[12px] font-medium">
              {likedByUsers.length || 0}
            </p>
            <Icon name="edit" className="cursor-pointer text-dGray" size={17} />
            <p className="text-[12px] font-medium">0</p>
            <Icon
              name="repost"
              className="cursor-pointer text-dGray"
              size={17}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-between">
        <Icon
          name="moreHorizontal"
          className="rounded-full text-main hover:bg-[#73fffd5b] cursor-pointer duration-500"
        />
        <div className="flex flex-col items-center">
          <Icon
            name="comment"
            className="cursor-pointer text-dGray"
            size={17}
          />
          <p className="text-[12px] font-medium">{comments?.length}</p>
        </div>
      </div>
    </div>
  )
}

export default QuestionPost
