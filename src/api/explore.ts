import apiPaths from '@/constants/apiRoutes'
import { Axios } from '@/utils/Axios'

const getAllTags = async (token: string) => {
  return Axios.get(apiPaths.explore.tags, {
    headers: {
      Authorization: token,
    },
  })
}

export const ApiExplore = {
  getAllTags,
}
