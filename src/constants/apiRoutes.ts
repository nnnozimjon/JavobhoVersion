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
}

export default apiPaths
