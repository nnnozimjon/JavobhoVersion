/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import bookmarksImage from '@/assets/img/bookmarks.png'

const Bookmarks = () => {
  const [bookmarkState, setBookmarkState] = React.useState<any[]>([])

  React.useEffect(() => {
    setBookmarkState((prev: any) => ({ ...prev }))
  }, [])

  return (
    <div className="flex flex-col items-center">
      {!bookmarkState.length && (
        <>
          <Image src={bookmarksImage} alt="" className="w-[300px]" />
          <h1 className="font-bold text-[24px] w-[350px] text-darkerIndigo">
            Сохраняйте посты, вопросы и ответы на потом
          </h1>

          <p className="w-[350px] font-normal text-dGray">
            не теряйте из виду хорошие посты! Добавляйте их в закладки, чтобы
            без труда возвращаться к ним в будущем.
          </p>
        </>
      )}
    </div>
  )
}

export default Bookmarks
