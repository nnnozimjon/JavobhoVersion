import React from 'react'
import { QuestionPost } from '@/components/Post'

export interface PostProps {
  postId: number
  text?: string
  image?: string
  type?: string
  status?: string
  createdAt: string
  userId: number
  username: string
  fullname?: string
  verified: boolean
  avatar: string
  likedByUser: boolean
  comments: Comment[]
  likedByUsers: LikedUser[]
  repostCount: number
}

export interface QuestionPostProps {
  postId: number
  text?: string
  image?: string
  type?: string
  status?: string
  createdAt: string
  userId: number
  username: string
  fullname?: string
  verified: boolean
  avatar: string
  likedByUser: boolean
  likedByUsers: LikedUser[]
  repostCount: number
}

export interface Comment {
  commentId: number
  userId: number
  text: string
  createdAt: string

  commenterUsername: string
  commenterVerified: boolean
  commenterFullname: string
  commenterAvatar: string
  commentLikeCount: number
  commentLikeByUser: boolean
}

export interface LikedUser {
  userId: number
  username: string
  verified: boolean
  fullname?: string
}

const QuestionView: React.FC<any> = ({ posts }: any) => {
  return (
    <div className="w-full flex items-center flex-col">
      {posts[0]?.map(
        (post: PostProps, i: number) =>
          post.type === 'question' && (
            <QuestionPost
              key={i}
              avatar={post.avatar}
              createdAt={post.createdAt}
              fullname={post.fullname || ''}
              username={post.username}
              likedByUser={post.likedByUser}
              likedByUsers={post.likedByUsers}
              text={post.text || ''}
              verified={post.verified}
              postId={post.postId}
              userId={post.userId}
              repostCount={post.repostCount}
            />
          )
      )}
    </div>
  )
}

export default QuestionView
