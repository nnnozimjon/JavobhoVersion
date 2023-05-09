/* eslint-disable react/no-children-prop */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { parseCookies } from 'nookies'

import {
  PostsView,
  MediaView,
  QuestionsView,
  RepliesView,
  LikesView,
  BioView,
} from '@/components/page/profile'
import Ico from '@/components/Icon'
import { useUser } from '@/store/contexts/UserContect'
import { ApiProfile } from '@/api/profile'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Modal from '@/components/useModal/Modal'
import EditProfileModal from '@/components/Modals/EditProfileModal'
import { ApiPost } from '@/api/post'
import Cookies from 'js-cookie'

export const ProfileView: React.FC<any> = ({
  view,
  AllUserPosts,
  setIsUserFollowing,
  isUserFollowing,
}: any) => {
  switch (view) {
    case 'posts':
      return (
        <PostsView
          posts={AllUserPosts}
          setIsUserFollowing={setIsUserFollowing}
          isUserFollowing={isUserFollowing}
        />
      )
    case 'questions':
      return <QuestionsView posts={AllUserPosts} />
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

const UsersProfile: NextPage<any> = ({ params, following, AllUserPosts }) => {
  const token = Cookies.get('access_token') || ''
  const [view, setView] = React.useState<string>('posts')
  const { user } = useUser()

  const [followersCountState, setFollowersCountState] = React.useState(0)
  const [followingCountState, setFollowingCountState] = React.useState(0)
  const [isUserFollowing, setIsUserFollowing] = React.useState<boolean>(false)

  React.useEffect(() => {
    setFollowersCountState(following[0].followers.length)
    setFollowingCountState(following[0].following.length)
    setIsUserFollowing(params.isFollowing)
  }, [])

  const [editProfileModalState, setEditProfileModalState] =
    React.useState<boolean>(false)

  const openEditModalState = () => {
    setEditProfileModalState(true)
  }
  const closeEditModalState = () => {
    setEditProfileModalState(false)
  }

  const handleFollow = () => {
    if (isUserFollowing) {
      setIsUserFollowing(false)
      ApiPost.unfollowUser(token, {
        followerId: user.userId,
        followingId: params.userId,
      }).then(res => {
        if (res.message != 'success') {
          setIsUserFollowing(true)
        }
      })
    } else {
      setIsUserFollowing(true)
      ApiPost.followUser(token, {
        followerId: user.userId,
        followingId: params.userId,
      }).then(res => {
        if (res.message != 'success') {
          setIsUserFollowing(false)
        }
      })
    }
  }

  return (
    <div className="h-full relative">
      <img
        src={params.splashImage}
        alt="profile_cover_image"
        className="sm:w-full sm:h-[200px] border-b border-invisible object-cover"
      />
      <div className="h-[200px] relative">
        <img
          src={params.avatar}
          alt="profile_photo"
          className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] rounded-full absolute sm:top-[-80px] top-[-40px] left-[40px] object-cover border-[3px] border-white"
        />
        {params.username === user.username ? (
          <button
            onClick={openEditModalState}
            className="absolute border border-invisible p-[5px_10px] rounded-full right-[30px] mt-[20px] select-none hover:bg-[rgba(0,0,0,0.1)] font-medium duration-300"
          >
            Edit Profile
          </button>
        ) : (
          <div className="absolute right-[30px] mt-[20px] flex items-center justify-between gap-[20px]">
            <Ico
              name="message"
              className="select-none  font-medium duration-300 cursor-pointer"
              size={25}
            />
            <button
              onClick={handleFollow}
              className="bg-dGray text-white p-[5px_10px] rounded-full select-none  font-medium duration-300"
            >
              {isUserFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        )}
        <div className="pt-[80px] p-[10px]">
          <div className=" flex items-center">
            <p className="font-bold text-[20px] pr-[10px]">{params.fullname}</p>
            {Boolean(params.verified) && <Ico name="verified" />}
          </div>
          <p className="font-medium text-dGray">@{params.username}</p>
          <p className="text-[15px]">{params.description}</p>
          <br />
          <div className="flex text-dGray items-center">
            <Ico name="calendar" size={20} />
            <p className="font-medium pl-[10px]">
              Joined{' '}
              {new Date(params.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
          <div>
            <p>
              <b className="pl-[5px] pr-[10px]">{followingCountState}</b>
              Following{' '}
              <b className="pl-[5px] pr-[10px]">{followersCountState}</b>
              Followers
            </p>
          </div>
          <br />
        </div>
        <div className="h-[50px] flex  justify-evenly items-center border-b border-invisible">
          <button
            onClick={() => setView('posts')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)]  cursor-pointer sm:text-[16px] text-[12px] select-none sm:w-full h-full flex items-center justify-center ${
              view === 'posts' && 'border-b-[5px]'
            } border-main`}
          >
            Posts
            {/* <Ico name='post'/> */}
          </button>
          <button
            onClick={() => setView('questions')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer sm:text-[16px] text-[12px] select-none sm:w-full h-full flex items-center justify-center ${
              view === 'questions' && 'border-b-[5px]'
            } border-main`}
          >
            Questions
            {/* <Ico name='edit'/> */}
          </button>
          <button
            onClick={() => setView('replies')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer sm:text-[16px] text-[12px] select-none sm:w-full h-full flex items-center justify-center ${
              view === 'replies' && 'border-b-[5px]'
            } border-main`}
          >
            Replies
            {/* <Ico name='answer'/> */}
          </button>
          {/* <button
            onClick={() => setView('media')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer sm:text-[16px] text-[12px] select-none sm:w-full h-full flex items-center justify-center ${
              view === 'media' && 'border-b-[5px]'
            } border-main`}
          >
            Media
          </button> */}
          {params.username === user.username && (
            <button
              onClick={() => setView('likes')}
              className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer sm:text-[16px] text-[12px] select-none sm:w-full h-full flex items-center justify-center ${
                view === 'likes' && 'border-b-[5px]'
              } border-main`}
            >
              Likes
              {/* <Ico name='like'/> */}
            </button>
          )}
          <button
            onClick={() => setView('bio')}
            className={`font-bold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer sm:text-[16px] text-[12px] select-none sm:w-full h-full flex  items-center justify-center ${
              view === 'bio' && 'border-b-[5px]'
            } border-main`}
          >
            Bio
          </button>
        </div>
        <div className="p-[10px] flex flex-col items-center overflow-hidden">
          <ProfileView
            view={view}
            AllUserPosts={AllUserPosts}
            setIsUserFollowing={setIsUserFollowing}
            isUserFollowing={isUserFollowing}   
          />
        </div>
        <br/>
        <br/>
      </div>
      <Modal
        isOpen={editProfileModalState}
        closeModal={closeEditModalState}
        children={<EditProfileModal />}
        title="Edit Profile"
      />
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const cookies = parseCookies(context)
  const token = cookies.access_token

  const { params } = context
  const username = params.profile

  const userProfile: any = await ApiProfile.userProfile(token, username).then(
    res => {
      return res.payload
    }
  )

  const following: any = await Promise.all([
    ApiProfile.getFollwingAndFollowers(token, userProfile.userId).then(res => {
      return res.payload
    }),
  ])

  const AllUserPosts: any = await Promise.all([
    ApiProfile.getAllUserPosts(token, userProfile.userId).then(res => {
      if (res.message === 'success') {
        return res.payload
      }
      return []
    }),
  ])

  if (!userProfile.username) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      following,
      params: userProfile,
      AllUserPosts,
    },
  }
}

export default UsersProfile
