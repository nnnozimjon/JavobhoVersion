/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRef, useState } from 'react'
import { useUser } from '@/store/contexts/UserContect'
import { ApiProfile } from '@/api/profile'

const AskModal = () => {
  const { user } = useUser()
  const [text, setText] = useState<string>('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleTextChange = (event: any) => {
    const newText = event.target.value
    const isEnterKey = event.keyCode === 13

    if (isEnterKey) {
      setText(prevText => prevText + '<br/>')
    } else {
      setText(newText)
    }
  }

  const adjustTextAreaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }

  const UploadPost = async () => {
    await ApiProfile.UploadPost(user.userId, text, '', 'question').then(res => {
      if (res.message === 'success') {
        window.location.reload()
      }
    })
  }

  return (
    <div>
      <div className="flex gap-[10px] mb-[10px] items-center">
        <img
          src={user.avatar}
          alt="profile"
          className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
        />
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-[14px] leading-[10px]">
            {user.fullname && user.fullname}
          </p>
          <p className="font-medium text-[13px] text-indigo ">
            @{user.username}
          </p>
        </div>
      </div>
      <form id="form">
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={handleTextChange}
          onInput={adjustTextAreaHeight}
          placeholder="Start your question with What , Why , When etc. "
          className="border w-full scrollbar-hide overflow-hidden outline-none rounded border-invisible p-[5px] max-h-[200px]"
        />
      </form>
      <button
        onClick={text ? UploadPost : () => {}}
        className={`mt-[10px] rounded-full w-full p-[5px]  text-white ${
          text ? 'bg-main' : 'bg-invisible'
        }`}
      >
        Add Question
      </button>
    </div>
  )
}

export default AskModal
