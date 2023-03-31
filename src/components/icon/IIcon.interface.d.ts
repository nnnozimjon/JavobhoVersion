/* eslint-disable no-unused-vars */
import React from 'react'

declare namespace IIcon {
  interface svgList {
    courses: React.ReactNode
    jobfinder: React.ReactNode
    bookshelf: React.ReactNode
    save: React.ReactNode
    calendar: React.ReactNode
    repost: React.ReactNode
    editDots: React.ReactNode
    comment: React.ReactNode
    like: React.ReactNode
    liked: React.ReactNode
    love: React.ReactNode
    loved: React.ReactNode
    verified: React.ReactNode
    ask: React.ReactNode
    post: React.ReactNode
    answer: React.ReactNode
    eye: React.ReactNode
    eyeSlash: React.ReactNode
    receiptItem: React.ReactNode
    document: React.ReactNode
    category2: React.ReactNode
    location: React.ReactNode
    dollarSquare: React.ReactNode
    dollarSquareFilled: React.ReactNode
    profile2User: React.ReactNode
    profile: React.ReactNode
    profileFilled: React.ReactNode
    judge: React.ReactNode
    judgeFilled: React.ReactNode
    undo: React.ReactNode
    bookmarks: React.ReactNode
    bookmarksFilled: React.ReactNode
    trash: React.ReactNode
    trashFilled: React.ReactNode
    export: React.ReactNode
    edit: React.ReactNode
    editFilled: React.ReactNode
    setting2: React.ReactNode
    setting2Filled: React.ReactNode
    import: React.ReactNode
    importFilled: React.ReactNode
    searchNormal: React.ReactNode
    arrowBottom: React.ReactNode
    arrowTop: React.ReactNode
    arrowRight: React.ReactNode
    arrowLeft: React.ReactNode
    moreHorizontal: React.ReactNode
    moreHorizontalScale: React.ReactNode
    lists: React.ReactNode
    listsFilled: React.ReactNode
    messageFilled: React.ReactNode
    message: React.ReactNode
    note: React.ReactNode
    noteFilled: React.ReactNode
    explore: React.ReactNode
    exploreFilled: React.ReactNode
    home: React.ReactNode
    homeFilled: React.ReactNode
    javobho: React.ReactNode
    checkbox: React.ReactNode
    checkboxEmpty: React.ReactNode
    info: React.ReactNode
    logout: React.ReactNode
    buildings: React.ReactNode
    buildingsFilled: React.ReactNode
    building: React.ReactNode
    buildingFilled: React.ReactNode
    key: React.ReactNode
    keyFilled: React.ReactNode
    arrowLongLeft: React.ReactNode
    closeSquare: React.ReactNode
    minusSquare: React.ReactNode
    topics: React.ReactNode
    share: React.ReactNode
    shareActive: React.ReactNode
    postIcon: React.ReactNode
    changeImage: React.ReactNode
    publish: React.ReactNode
  }

  type name = keyof svgList

  interface props {
    name: name
    size?: number
    className?: string
    onClick?: () => void
  }
}

export default IIcon
