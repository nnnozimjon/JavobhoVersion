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
    getAllUserPosts: '/api/user/get/posts/',
    UploadPost: '/api/user/upload/post',
    userProfile: '/api/user/get/profile/',
    updateProfile: '/api/user/update/profile',
    checkUsername: '/api/user/check/username/availability',
  },
  post: {
    commentPost: '/api/user/comment/post',
    likePost: '/api/user/like/post',
    unlikePost: '/api/user/unlike/post',
    repostPost: '/api/user/repost/post',
  },
}

export default apiPaths
