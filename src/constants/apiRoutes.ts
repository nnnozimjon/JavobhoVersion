const apiPaths = {
  auth: {
    login: '/api/auth/login',
    registration: '',
    verifyEmail: '',
    checkToken: '',
  },
  explore: {
    tags: '/api/user/explore/tags',
  },
  profile: {
    getAllFollowersAndFollowing: '/api/user/profile/follow/',
    getAllUserPosts: '/check/',
    UploadPost: '/api/user/upload/post',
  },
  post: {
    commentPost: '/api/user/comment/post',
    likePost: '/api/user/like/post',
    unlikePost: '/api/user/unlike/post',
    repostPost: '/api/user/repost/post',
  },
}

export default apiPaths
