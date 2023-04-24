import React from 'react'
import { Post, ReplyPost } from '@/components/Post'
import PostWithoutImage from '@/components/Post/Post/PostWithoutImage'

export interface PostProps {
  postId?: number
  text: string
  image?: string
  type?: string
  status?: string
  createdAt: string
  userId: number
  username: string
  fullname: string
  verified: boolean
  avatar: string
  likedByUser: boolean
  comments: Comment[]
  likedByUsers: LikedUser[]
  repostCount: number
  reposterId?: number
  reposterText?: string
  reposterUsername?: string
  reposterFullname?: string
  reposterVerified?: boolean
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

const PostsView: React.FC<any> = ({ posts }: any) => {
  return (
    <div className="w-full flex items-center flex-col">
      {posts[0]?.map((post: PostProps, i: number) =>
        post.type === 'post' ? (
          post.image ? (
            <Post
              key={i}
              postId={post.postId}
              text={post.text}
              image={post.image}
              type={post.type}
              status={post.status}
              createdAt={post.createdAt}
              userId={post.userId}
              username={post.username}
              fullname={post.fullname}
              verified={post.verified}
              avatar={post.avatar}
              likedByUser={post.likedByUser}
              comments={post.comments}
              likedByUsers={post.likedByUsers}
              repostCount={post.repostCount}
            />
          ) : (
            <PostWithoutImage
              key={i}
              avatar={post.avatar}
              createdAt={post.createdAt}
              fullname={post.fullname || ''}
              username={post.username}
              likedByUser={post.likedByUser}
              likedByUsers={post.likedByUsers}
              text={post.text || ''}
              verified={post.verified}
              comments={post.comments}
              postId={post.postId}
              userId={post.userId}
              repostCount={post.repostCount}
            />
          )
        ) : (
          <ReplyPost
            avatar={post.avatar}
            createdAt={post.createdAt}
            fullname={post.fullname || ''}
            image={post.image || ''}
            likedByUser={post.likedByUser}
            likedByUsers={post.likedByUsers}
            repostCount={post.repostCount}
            text={post.text || ''}
            userId={post.userId}
            comments={post.comments}
            username={post.username}
            verified={post.verified}
            key={i}
            postId={post.postId}
            reposterFullname={post.reposterFullname || ''}
            reposterId={post.reposterId || 0}
            reposterText={post.reposterText || ''}
            reposterUsername={post.reposterUsername || ''}
            reposterVerified={post.reposterVerified || false}
          />
        )
      )}
    </div>
  )
}

export default PostsView
