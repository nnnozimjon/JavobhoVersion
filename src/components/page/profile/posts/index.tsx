import React from 'react'
import { Post } from '@/components/Post'
import PostWithoutImage from '@/components/Post/Post/PostWithoutImage'

export interface PostProps {
  postId: number
  text?: string
  image?: string
  type: string
  status: string
  createdAt: string
  userId: number
  username: string
  fullname?: string
  verified: boolean
  avatar: string
  likedByUser: boolean
  comments: Comment[]
  likedByUsers: LikedUser[]
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

interface LikedUser {
  userId: number
  username: string
  verified: boolean
  fullname?: string
}

const PostsView: React.FC<any> = ({ posts }: any) => {
  return (
    <div className="w-full flex items-center flex-col">
      {posts[0]?.map((post: PostProps, i: number) =>
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
          />
        ) : (
          <PostWithoutImage
            key={i}
            avatar={post.avatar}
            createdAt={post.createdAt}
            fullname={post.fullname || ''}
            username={post.username}
            liked={post.likedByUser}
            likes={post.likedByUsers.length}
            text={post.text || ''}
            verified={post.verified}
          />
        )
      )}
    </div>
  )
}

export default PostsView
