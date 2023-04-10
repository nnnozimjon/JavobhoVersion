/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'

import {
  PostsView,
  MediaView,
  QuestionsView,
  RepliesView,
  LikesView,
  BioView,
} from '@/components/page/profile'
import Icon from '@/components/Icon'
import { useUser } from '@/store/contexts/UserContect'
import { ApiProfile } from '@/api/profile'
import { NextPage } from 'next'

export const ProfileView: React.FC<any> = ({ view, AllUserPosts }: any) => {
  switch (view) {
    case 'posts':
      return <PostsView posts={AllUserPosts} />
    case 'questions':
      return <QuestionsView />
    case 'replies':
      return <RepliesView />
    case 'media':
      return <MediaView />
    case 'likes':
      return <LikesView />
    case 'bio':
      return <BioView />
    default:
      return (
        <h1
          className="text-[20px] font-bold text-main
      "
        >
          404 NO CONTENT
        </h1>
      )
  }
}

const ProfilePage: NextPage<any> = ({ following, AllUserPosts }) => {
  const [view, setView] = React.useState<string>('posts')
  const { user } = useUser()

  return (
    <div className="h-full relative">
      <img
        src={user.splashImage}
        alt="profile_cover_image"
        className="w-full h-[200px] border-b border-invisible object-cover"
      />
      <div className="h-[200px]">
        <img
          src={user.avatar}
          alt="profile_photo"
          className="w-[150px] h-[150px] rounded-full absolute top-[120px] left-[40px] object-cover border-[3px] border-white"
        />
        <button className="absolute border border-invisible p-[5px_10px] rounded-full right-[30px] mt-[20px] select-none hover:bg-[rgba(0,0,0,0.1)] font-medium duration-300">
          Edit Profile
        </button>
        <div className="pt-[80px] p-[10px]">
          <div className=" flex items-center">
            <p className="font-bold text-[20px] pr-[10px]">{user.fullname}</p>
            {Boolean(user.verified) && <Icon name="verified" />}
          </div>
          <p className="font-medium text-dGray">@{user.username}</p>
          <p className="text-[15px]">{user.description}</p>
          <br />
          <div className="flex text-dGray items-center">
            <Icon name="calendar" size={20} />
            <p className="font-medium pl-[10px]">
              Joined{' '}
              {new Date(user.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
          <div>
            <p>
              <b className="pl-[5px] pr-[10px]">
                {following[0].following.length}
              </b>
              Following{' '}
              <b className="pl-[5px] pr-[10px]">
                {following[0].followers.length}
              </b>
              Followers
            </p>
          </div>
          <br />
        </div>
        <div className="h-[50px] flex justify-evenly items-center border-b border-invisible">
          <button
            onClick={() => setView('posts')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center ${
              view === 'posts' && 'border-b-[5px]'
            } border-main`}
          >
            Posts
          </button>
          <button
            onClick={() => setView('questions')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center ${
              view === 'questions' && 'border-b-[5px]'
            } border-main`}
          >
            Questions
          </button>
          <button
            onClick={() => setView('replies')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center ${
              view === 'replies' && 'border-b-[5px]'
            } border-main`}
          >
            Replies
          </button>
          <button
            onClick={() => setView('media')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center ${
              view === 'media' && 'border-b-[5px]'
            } border-main`}
          >
            Media
          </button>
          <button
            onClick={() => setView('likes')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center ${
              view === 'likes' && 'border-b-[5px]'
            } border-main`}
          >
            Likes
          </button>
          <button
            onClick={() => setView('bio')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer select-none w-full h-full flex items-center justify-center ${
              view === 'bio' && 'border-b-[5px]'
            } border-main`}
          >
            Bio
          </button>
        </div>
        <div className="p-[10px] flex flex-col items-center">
          <ProfileView view={view} AllUserPosts={AllUserPosts} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const cookies = parseCookies(context)
  const token = cookies.access_token

  const { userId }: any = await jwtDecode(token)
  const following: any = await Promise.all([
    ApiProfile.getFollwingAndFollowers(token, userId).then(res => {
      return res.payload
    }),
  ])

  const AllUserPosts: any = await Promise.all([
    ApiProfile.getAllUserPosts(userId).then(res => {
      return res.payload
    }),
  ])

  return {
    props: {
      following,
      AllUserPosts,
    },
  }
}

export default ProfilePage
