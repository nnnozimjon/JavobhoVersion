/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Input from '../Input/Input'
import Button from '../Button'
import { useUser } from '@/store/contexts/UserContect'

const EditProfileModal: React.FC<any> = () => {
  const { user } = useUser()
  const [description, setDescription] = React.useState<string>('')
  const [username, setUsername] = React.useState<string>('')
  const [fullname, setFullname] = React.useState<string>('')

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    setUsername(user.username)
    setFullname(user.fullname)
    setDescription(user.description)
  }, [])

  const handleTextChange = (event: any) => {
    const newText = event.target.value
    const isEnterKey = event.keyCode === 13

    if (isEnterKey) {
      setDescription(prevText => prevText + '<br/>')
    } else {
      setDescription(newText)
    }
  }

  const adjustTextAreaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }
  return (
    <>
      <div className="flex flex-col gap-[15px] my-[30px]">
        <div className="flex items-center flex-col gap-[5px]">
          <img src={user.splashImage} alt="header image" />
          <div className="flex gap-[10px]">
            <Button
              bg="main"
              text="Change Image"
              color="white"
              className="font-normal text-[10px] h-[32px] hover:bg-dGray"
              name="changeImage"
            />
            <Button
              bg="main"
              text=""
              color="white"
              className="font-normal text-[10px] h-[32px] hover:bg-ruby"
              name="trash"
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <img
            src={user.avatar}
            alt="header image"
            width={120}
            height={120}
            className="rounded-full border-[3px] border-silver"
          />
          <Button
            bg="main"
            text="Change Image"
            color="white"
            className="font-normal text-[10px] h-[32px] hover:bg-dGray"
            name="changeImage"
          />
          <Button
            bg="main"
            text=""
            color="white"
            className="font-normal text-[10px] h-[32px] hover:bg-ruby"
            name="trash"
          />
        </div>

        <Input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <Input
          type="text"
          placeholder="Fullname"
          onChange={e => setFullname(e.target.value)}
          value={fullname}
        />
        <textarea
          ref={textAreaRef}
          value={description}
          onChange={handleTextChange}
          onInput={adjustTextAreaHeight}
          placeholder="Description"
          className="border w-full scrollbar-hide overflow-hidden outline-none rounded border-invisible p-[5px] max-h-[100px]"
        />

        <Button bg="main" text="Submit" color="white" />
      </div>
    </>
  )
}

export default EditProfileModal
