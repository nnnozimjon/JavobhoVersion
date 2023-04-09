/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Icon from '../Icon'

interface Props {
  isFollowing?: boolean
  fullname?: string
  username: string
  avatar: string
  verified: boolean
}

const TrendsToFollow = ({
  isFollowing = false,
  fullname,
  username,
  avatar,
  verified,
}: Props) => {
  const [follow, setFollow] = useState<boolean>()

  useEffect(() => {
    setFollow(isFollowing)
  }, [])

  return (
    <div className="p-[10px] flex items-center justify-between hover:bg-hover duration-300 cursor-pointer">
      <div className="flex items-center gap-[10px]">
        <img
          src={avatar}
          className="w-[45px] h-[45px] rounded-full"
          alt="profile image"
        />
        <div>
          <div className="flex gap-[5px]">
            <p className="font-bold text-[14px] hover:underline ">{fullname}</p>
            {verified && <Icon name="verified" />}
          </div>
          <p className="font-medium text-[14px] text-darkerIndigo ">
            @{username}
          </p>
        </div>
      </div>
      <button
        onClick={() => setFollow(!follow)}
        className="p-[5px_10px] rounded-full text-[14px] font-semibold bg-main hover:bg-darkblue text-white transition duration-300"
      >
        {follow ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default TrendsToFollow
