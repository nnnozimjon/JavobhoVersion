import React from 'react'
import Image from 'next/image'
import sky from '@/assets/img/1500x500.jpg'
import profile from '@/assets/img/profile.jpg'
import {
  PostsView,
  MediaView,
  QuestionsView,
  RepliesView,
  LikesView,
  BioView,
} from '@/components/page/profile'
import Icon from '@/components/icon/Icon'

export const ProfileView: React.FC<any> = ({ view }: any) => {
  switch (view) {
    case 'posts':
      return <PostsView />
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

const Profile = () => {
  const [view, setView] = React.useState<string>('posts')

  return (
    <div className="h-full relative">
      <Image
        src={sky}
        alt="profile_cover_image"
        className="w-full h-[200px] border-b border-invisible object-cover"
      />
      <div className="h-[200px]">
        <Image
          src={profile}
          alt="profile_photo"
          className="w-[150px] h-[150px] rounded-full absolute top-[120px] left-[40px] object-cover border-[3px] border-white"
        />
        <button className="absolute border border-invisible p-[5px_10px] rounded-full right-[30px] mt-[20px] select-none hover:bg-[rgba(0,0,0,0.1)] font-medium duration-300">
          Edit Profile
        </button>
        <div className="pt-[80px] p-[10px]">
          <div className=" flex items-center">
            <p className="font-bold text-[20px] pr-[10px]">
              Nozimjon Shamsulloev
            </p>
            <Icon name="verified" />
          </div>
          <p className="font-medium text-dGray">@nozimjon</p>
          <p className="text-[15px]">
            {`Hey, it's Nozimjon Shamsulloev, Welcome. I'm fullstack developer.
            You know when I first started programming I didn't know that
            programmers code in computers instead I was writing codes in papers.`}
          </p>
          <br />
          <div className="flex text-dGray items-center">
            <Icon name="calendar" size={20} />
            <p className="font-medium pl-[10px]">Joined December 2022</p>
          </div>
          <div>
            <p>
              <b className="pl-[5px] pr-[10px]">62</b>Following{' '}
              <b className="pl-[5px] pr-[10px]">13</b>
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
          <ProfileView view={view} />
        </div>
      </div>
    </div>
  )
}

export default Profile
