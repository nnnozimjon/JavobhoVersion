/* eslint-disable no-unused-vars */
declare namespace IExplore {
  interface payload {
    hashTags: tags[]
  }

  interface tags {
    tagId: number
    name: string
    category?: string
    postCount: number
  }

  interface Post {
    postId: number
    text?: string
    image?: string
    type: string
    status: string
    userId: string
    createdAt: string
  }
}

export default IExplore
