/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Input from '../Input/Input'
import Button from '../Button'
import { useUser } from '@/store/contexts/UserContect'
import { ApiProfile } from '@/api/profile'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const EditProfileModal: React.FC<any> = () => {
  const { user } = useUser()
  const [error, setError] = React.useState('')
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
    setError('')
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

  function handleChangeProfile() {
    const token = Cookies.get('access_token') || ''
    ApiProfile.checkUsername(token, username, user.userId).then(res => {
      if (res.message == false) {
        setError('Username Exists!')
      } else {
        ApiProfile.updateProfile(
          token,
          user.userId,
          username.toLowerCase(),
          fullname,
          description
        ).then(res => {
          if (res.message === 'success') {
            Cookies.set('access_token', res.token)
            const decode: any = jwtDecode(res.token)
            const { username } = decode
            window.location.replace(`/${username}`)
          } else if (res.message === 'logout') {
            Cookies.remove('access_token')
            window.location.replace('/login')
          } else {
            setError('Try again!')
          }
        })
      }
    })
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
            {!RegExp('\\b' + 'default' + '\\b').test(user.avatar) && (
              <Button
                bg="main"
                text=""
                color="white"
                className="font-normal text-[10px] h-[32px] hover:bg-ruby"
                name="trash"
              />
            )}
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
          {!RegExp('\\b' + 'default' + '\\b').test(user.avatar) && (
            <Button
              bg="main"
              text=""
              color="white"
              className="font-normal text-[10px] h-[32px] hover:bg-ruby"
              name="trash"
            />
          )}
        </div>

        <Input
          type="text"
          placeholder="Username"
          onChange={e => {
            setUsername(e.target.value)
            setError('')
          }}
          value={username}
        />
        <Input
          type="text"
          placeholder="Fullname"
          onChange={e => {
            setFullname(e.target.value)
            setError('')
          }}
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

        <Button
          bg={error ? 'invisible' : 'main'}
          text="Submit changes"
          color="white"
          onClick={error ? () => {} : handleChangeProfile}
          className={`${
            !error ? 'hover:bg-dGray' : 'hover:bg-none cursor-default'
          } text-center`}
        />
        <p className="text-darkerRuby text-[12px] p-[0] m-[0] leading-[0px]">
          {error}
        </p>
      </div>
    </>
  )
}

export default EditProfileModal
