import apiPaths from '@/constants/apiRoutes'
import { Axios, headerWithToken } from '@/utils/Axios'

const getAllTags = async (token: string) => {
  return Axios.get(apiPaths.explore.tags, headerWithToken(token))
}

export const ApiExplore = {
  getAllTags,
}
