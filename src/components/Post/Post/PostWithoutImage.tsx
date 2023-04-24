/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Icon from '@/components/Icon'
import Link from 'next/link'
import Read from '@/components/Read'
import { formatDistanceToNowStrict } from 'date-fns'
import { PostProps } from '@/components/page/profile/posts'
import BannerComment from '@/components/explore/components/comment'
import { useUser } from '@/store/contexts/UserContect'
import { ApiPost } from '@/api/post'
import Cookies from 'js-cookie'
import Modal from '@/components/useModal/Modal'
import RepostModal from '@/components/Modals/RepostModal'

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
}: PostProps) => {
  const { user } = useUser()
  const token = Cookies.get('access_token') || ''

  const [showComments, setShowComments] = useState<boolean>(false)
  const [commentState, setCommentState] = useState<any[]>([])
  const [commentText, setCommentText] = useState<string>('')
  const [likedByUserState, setLikedByUserState] = useState<boolean>(false)
  const [likedByUsersState, setLikedByUsersState] = useState<any[]>([])
  const [repostCountState, setRepostCountState] = useState<number>(0)

  const [repostModalState, setRepostModalState] = useState<boolean>(false)

  React.useEffect(() => {
    setCommentState(comments)
    setLikedByUserState(likedByUser)
    setLikedByUsersState(likedByUsers)
    setRepostCountState(repostCount)
  }, [])

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

  const openRepostModal = () => {
    setRepostModalState(true)
  }
  const closeRepostModal = () => {
    setRepostModalState(false)
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
      className={`w-[580px] border-x border-t ${
        !showComments && 'border-b'
      } my-[10px] border-invisible`}
    >
      <div className="w-[580px] p-[10px] flex gap-[10px]">
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
              <Read text={text || ''} className="text-[16px] font-normal " />
            </div>
            <div className="flex items-center gap-[5px] mt-[5px]">
              <Icon
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
              <Icon
                name="repost"
                className="cursor-pointer text-dGray"
                size={17}
                onClick={openRepostModal}
              />
              <p className="pl-[3px] pr-[10px] text-[12px] font-medium text-dGray select-none">
                {repostCountState || '0'}
              </p>
              <Icon
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
          <Icon
            name="moreHorizontal"
            className="rounded-full text-main hover:bg-[#73fffd5b] cursor-pointer duration-500"
          />
          <div className="flex flex-col items-center cursor-pointer">
            <Icon
              name="share"
              className="cursor-pointer text-dGray"
              size={17}
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
            <Icon
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
            <Icon
              name="arrowTop"
              className="text-center cursor-pointer"
              onClick={() => setShowComments(!showComments)}
            />
          </div>
        </div>
      )}
      <Modal
        isOpen={repostModalState}
        closeModal={closeRepostModal}
        children={<RepostModal />}
        title="Repost"
      />
    </div>
  )
}

export default PostWithoutImage
