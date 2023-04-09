import apiPaths from '@/constants/apiRoutes'
import { Axios } from '@/utils/Axios'

const getFollwingAndFollowers = async (token: string, userId: number) => {
  return Axios.get(apiPaths.profile.getAllFollowersAndFollowing + userId, {
    headers: { Authorization: token },
  })
}

export const ApiProfile = {
  getFollwingAndFollowers,
}
