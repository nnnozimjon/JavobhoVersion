/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Ico from '@/components/icon'
import Link from 'next/link'
import Read from '@/components/Read'
import { formatDistanceToNowStrict } from 'date-fns'
import { PostProps } from '@/components/page/profile/posts'
import BannerComment from '@/components/explore/components/comment'
import { useUser } from '@/store/contexts/UserContect'
import { ApiPost } from '@/api/post'
import Cookies from 'js-cookie'

const PostWithoutImage = ({
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
  repostCount,
  booked,
  isFollowing,
}: PostProps) => {
  const { user } = useUser()
  const token = Cookies.get('access_token') || ''

  const [showComments, setShowComments] = useState<boolean>(false)
  const [commentState, setCommentState] = useState<any[]>([])
  const [commentText, setCommentText] = useState<string>('')
  const [likedByUserState, setLikedByUserState] = useState<boolean>(false)
  const [likedByUsersState, setLikedByUsersState] = useState<any[]>([])
  const [repostCountState, setRepostCountState] = useState<number>(0)
  const [bookMarkState, setBookMarkState] = useState<boolean>(false)
  const [isFollowingState, setIsFollowingState] = useState<boolean>(false)

  React.useEffect(() => {
    setCommentState(comments)
    setLikedByUserState(likedByUser)
    setLikedByUsersState(likedByUsers)
    setRepostCountState(repostCount)
    setBookMarkState(booked)
    setIsFollowingState(isFollowing)
  }, [])

  const handleRepost = () => {
    const token = Cookies.get('access_token') || ''
    ApiPost.repostPost(token, {
      userId: user.userId,
      postId,
    }).then(res => {
      alert(res.message)
    })
  }

  const handleFollow = () => {
    if (isFollowingState) {
      setIsFollowingState(false)
      ApiPost.unfollowUser(token, {
        followerId: user.userId,
        followingId: userId,
      }).then(res => {
        if (res.message != 'success') {
          setIsFollowingState(true)
        }
      })
    } else {
      setIsFollowingState(true)
      ApiPost.followUser(token, {
        followerId: user.userId,
        followingId: userId,
      }).then(res => {
        if (res.message != 'success') {
          setIsFollowingState(false)
        }
      })
    }
  }

  const handleBookmarkPost = () => {
    if (bookMarkState) {
      setBookMarkState(false)
      ApiPost.bookmarkDelete(token, { userId: user.userId, postId }).then(
        res => {
          if (res.message !== 'success') {
            setBookMarkState(true)
          }
        }
      )
    } else {
      setBookMarkState(true)
      ApiPost.bookmarkPost(token, { userId: user.userId, postId }).then(res => {
        if (res.message !== 'success') {
          setBookMarkState(false)
        }
      })
    }
  }

  const handleComment = () => {
    const token = Cookies.get('access_token') || ''
    commentText &&
      ApiPost.commentPost(token, {
        userId: user.userId,
        postId,
        text: commentText,
      }).then(res => {
        if (res.message === 'success') {
          setCommentState((prev: any) => {
            const updatedList = [
              {
                commentLikeByUser: false,
                commentLikeCount: 0,
                createdAt: new Date(
                  new Date().getTime() + 180 * 60 * 1000
                ).toISOString(),
                commenterUsername: user.username,
                commenterAvatar: user.avatar,
                commenterVerified: user.verified,
                commenterFullname: user.fullname,
                text: commentText,
              },
              ...prev,
            ]
            return updatedList
          })
        }
      })
    setCommentText('')
  }

  const handleLikePost = () => {
    if (likedByUserState) {
      // Remove like
      setLikedByUserState(false)
      setLikedByUsersState((prev: any) => {
        const updatedList = prev.filter(
          (item: any) => item.userId !== user.userId
        )
        return updatedList
      })
      ApiPost.unlikePost(token, {
        userId: user.userId,
        postId,
      }).then(res => {
        if (res.message !== 'success') {
          setLikedByUserState(true)
          setLikedByUsersState((prev: any) => {
            const updatedList = [...prev, { userId: user.userId }]
            return updatedList
          })
        }
      })
    } else {
      // Add like
      setLikedByUserState(true)
      setLikedByUsersState((prev: any) => {
        const updatedList = [...prev, { userId: user.userId }]
        return updatedList
      })
      ApiPost.likePost(token, {
        postId,
        userId: user.userId,
      }).then(res => {
        if (res.message !== 'success') {
          setLikedByUserState(false)
          setLikedByUsersState((prev: any) => {
            const updatedList = prev.filter(
              (item: any) => item.userId !== user.userId
            )
            return updatedList
          })
        }
      })
    }
  }

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
    <div
      className={`sm:w-[580px] w-full border-x border-t ${
        !showComments && 'border-b'
      } my-[10px] border-invisible`}
    >
      <div className="p-[10px] flex gap-[10px]">
        <div className="flex w-[99%] gap-[10px]">
          <img
            src={avatar}
            alt="comment image"
            className="sm:w-[36px] w-[25px] sm:h-[36px] h-[25px] rounded-full object-cover"
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
                {verified ? <Ico name="verified" size={20} /> : ''}
                {user.userId != userId && (
                  <button
                    className="font-semibold text-[14px] text-darkblue ml-[5px]"
                    onClick={handleFollow}
                  >
                    {isFollowingState ? 'Following' : 'Follow'}
                  </button>
                )}
              </div>
              <p className=" font-semibold text-[10px] text-indigo">
                {distanceString}
              </p>
            </div>
            <div className="font-semibold">
              <Read text={text || ''} className="text-[16px] font-normal " />
            </div>
            <div className="flex items-center gap-[5px] mt-[5px]">
              <Ico
                onClick={handleLikePost}
                size={15}
                name={`${likedByUserState ? 'liked' : 'like'}`}
                className={`${
                  likedByUserState ? 'text-darkblue' : 'text-dGray'
                } cursor-pointer duration-500`}
              />

              <p className="pl-[3px] pr-[10px] text-[12px] font-medium text-dGray select-none">
                {likedByUsersState.length || 0}
              </p>
              <Ico
                name="repost"
                className="cursor-pointer text-dGray"
                size={17}
                onClick={handleRepost}
              />
              <p className="pl-[3px] pr-[10px] text-[12px] font-medium text-dGray select-none">
                {repostCountState || '0'}
              </p>
              <Ico
                onClick={() => setShowComments(!showComments)}
                name="comment"
                className="cursor-pointer text-dGray"
                size={17}
              />
              <p className="pl-[3px] pr-[10px] text-[12px] font-medium text-dGray select-none">
                {commentState?.length}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-between">
          <Ico
            name="moreHorizontal"
            className="rounded-full text-main hover:bg-[#73fffd5b] cursor-pointer duration-500"
          />
          <div className="flex flex-col items-center cursor-pointer">
            <Ico
              name={bookMarkState ? 'bookmarksFilled' : 'bookmarks'}
              className="cursor-pointer text-dGray"
              size={18}
              onClick={handleBookmarkPost}
            />
          </div>
        </div>
      </div>
      {showComments && (
        <div className="border-b border-t border-invisible w-full p-[10px]">
          <div className="flex justify-between w-[410px] p-[10px] h-[34px] border border-invisible text-lighterIndigo rounded-[8px] items-center">
            <input
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="write a comment"
              className="bg-transparent w-full outline-none placeholder:text-lighterIndigo"
            />
            <Ico
              name="publish"
              className="cursor-pointer"
              size={30}
              onClick={handleComment}
            />
          </div>
          <div className="w-full flex flex-col items-end pt-[10px]">
            {commentState.map((comment, i: number) => (
              <BannerComment
                key={i}
                avatar={comment.commenterAvatar}
                createdAt={comment.createdAt}
                fullname={comment.commenterFullname}
                liked={comment.commentLikeByUser}
                likes={comment.commentLikeCount}
                text={comment.text}
                username={comment.commenterUsername}
                verified={comment.commenterVerified}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Ico
              name="arrowTop"
              className="text-center cursor-pointer"
              onClick={() => setShowComments(!showComments)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PostWithoutImage
