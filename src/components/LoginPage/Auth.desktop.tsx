import React from 'react'
import Image from 'next/image'
import sky from '@/assets/img/back.jpg'
import logo from '@/assets/img/svg-logo.png'
import Input from '../Input/Input'
import { useUser } from '@/store/contexts/UserContect'
import { ApiAuth } from '@/api/auth'
import { cookies } from '@/utils/Cookies'
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

  const [robot, setRobot] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>('')

  const handleLogin = async () => {
    username.length >= 3 &&
      username &&
      password &&
      password.length >= 8 &&
      (await ApiAuth.login({ username, password, robot }).then(
        (res: UserPayloadRespone) => {
          console.log(res)
          if (res?.message !== 'Success') {
            setError(res.message)
          }
          setUser(jwtDecode(res.token))
          cookies.set('access_token', res.token)
        }
      ))
    router.replace('/')
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Image
          src={sky}
          alt="background"
          className="w-full h-full absolute select-none object-cover"
        />
        <div className="flex flex-col gap-[15px] text-black z-10 bg-[#fff] lg:w-[420px] w-[300px] md:w-[400px] rounded-[20px] p-[20px] shadow-sm shadow-gray">
          <div className="flex items-center justify-center gap-[15px]">
            <Image src={logo} alt="Javobho logo" className="w-[50px]" />
            <h1 className={`text-center font-bold text-[25px] text-main`}>
              Login
            </h1>
          </div>
          <Input
            placeholder={'Username'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) {
                setError('')
              }
              setUserName(e.target.value)
            }}
            type={'text'}
            value={username}
          />
          <Input
            placeholder={'Password'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) {
                setError('')
              }
              setPassword(e.target.value)
            }}
            type={'password'}
            value={password}
          />
          <p className="font-medium text-[12px] text-darkerRuby">{error}</p>
          <div className="flex flex-col-reverse lg:flex-row md:flex-row md:justify-between  lg:justify-between items-start place-items-end">
            <div className="flex items-center p-[5px]">
              <input
                type="checkbox"
                checked={robot}
                onChange={() => {
                  setError('')
                  setRobot(!robot)
                }}
              />
              <p className="pb-[4px] pl-[10px]"> I am not Robot</p>
            </div>
            <button className="pb-[4px] hover:underline text-[12px]">
              Forgot password
            </button>
          </div>
          <button
            onClick={handleLogin}
            className={`p-[10px] rounded-full ${
              username.length >= 3 &&
              username &&
              password &&
              password.length >= 8
                ? 'bg-darkblue hover:bg-main'
                : 'bg-invisible'
            } text-white transition duration-500 font-bold`}
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}

export default AuthDesktop
