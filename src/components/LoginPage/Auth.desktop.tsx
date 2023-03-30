import React from 'react'
import Image from 'next/image'
import sky from '@/assets/img/back.jpg'
import logo from '@/assets/img/svg-logo.png'
import Input from '../Input/Input'
import Button from '../Button'
import { auth } from '@/api/auth'
import { AxiosResponse } from 'axios'

const AuthDesktop = () => {
  const [username, setUserName] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const login = () =>
    auth
      .login({ username, password })
      .then((res: AxiosResponse) => console.log(res))

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Image
        src={sky}
        alt="background"
        className="w-full h-full absolute select-none"
      />
      <div className="flex flex-col gap-[15px] text-black z-10 bg-[#fff] w-[420px] rounded-[20px] p-[20px] shadow-sm shadow-gray min-w-[420px]">
        <div className="flex items-center justify-center gap-[15px]">
          <Image src={logo} alt="Javobho logo" className="w-[50px]" />
          <h1 className={`text-center font-bold text-[25px] text-main`}>
            Login
          </h1>
        </div>
        <Input
          placeholder={'Username'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value)
          }}
          type={'text'}
          value={username}
        />
        <Input
          placeholder={'Password'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
          }}
          type={'password'}
          value={password}
        />
        <button
          onClick={login}
          className="p-[10px] rounded-full bg-darkblue text-white hover:bg-main transition duration-500 font-bold"
        >
          Login
        </button>
        <Button />
        <div>Remember me</div>
        <div>Registration</div>
      </div>
    </div>
  )
}

export default AuthDesktop
