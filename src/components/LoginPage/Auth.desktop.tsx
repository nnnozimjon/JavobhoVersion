import React from 'react'
import Image from 'next/image'
import sky from '@/assets/img/back.jpg'
import logo from '@/assets/img/svg-logo.png'
import Input from '../Input/Input'
import { useUser } from '@/store/contexts/UserContect'
import { auth } from '@/api/auth'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'

interface UserPayloadRespone {
  message: string
  token: string
}

const AuthDesktop = () => {
  const router = useRouter()
  const { setUser } = useUser()
  const [username, setUserName] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [robot, setRobot] = React.useState<boolean>(true)

  const handleLogin = async () => {
    await auth
      .login({ username, password, robot })
      .then((res: UserPayloadRespone) => {
        setUser(jwtDecode(res.token))
        Cookies.set('access_token', res.token)
        router.replace(router.asPath)
      })
  }

  return (
    <>
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
            onClick={handleLogin}
            className="p-[10px] rounded-full bg-darkblue text-white hover:bg-main transition duration-500 font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}

export default AuthDesktop
