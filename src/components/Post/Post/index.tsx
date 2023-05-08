/* eslint-disable react/no-children-prop */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Ico from '@/components/Icon'
import Read from '@/components/Read'
import { PostProps } from '@/components/page/profile/posts'
import { useUser } from '@/store/contexts/UserContect'
import BannerComment from '@/components/explore/components/comment'
import { formatDistanceToNowStrict } from 'date-fns'
import Cookies from 'js-cookie'
import { ApiPost } from '@/api/post'

const Post: React.FC<PostProps> = ({
  postId,
  text,
  image,
  type,
  status,
  createdAt,
  userId,
  username,
  fullname,
  verified,
  avatar,
  likedByUser,
  comments,
  likedByUsers,
  repostCount,
  booked,
  isFollowing,
  isUserFollowing,
  setIsUserFollowing,
}) => {
  const { user } = useUser()
  const token = Cookies.get('access_token') || ''

  const [showComments, setShowComments] = useState<boolean>(false)
  const [commentState, setCommentState] = useState<any[]>([])
  const [commentText, setCommentText] = useState<string>('')
  const [likedByUserState, setLikedByUserState] = useState<boolean>(false)
  const [likedByUsersState, setLikedByUsersState] = useState<any[]>([])
  const [repostCountState, setRepostCountState] = useState<number>(0)

  const [bookMarkState, setBookMarkState] = useState<boolean>(false)
  // const [isFollowingState, setIsFollowingState] = useState<boolean>(false)

  React.useEffect(() => {
    setCommentState(comments)
    setLikedByUserState(likedByUser)
    setLikedByUsersState(likedByUsers)
    setRepostCountState(repostCount)
    setBookMarkState(booked)
    // setIsFollowingState(isFollowing)
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
    if (isUserFollowing) {
      setIsUserFollowing(false)
      ApiPost.unfollowUser(token, {
        followerId: user.userId,
        followingId: userId,
      }).then(res => {
        if (res.message != 'success') {
          setIsUserFollowing(true)
        }
      })
    } else {
      setIsUserFollowing(true)
      ApiPost.followUser(token, {
        followerId: user.userId,
        followingId: userId,
      }).then(res => {
        if (res.message != 'success') {
          setIsUserFollowing(false)
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
        userId: user.userId,
        postId,
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
    <div className="w-[580px] h-fit mt-[10px] border border-invisible">
      <div className="rounded-t-[20px] p-[5px_15px] bg-white flex items-center border-b border-invisible">
        <img
          src={avatar}
          className="bg-black text-white rounded-full w-[36px] h-[36px] flex justify-center items-center object-cover"
          alt="profile image"
        />
        <div className="flex justify-between w-full items-center">
          <div className="flex pl-[10px] m-0 flex-col">
            <div className="flex">
              <div className="pr-[10px] font-semibold text-[14px] flex gap-[5px]">
                <p className="font-semibold text-[14px] text-darkestIndigo cursor-pointer">
                  {fullname || '@' + username}
                </p>
                {verified ? <Ico name="verified" size={20} /> : ''}
              </div>
              {user.userId != userId && (
                <button
                  className="font-semibold text-[14px] text-darkblue"
                  onClick={handleFollow}
                >
                  {isUserFollowing ? 'Following' : 'Follow'}
                </button>
              )}
            </div>
            <div className="font-semibold text-[12px] text-lighterIndigo">
              {distanceString}
            </div>
          </div>
          <Ico name="moreHorizontal" className="cursor-pointer" />
        </div>
      </div>
      <div className="d-flex flex-col">
        {text && (
          <Read
            className="px-[15px] pt-[4px] pb-[4px] font-normal text-[14px]"
            text={text}
          />
        )}
        {image && (
          <div
            className={`w-full h-[460px] bg-white flex justify-center border-b ${
              text && 'border-t'
            } border-invisible`}
          >
            <img
              src={image}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center p-[5px_15px]">
        <div className="flex justify-center items-center pl-[10px] text-darkblue ">
          <Ico
            onClick={handleLikePost}
            name={likedByUserState ? 'liked' : 'like'}
            className={`${
              likedByUserState ? 'text-darkblue' : 'text-dGray'
            } cursor-pointer duration-500`}
            size={18}
          />
          <p className="pl-[5px] pr-[10px] text-black">
            {likedByUsersState?.length}
          </p>
          <Ico
            name="repost"
            className="cursor-pointer text-dGray"
            size={18}
            onClick={handleRepost}
          />
          <p className="pl-[5px] pr-[10px] text-black">
            {repostCountState || '0'}
          </p>
          <Ico
            name={bookMarkState ? 'bookmarksFilled' : 'bookmarks'}
            className="cursor-pointer text-dGray"
            size={18}
            onClick={handleBookmarkPost}
          />
          <p className="pl-[5px] pr-[10px] text-black">save</p>
        </div>
        <button
          className="text-gray"
          onClick={() => setShowComments(!showComments)}
        >
          {commentState?.length} comments
        </button>
      </div>
      <div className="rounded-b-[20px] p-[10px_20px] bg-white border-t border-invisible">
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
      </div>
      {showComments &&
        commentState.map((comment, i: number) => (
          <BannerComment
            key={i}
            createdAt={comment.createdAt}
            liked={comment.commentLikeByUser}
            likes={comment.commentLikeCount}
            text={comment.text}
            fullname={comment.commenterFullname}
            username={comment.commenterUsername}
            verified={comment.commenterVerified}
            avatar={comment.commenterAvatar}
          />
        ))}
    </div>
  )
}

export default Post
