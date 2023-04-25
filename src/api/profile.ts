import apiPaths from '@/constants/apiRoutes'
import { Axios, headerWithToken } from '@/utils/Axios'

const getFollwingAndFollowers = async (token: string, userId: number) => {
  return Axios.get(
    apiPaths.profile.getAllFollowersAndFollowing + userId,
    headerWithToken(token)
  )
}

const getAllUserPosts = async (token: string, userId: number) => {
  return Axios.get(
    apiPaths.profile.getAllUserPosts + userId,
    headerWithToken(token)
  )
}

const UploadPost = async (
  userId: number,
  text: string,
  image: any,
  type: string
) => {
  return Axios.post(apiPaths.profile.UploadPost, { userId, text, image, type })
}

const userProfile = async (token: string, username: string) => {
  return Axios.get(
    apiPaths.profile.userProfile + username,
    headerWithToken(token)
  )
}

const checkUsername = async (token: string) => {
  return Axios.get(apiPaths.profile.checkUsername, headerWithToken(token))
}

const updateProfile = async (
  token: string,
  userId: number,
  username: string,
  fullname: string,
  description: string
) => {
  return Axios.post(
    apiPaths.profile.updateProfile,
    {
      userId,
      username,
      fullname,
      description,
    },
    headerWithToken(token)
  )
}

export const ApiProfile = {
  userProfile,
  getFollwingAndFollowers,
  getAllUserPosts,
  UploadPost,
  updateProfile,
  checkUsername,
}
