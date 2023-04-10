import React from 'react'
import { Post } from '@/components/Post'

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

interface Comment {
  commentId: number
  userId: number
  text: string
  createdAt: string
  postId: number
}

interface LikedUser {
  userId: number
  username: string
  verified: boolean
  fullname?: string
}

const PostsView: React.FC<any> = ({ posts }: any) => {
  console.log(posts[0])
  return (
    <div className="w-full">
      {posts[0]?.map((post: PostProps, i: number) => (
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
      ))}
    </div>
  )
}

export default PostsView
