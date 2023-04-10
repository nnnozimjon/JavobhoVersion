import apiPaths from '@/constants/apiRoutes'
import { Axios, headerWithToken } from '@/utils/Axios'

const getFollwingAndFollowers = async (token: string, userId: number) => {
  return Axios.get(
    apiPaths.profile.getAllFollowersAndFollowing + userId,
    headerWithToken(token)
  )
}

const getAllUserPosts = async (userId: number) => {
  return Axios.get(apiPaths.profile.getAllUserPosts + userId)
}

export const ApiProfile = {
  getFollwingAndFollowers,
  getAllUserPosts,
}
