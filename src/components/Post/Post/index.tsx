/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon'
import Read from '@/components/Read'
import { PostProps } from '@/components/page/profile/posts'
import { useUser } from '@/store/contexts/UserContect'
import BannerComment from '@/components/explore/components/comment'

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
}) => {
  const [following, setFollow] = React.useState(false)
  const [liked, setLiked] = React.useState(false)

  const { user } = useUser()

  React.useEffect(() => {
    setLiked(likedByUser)
  }, [])

  return (
    <div className="h-fit m-[20px] border border-invisible">
      <div className="rounded-t-[20px] p-[10px_20px] bg-white flex items-center border-b border-invisible">
        <img
          src={avatar}
          className="bg-black text-white rounded-full w-[40px] h-[40px] flex justify-center items-center object-cover"
          alt="profile image"
        />
        <div className="flex justify-between w-full items-center">
          <div className="flex pl-[10px] m-0 flex-col">
            <div className="flex">
              <div className="pr-[10px] font-semibold text-[14px] flex gap-[5px]">
                <p className="font-semibold text-[14px] text-darkestIndigo cursor-pointer">
                  @{username}
                </p>
                {verified && <Icon name="verified" size={20} />}
              </div>
              {/* {following ? (
                <button className="font-semibold text-[14px] text-darkblue">
                  Following
                </button>
              ) : (
                <button className="font-semibold text-[14px] text-darkblue">
                  Follow
                </button>
              )} */}
            </div>
            <div className="font-semibold text-[14px] text-invisible">
              {fullname ? fullname : createdAt}
            </div>
          </div>
          <Icon name="moreHorizontal" className="cursor-pointer" />
        </div>
      </div>
      <div className="d-flex flex-col">
        {text && (
          <Read
            className="px-[15px] pt-[20px] font-semibold text-[14px]"
            text={text}
          />
        )}
        {image && (
          <div className="h-[460px] bg-white">
            <img
              src={image}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center p-[15px]">
        <div className="flex justify-center items-center pl-[10px] text-darkblue">
          <Icon
            name={likedByUser ? 'liked' : 'like'}
            className="cursor-pointer"
            size={20}
          />
          <p className="px-[10px] text-black">like</p>
          <Icon name="repost" className="cursor-pointer text-dGray" size={20} />
          <p className="px-[10px] text-black">repost</p>
          <Icon name="share" className="cursor-pointer text-dGray" size={20} />
          <p className="px-[10px] text-black">send</p>
        </div>
        <p className="text-gray">{comments?.length} comments</p>
      </div>
      <div className="rounded-b-[20px] p-[10px_20px] bg-white border-t border-invisible">
        <div className="text-white flex justify-between w-[410px] p-[10px] h-[34px] bg-main rounded-[8px] items-center">
          <input
            placeholder="write a comment"
            className="bg-transparent w-full outline-none placeholder:text-white"
          ></input>
          <Icon name="publish" className="cursor-pointer" size={30} />
        </div>
      </div>
      {comments.map((comment, i: number) => (
        <BannerComment
          key={i}
          data={{
            createdAt: comment.createdAt,
            liked: comment.commentLikeByUser,
            likes: comment.commentLikeCount,
            name: comment.commenterUsername,
            text: comment.text,
            fullname: comment.commenterFullname,
            username: comment.commenterUsername,
            verified: comment.commenterVerified,
            avatar: comment.commenterAvatar,
          }}
        />
      ))}
    </div>
  )
}

export default Post
