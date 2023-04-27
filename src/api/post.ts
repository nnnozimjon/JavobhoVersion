import apiPaths from '@/constants/apiRoutes'
import { Axios, headerWithToken } from '@/utils/Axios'

// postId , text, userId
const commentPost = async (token: string, body: any) => {
  return Axios.post(apiPaths.post.commentPost, body, headerWithToken(token))
}

const likePost = async (token: string, body: any) => {
  return Axios.post(apiPaths.post.likePost, body, headerWithToken(token))
}
const unlikePost = async (token: string, body: any) => {
  return Axios.post(apiPaths.post.unlikePost, body, headerWithToken(token))
}

const repostPost = async (token: string, body: any) => {
  return Axios.post(apiPaths.post.repostPost, body, headerWithToken(token))
}

const bookmarkPost = async (token: string, body: any) => {
  return Axios.post(apiPaths.post.bookmarkPost, body, headerWithToken(token))
}
const bookmarkDelete = async (token: string, body: any) => {
  return Axios.post(apiPaths.post.bookmarkDelete, body, headerWithToken(token))
}

const UploadPost = async (
  userId: number,
  text: string,
  image: any,
  type: string
) => {
  return Axios.post(apiPaths.profile.UploadPost, { userId, text, image, type })
}

export const ApiPost = {
  commentPost,
  UploadPost,
  likePost,
  unlikePost,
  repostPost,
  bookmarkPost,
  bookmarkDelete,
}
