/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { useUser } from '@/store/contexts/UserContect'
import Icon from '../Icon'
import html2canvas from 'html2canvas'
import { ApiProfile } from '@/api/profile'

const PostModal = () => {
  const { user } = useUser()
  const [text, setText] = useState<string>('')

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [bufferImage, setBufferImage] = React.useState<ArrayBuffer>()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const ImageRef = useRef<HTMLInputElement>(null)

  const setCropedImage = () => {
    const divElement = document.getElementById('qr-gen')
    if (divElement) {
      html2canvas(divElement).then((canvas: HTMLCanvasElement) => {
        canvas.toBlob((blob: any) => {
          const file = new File([blob], 'image.png', { type: 'image/png' })
          setSelectedFile(file)
        }, 'image/png')
      })
    }
  }

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setBufferImage(reader.result as ArrayBuffer)
      }
      reader.readAsDataURL(selectedFile as Blob)
    } else {
      setSelectedFile(null)
    }
  }, [selectedFile])

  const handleTextChange = (event: any) => {
    setText(event.target.value)
  }
  const handleClear = () => {
    setSelectedFile(null)
    const form: any = document.getElementById('form')

    if (form) {
      form.reset()
    }
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      setSelectedFile(selectedFile)
    } else {
      event.target.value = ''
    }
  }

  const handleClick = () => {
    if (ImageRef.current) {
      ImageRef.current.click()
    }
  }

  const adjustTextAreaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }

  const UploadPost = async () => {
    await setCropedImage()
    await ApiProfile.UploadPost(
      user.userId,
      text,
      bufferImage || '',
      'post'
    ).then(res => {
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
          className="border w-full scrollbar-hide overflow-hidden outline-none rounded border-invisible p-[5px]"
        />
        {selectedFile && (
          <div
            id="qr-gen"
            className="w-full h-[300px] overflow-scroll scrollbar-hide"
          >
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="image"
              className="object-cover scrollable-element"
            />
          </div>
        )}
        <div className="flex items-center justify-between mt-[10px]">
          <input
            ref={ImageRef}
            type="file"
            className="hidden"
            accept=".png, .jpeg, .jpg, .gif, .webp"
            onChange={handleImageChange}
          />
          <div className="flex gap-[15px] items-center cursor-pointer">
            <div onClick={handleClick} className="flex items-center gap-[3px]">
              <Icon name="post" className="text-indigo cursor-pointer" />
              <p className="leading-[8px]">select</p>
            </div>
            <div onClick={handleClear} className="flex items-center gap-[3px]">
              <Icon name="trash" className="text-indigo cursor-pointer" />
              <p className="leading-[12px]">clear</p>
            </div>
          </div>
          <div
            onClick={setCropedImage}
            className="flex gap-[5px] items-center cursor-pointer"
          >
            <Icon name="edit" className="text-indigo cursor-pointer" />
            <p className="leading-[12px]">crop</p>
          </div>
        </div>
      </form>
      <button
        onClick={selectedFile || text ? UploadPost : () => {}}
        className={`mt-[10px] rounded-full w-full p-[5px]  text-white ${
          selectedFile || text ? 'bg-main' : 'bg-invisible'
        }`}
      >
        Post
      </button>
    </div>
  )
}

export default PostModal
